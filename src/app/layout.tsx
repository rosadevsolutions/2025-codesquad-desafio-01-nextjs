import { Footer } from "@/components/footer/footer";
import { Form } from "@/components/form/form";
import { Header } from "@/components/header/header";
import "./globals.css";

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
