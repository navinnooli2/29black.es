import HeroBanner from "@/components/home/HeroBanner";
import LatestBigWins from "@/components/home/LatestBigWins";
import SlotsSection from "@/components/home/SlotsSection";
import PopularSports from "@/components/home/PopularSports";
import LiveCasino from "@/components/home/LiveCasino";
import LiveBets from "@/components/home/LiveBets";
import VIPTeaser from "@/components/home/VIPTeaser";
import FAQPreview from "@/components/home/FAQPreview";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full">
        <div className="pt-4">
          <HeroBanner />
        </div>
        <LatestBigWins />
        <SlotsSection />
        <PopularSports />
        <LiveCasino />
        <LiveBets />
        <VIPTeaser />
        <FAQPreview />
      </div>
    </div>
  );
}
