import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const POST = async (req: Request) => {
  try {
    const formData = await req.json();
    const parsedData = contactFormSchema.parse(formData);

    await prisma.contactSubmission.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        subject: parsedData.subject,
        message: parsedData.message,
      },
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
};
