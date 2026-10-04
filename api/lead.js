// POST /api/lead: the quote forms on this site hand a lead to 4 U's app (the board, the office email, the lead text).
// Server side so the app's address and any later key stay off the page. A failed hand-off answers { ok: false }
// and the page tells the visitor to call; it never throws at them.
const APP_LEAD_URL = process.env.APP_LEAD_URL || 'https://4u-os.vercel.app/api/contact-form/four-u-tree'
const KEYS = ['name', 'phone', 'email', 'service', 'address', 'message', 'website']

export async function POST(request) {
  const body = await request.json().catch(() => null)
  const raw = body && typeof body.fields === 'object' && !Array.isArray(body.fields) ? body.fields : null
  if (!raw) return Response.json({ ok: false, error: 'fields required' }, { status: 400 })

  const fields = {}
  for (const k of KEYS) {
    const v = String(raw[k] ?? '').trim().slice(0, k === 'message' ? 2000 : 200)
    if (v) fields[k] = v
  }
  if (!fields.phone && !fields.email) return Response.json({ ok: false, error: 'phone or email required' }, { status: 400 })

  try {
    const r = await fetch(APP_LEAD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        page_url: String(body.page_url ?? '').slice(0, 500) || null,
        referrer: String(body.referrer ?? '').slice(0, 500) || null,
      }),
      signal: AbortSignal.timeout(10000),
    })
    if (!r.ok) {
      console.error('[lead] app answered', r.status)
      return Response.json({ ok: false })
    }
    return Response.json({ ok: true })
  } catch (e) {
    console.error('[lead] app unreachable:', e?.message)
    return Response.json({ ok: false })
  }
}
