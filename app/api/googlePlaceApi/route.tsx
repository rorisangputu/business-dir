import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
const API_KEY = process.env.PLACES_API;

export async function GET(request: any) {
    const { searchParams }: any = new URL(request.url);
    const q = searchParams.get('q');

    const res = await fetch(
        BASE_URL + "query=" + q + "&key=" + API_KEY,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    const response = await res.json();
    //console.log(response);
    return NextResponse.json({ response })
}