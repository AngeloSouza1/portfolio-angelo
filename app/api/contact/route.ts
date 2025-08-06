// app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  let transporter;

  if (process.env.NODE_ENV === "development") {
    // em dev, cria conta de teste Ethereal
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } else {
    // em produção, usa Gmail + App Password
    transporter = nodemailer.createTransport({
      host:   process.env.EMAIL_HOST,
      port:   Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });
  }

  // envia a mensagem
  const info = await transporter.sendMail({
    from:    process.env.EMAIL_FROM,
    to:      process.env.EMAIL_TO,
    subject: `Nova mensagem de ${name}`,
    text:    `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  // em dev, expõe link de preview
  if (process.env.NODE_ENV === "development") {
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  }

  return NextResponse.json({ ok: true });
}
