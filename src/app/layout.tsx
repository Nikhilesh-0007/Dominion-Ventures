import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: 'Dominion Ventures | Premium Healthy Snacks & Functional Foods',
  description: 'Traditional nutrition reimagined into premium healthy snacks for today\'s lifestyle. Explore our signature roasted Makhana, next-gen functional beverages, and wellness foods.',
  keywords: 'Dominion Ventures, Makhana, Healthy Snacking, Organic Foods, Superfoods, Gourmet Snacks, Functional Food, India Export Quality',
  authors: [{ name: 'Dominion Ventures Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between bg-white text-brand-charcoal selection:bg-brand-gold/30">
        <ScrollProgress />
        <Navbar />
        
        {/* Main page content area */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
