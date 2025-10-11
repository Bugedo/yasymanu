import FixedBackground from '@/components/FixedBackground';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import RSVPForm from '@/components/RSVPForm';
import GiftList from '@/components/GiftList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FixedBackground />
      <Hero />
      <EventInfo />
      <RSVPForm />
      <GiftList />
      <Footer />
    </main>
  );
}
