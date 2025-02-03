import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  console.log('API Route hit');
  try {
    const { firstname, lastname, phonenumber, email, date, message } = await req.json();

    // Basic validation
    if (!firstname || !lastname || !phonenumber || !email || !date) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Save to database using Prisma
    const booking = await prisma.books.create({
      data: { firstname, lastname, phonenumber, email, date: new Date(date), message },
    });

    // Return the newly created booking record
    return NextResponse.json({ message: "Appointment booked successfully!", booking }, { status: 200 });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
