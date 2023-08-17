"use client";

import AboutUs from "@/app/components/navbar/AboutUs";
import DonateSection from "@/app/components/navbar/DonateSection";
import BannerCards from "@/app/components/navbar/BannerCards";
import EventCards from "@/app/components/navbar/EventCards";

export default function Home() {
  return (
    <div>
      
      <BannerCards/>
      <EventCards/>
      <AboutUs/>
      <DonateSection/>
    </div>
  );
}
