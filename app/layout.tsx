import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Arnav Hooda — Applied AI, ML & Product Engineering',
  description:
    'Portfolio of Arnav Hooda, an AI & ML engineering student and Samsung PRISM team lead building language systems, software products, and independent ventures.',
  keywords: [
    'Arnav Hooda',
    'AI engineer',
    'machine learning',
    'NLP',
    'Samsung PRISM',
    'software engineer',
  ],
  authors: [{ name: 'Arnav Hooda' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
