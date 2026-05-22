import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '3Losers Mobile Detailing | Premium Car Detailing At Your Doorstep',
  description: 'Professional mobile car detailing services. We come to you! Premium hand wash, wax protection, and full detailing. Clean. Protect. Perfect.',
  keywords: ['mobile car detailing', 'car wash', 'auto detailing', 'car wax', 'car cleaning', 'mobile detailing service'],
  authors: [{ name: '3Losers Mobile Detailing' }],
  creator: '3Losers Mobile Detailing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://3losersdetailing.com',
    title: '3Losers Mobile Detailing | Premium Car Detailing At Your Doorstep',
    description: 'Professional mobile car detailing services. We come to you! Premium hand wash, wax protection, and full detailing.',
    siteName: '3Losers Mobile Detailing',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Losers Mobile Detailing',
    description: 'Premium mobile car detailing services at your doorstep.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#050505]">
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              border: '1px solid rgba(183, 255, 0, 0.2)',
              color: '#fff',
            },
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
