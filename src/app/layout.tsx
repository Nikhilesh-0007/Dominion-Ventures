import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import fs from 'fs';
import path from 'path';

// Copy user infographics if present in brain artifacts directory
try {
  const src1 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919243268.jpg';
  const src2 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919259401.jpg';
  const dest1 = path.join(process.cwd(), 'public', 'fmcg_product_framework.jpg');
  const dest2 = path.join(process.cwd(), 'public', 'running_a_brand_framework.jpg');
  if (fs.existsSync(src1)) fs.copyFileSync(src1, dest1);
  if (fs.existsSync(src2)) fs.copyFileSync(src2, dest2);
} catch (err) {
  // safe fallback
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Dominion Ventures | Premium Healthy Snacks & Functional Foods',
  description: 'Traditional nutrition reimagined into premium healthy snacks for today\'s lifestyle. Explore our signature roasted Makhana, next-gen functional beverages, and wellness foods.',
  keywords: 'Dominion Ventures, Makhana, Healthy Snacking, Organic Foods, Superfoods, Gourmet Snacks, Functional Food, India Export Quality',
  authors: [{ name: 'Dominion Ventures Team' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
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
