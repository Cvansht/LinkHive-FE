
import Hero from '../components/landingPage/Hero';
import Features from '../components/landingPage/Features';
import Showcase from '../components/landingPage/ShowCase';
import Testimonials from '../components/landingPage/Testimonials';
import CallToAction from '../components/landingPage/CallToAction';
import Footer from '../components/landingPage/Footer';

function LandingPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;