import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
const API_KEY = process.env.PLACES_API;

export async function GET(request: any) {

    const res = await fetch(
        BASE_URL + "query=restaurants%20in%20Johannesburg&key=" + API_KEY,
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