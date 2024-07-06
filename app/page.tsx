"use client";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Image from "next/image";
import PlaceList from "@/components/PlaceList";
import { useEffect, useState } from "react";

export default function Home() {
  const getPlaceList = async (value: string) => {
    const res = await fetch("/api/google-place-api?q=" + value);
    const data = await res.json();

    console.log(data.response.results);
    setPlaceList(data.response.results);
  }
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList('Bars in Cape Town');
  }, []);

  return (
    <>
      <Header />
      <Hero handleSearch={(value: string) => getPlaceList(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </>
  );
}
