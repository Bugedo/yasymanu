import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import EventInfo from '@/components/EventInfo';
import RSVPForm from '@/components/RSVPForm';
import GiftList from '@/components/GiftList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Countdown />
      <Gallery />
      <EventInfo />
      <RSVPForm />
      <GiftList />
      <Footer />
    </main>
  );
}
