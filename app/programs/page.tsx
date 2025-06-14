import ProgramsGrid from '@/components/ProgramsGrid';
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sun, Users, CalendarCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Training Programs | Wilson Speed Academy',
    description: 'Discover elite speed training programs at Wilson Speed Academy. Personal training, remote coaching, and combine prep programs available.',
    keywords: 'speed training programs, personal training, remote coaching, combine prep, athletic training',
    openGraph: {
        title: 'Training Programs | Wilson Speed Academy',
        description: 'Discover elite speed training programs designed to unlock your athletic potential.',
        type: 'website',
    },
}

export default function ProgramsPage() {
    const programs = [
        {
            id: 1,
            title: "Pay Per Session",
            icon: <CalendarCheck className="h-8 w-8" />,
            price: "$30",
            priceSubtext: "1 athlete",
            price2: "$20",
            price2Subtext: "2 athletes (per athlete)",
            description: "Flexible, pay-as-you-go training. Perfect for drop-ins or those wanting to try a session.",
            features: [
                "Flexible scheduling",
                "No commitment required",
                "Ideal for drop-ins or busy schedules"
            ],
            popular: false
        },
        {
            id: 2,
            title: "Summer Training Program",
            icon: <Sun className="h-8 w-8" />,
            price: "$200",
            priceSubtext: "1 athlete (10 sessions)",
            price2: "$325",
            price2Subtext: "2 athletes (10 sessions)",
            description: "Best value! 10-session summer program. Includes free consultation. Group motivation and accountability.",
            features: [
                "10 training sessions",
                "Free consultation included",
                "Best value for progress",
                "Group motivation (2 athletes option)"
            ],
            popular: true
        },
        {
            id: 3,
            title: "Weekly Training",
            icon: <Users className="h-8 w-8" />,
            price: "$75",
            priceSubtext: "1 athlete (3 sessions)",
            price2: "$125",
            price2Subtext: "2 athletes (3 sessions)",
            description: "Consistent weekly progress. Includes free consultation. Solo or small group.",
            features: [
                "3 training sessions per week",
                "Free consultation included",
                "Solo or 2-athlete option"
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <Image
                            src="/images/WSA logo4.png"
                            alt="Wilson Speed Academy"
                            width={60}
                            height={60}
                            className="mx-auto mb-8 h-15 w-15"
                        />
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Training Programs
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose the training option that fits your goals and schedule. All programs are optimized for both solo athletes and small groups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-16 pb-32">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <ProgramsGrid programs={programs} />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Book a free consultation to discuss which program is right for you and your goals.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/book">Book Free Consultation</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
} 