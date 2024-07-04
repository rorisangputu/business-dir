"use client";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Image from "next/image";
import PlaceList from "@/components/PlaceList";
import { useEffect, useState } from "react";

export default function Home() {
  const getPlaceList = async () => {
    const res = await fetch("/api/google-place-api?q=Hotels in Rustenburg");
    const data = await res.json();

    //console.log(data.response.results);
    setPlaceList(data.response.results);
  }
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </>
  );
}
