import Hero from "@/components/Hero";
import Header from "@/components/Header";

import Image from "next/image";
import PlaceList from "@/components/PlaceList";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PlaceList />
    </>
  );
}
