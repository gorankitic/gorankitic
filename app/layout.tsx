// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
// context
import ActiveSectionProvider from '@/context/ActiveSectionContext';
// lib
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
// styles
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Goran Kitic | Portfolio',
  description: 'Personal portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={rubik.className}>
        <ActiveSectionProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' />
        </ActiveSectionProvider>
        <ThemeSwitch />
      </body>
    </html>
  )
}
