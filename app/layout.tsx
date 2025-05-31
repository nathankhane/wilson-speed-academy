import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-headline'
})

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-body'
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: 'Wilson Speed Academy | Elite Speed Training',
    description: 'Transform your athletic performance with elite speed training by Tyriq Wilson. Offering personalized programs for track athletes.',
    keywords: 'speed training, track and field, athletic performance, sprint training, Tyriq Wilson',
    authors: [{ name: 'Tyriq Wilson' }],
    creator: 'Wilson Speed Academy',
    publisher: 'Wilson Speed Academy',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Wilson Speed Academy | Elite Speed Training',
        description: 'Transform your athletic performance with elite speed training',
        url: '/',
        siteName: 'Wilson Speed Academy',
        images: [
            {
                url: '/logo-horizontal.svg',
                width: 1200,
                height: 630,
                alt: 'Wilson Speed Academy Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wilson Speed Academy | Elite Speed Training',
        description: 'Transform your athletic performance with elite speed training',
        images: ['/logo-horizontal.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.variable} ${openSans.variable} font-body antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <MobileStickyCTA />
                </ThemeProvider>
            </body>
        </html>
    )
} 