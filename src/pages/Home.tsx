import Hero from '../components/Hero';
import ThreePillars from '../components/ThreePillars';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <AboutUs />
      <Services />
      <Gallery />
      <ContactForm />
    </>
  );
}
