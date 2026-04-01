import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Advantages from "@/components/home/Advantages";
import Reviews from "@/components/home/Reviews";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Advantages />
      <Reviews />
      <CallToAction />
    </>
  );
}
