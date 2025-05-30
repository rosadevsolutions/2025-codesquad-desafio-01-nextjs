import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";

export const metadata : Metadata = {
  title: 'SISPAR - Novo Portal',
  description: 'Portfólio de Romulo Rosa - Desenvolvedor Full Stack',
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
        {children}
      </body>
    </html>
  );
}
