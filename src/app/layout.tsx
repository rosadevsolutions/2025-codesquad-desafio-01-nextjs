import { Footer } from "@/components/footer/footer";
import { Form } from "@/components/form/form";
import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata : Metadata = {
  title: 'Rosadev Solutions - Dessenvolvimento Web',
  description: 'Portfólio de Romulo Rosa - Desenvolvedor Full Stack',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  openGraph : {
    images: ['/images/rosadev-thumb.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
