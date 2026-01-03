import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Portfólio | Desenvolvedor Web",
  description: "Portfólio profissional apresentando projetos e habilidades em desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
