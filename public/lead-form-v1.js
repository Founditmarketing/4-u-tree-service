// The two quote forms (home #quote and /contact) come from the bundle with no submit action.
// This listens for their submit, reads the fields, and posts them to /api/lead.
(function () {
  var PHONE = '256-996-4740'
  function say(form, text, bad) {
    var p = form.querySelector('[data-lead-status]')
    if (!p) {
      p = document.createElement('p')
      p.setAttribute('data-lead-status', '')
      p.setAttribute('role', 'status')
      p.style.cssText = 'margin-top:12px;font-weight:700;font-size:14px;line-height:1.4'
      form.appendChild(p)
    }
    p.style.color = bad ? '#f87171' : '#ffffff'
    p.textContent = text
  }
  function val(el) { return el ? String(el.value || '').trim() : '' }

  document.addEventListener('submit', function (e) {
    var form = e.target
    if (!(form instanceof HTMLFormElement) || !form.querySelector('textarea')) return
    e.preventDefault()
    if (form.getAttribute('data-sending') === '1') return

    var texts = form.querySelectorAll('input[type="text"]:not([name="website"])')
    var addr = null
    for (var i = 0; i < texts.length; i++) if (/address|zip/i.test(texts[i].placeholder || '')) addr = texts[i]
    var sel = form.querySelector('select')
    var service = sel && sel.value ? ((sel.options[sel.selectedIndex] || {}).text || sel.value) : ''
    var fields = {
      name: val(texts[0] && texts[0] !== addr ? texts[0] : null),
      phone: val(form.querySelector('input[type="tel"]')),
      email: val(form.querySelector('input[type="email"]')),
      service: service,
      address: val(addr),
      message: val(form.querySelector('textarea')),
      website: val(form.querySelector('input[name="website"]')),
    }
    if (!fields.phone && !fields.email) { say(form, 'Add a phone number or email so we can reach you.', true); return }

    var btn = form.querySelector('button')
    form.setAttribute('data-sending', '1')
    if (btn) btn.disabled = true
    say(form, 'Sending', false)
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: fields, page_url: location.href, referrer: document.referrer || null }),
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false } }) })
      .catch(function () { return { ok: false } })
      .then(function (j) {
        form.removeAttribute('data-sending')
        if (btn) btn.disabled = false
        if (j && j.ok) { form.reset(); say(form, 'Got it. We will reach out soon.', false) }
        else say(form, 'That did not go through. Call us at ' + PHONE + '.', true)
      })
  })

  // A field people never see; a bot that fills it is dropped by the app.
  function trap() {
    var forms = document.querySelectorAll('form')
    for (var i = 0; i < forms.length; i++) {
      if (!forms[i].querySelector('textarea') || forms[i].querySelector('input[name="website"]')) continue
      var hp = document.createElement('input')
      hp.type = 'text'; hp.name = 'website'; hp.tabIndex = -1; hp.autocomplete = 'off'
      hp.setAttribute('aria-hidden', 'true')
      hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0'
      forms[i].appendChild(hp)
    }
  }
  new MutationObserver(trap).observe(document.documentElement, { childList: true, subtree: true })
})()
