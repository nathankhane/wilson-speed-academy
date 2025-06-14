import AboutAnimatedSections from '@/components/AboutAnimatedSections'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Tyriq Wilson | Wilson Speed Academy',
    description: 'Meet Tyriq Wilson, founder of Wilson Speed Academy and St. Edwards University track athlete. Learn about his journey and coaching philosophy.',
    keywords: 'Tyriq Wilson, speed coach, track athlete, St Edwards University, athletic training',
    openGraph: {
        title: 'About Tyriq Wilson | Wilson Speed Academy',
        description: 'Meet Tyriq Wilson, founder of Wilson Speed Academy and St. Edwards University track athlete.',
        type: 'profile',
    },
}

export default function AboutPage() {
    return <AboutAnimatedSections />
} 