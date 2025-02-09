// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
// context
import ActiveSectionProvider from '@/context/ActiveSectionContext';
// lib
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
// styles
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Goran Kitic | Portfolio',
  description: 'Personal portfolio',
  openGraph: {
    title: 'Goran Kitic | Portfolio',
    description: "Explore my personal portfolio featuring a collection of my web development work.",
    images: '/cover.png',
    url: 'https://gorankitic.vercel.app/',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${rubik.className} antialiased h-screen`}>
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
        <Footer />
        <ThemeSwitch />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
