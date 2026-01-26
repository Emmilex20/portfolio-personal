import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function GET() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();

  // Background accent
  page.drawRectangle({
    x: 0,
    y: height - 170,
    width,
    height: 170,
    color: rgb(0.08, 0.16, 0.35),
  });

  // Title
  page.drawText("Emmanuel Agina", {
    x: 48,
    y: height - 80,
    size: 28,
    font: bold,
    color: rgb(1, 1, 1),
  });

  page.drawText("Frontend Developer • Next.js • UI Systems", {
    x: 48,
    y: height - 110,
    size: 12,
    font,
    color: rgb(0.9, 0.93, 1),
  });

  // Body
  const left = 48;
  let y = height - 220;

  const sections = [
    {
      h: "Collaboration Summary",
      p: [
        "I build modern web products with premium UI, clear UX, and strong performance.",
        "I collaborate with teams to ship fast without sacrificing design quality.",
      ],
    },
    {
      h: "Strengths",
      p: [
        "• Next.js App Router + TypeScript",
        "• Tailwind + Design Systems (shadcn/ui)",
        "• Payments (Paystack/Stripe), dashboards, booking flows",
      ],
    },
    {
      h: "Links",
      p: [
        "GitHub: github.com/Emmilex20",
        "Portfolio: (your domain)",
        "Email: aginaemmanuel6@gmail.com",
      ],
    },
  ];

  for (const sec of sections) {
    page.drawText(sec.h, {
      x: left,
      y,
      size: 14,
      font: bold,
      color: rgb(0.1, 0.1, 0.12),
    });
    y -= 22;

    for (const line of sec.p) {
      page.drawText(line, {
        x: left,
        y,
        size: 11,
        font,
        color: rgb(0.2, 0.2, 0.22),
      });
      y -= 16;
    }
    y -= 16;
  }

  page.drawText("Generated from portfolio • 2026", {
    x: left,
    y: 40,
    size: 9,
    font,
    color: rgb(0.45, 0.45, 0.5),
  });

  const pdfBytes = await pdfDoc.save();
  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Emmanuel-Agina-Collaboration-Profile.pdf"',
    },
  });
}