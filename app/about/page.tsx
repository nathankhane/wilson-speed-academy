import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, GraduationCap, Target, Heart } from 'lucide-react'
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
    const achievements = [
        {
            year: "2024",
            title: "NCAA Division I Competitor",
            description: "Currently competing for St. Edwards University Track & Field team"
        },
        {
            year: "2023",
            title: "Founded Wilson Speed Academy",
            description: "Launched elite speed training program in New Orleans"
        },
        {
            year: "2022",
            title: "High School State Champion",
            description: "Won Louisiana state championship in 100m and 200m events"
        },
        {
            year: "2021",
            title: "Regional Record Holder",
            description: "Set new regional record in 100m sprint with 10.45 seconds"
        }
    ]

    const certifications = [
        "USATF Level 1 Certified Coach",
        "NSCA Certified Strength & Conditioning Specialist",
        "USA Track & Field Youth Specialist",
        "CPR/AED Certified"
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-16 pb-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-16">
                        <Image
                            src="/images/WSA logo3.png"
                            alt="Wilson Speed Academy"
                            width={80}
                            height={80}
                            className="mx-auto mb-6 h-20 w-20"
                        />
                        <h1 className="text-4xl font-bold mb-6">Meet Tyriq Wilson</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            St. Edwards University track athlete and founder of Wilson Speed Academy,
                            dedicated to helping athletes reach their speed potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                                Meet Tyriq Wilson
                            </h1>
                            <p className="text-xl text-muted-foreground mb-6">
                                Elite track athlete, certified coach, and founder of Wilson Speed Academy.
                                My mission is to help athletes discover the best version of themselves mentally and physically to achieve maximum success in their sport and in life.
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span>St. Edwards University</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Trophy className="h-4 w-4" />
                                    <span>State Champion</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Professional headshot */}
                            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                                <Image
                                    src="/images/Tyriq_Headshot.jpeg"
                                    alt="Tyriq Wilson - Founder of Wilson Speed Academy"
                                    fill
                                    className="object-cover rounded-lg shadow-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p className="text-lg leading-relaxed mb-6">
                                Growing up in New Orleans, I discovered my passion for speed on the high school track.
                                What started as a way to stay in shape quickly became my calling when I realized I had
                                natural talent that could be developed into something special.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                After setting multiple regional records and winning state championships, I earned a
                                scholarship to St. Edwards University where I continue to compete at the Division I level.
                                But my true passion lies in sharing the knowledge and techniques that have made me successful.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Wilson Speed Academy was born from my desire to give back to the community that supported
                                my journey. My mission is to help athletes discover the best version of themselves mentally
                                and physically to achieve maximum success in their sport and in life. Every athlete has
                                untapped potential, and I&apos;m here to help them discover it through proven training methods,
                                personalized coaching, and the mindset needed to excel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Athletic Journey</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-wsa-blue rounded-full flex items-center justify-center text-white font-bold">
                                            {achievement.year}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                        <p className="text-muted-foreground">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Training Philosophy</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            My approach combines scientific training methods with personalized attention to unlock each athlete&apos;s unique potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <Target className="h-12 w-12 text-wsa-blue mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Precision Training</h3>
                                <p className="text-muted-foreground">
                                    Every movement matters. We focus on perfecting technique before building speed.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <Heart className="h-12 w-12 text-wsa-blue mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Individual Attention</h3>
                                <p className="text-muted-foreground">
                                    Each athlete is unique. Training plans are customized to your specific goals and abilities.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 text-center">
                                <Trophy className="h-12 w-12 text-wsa-blue mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
                                <p className="text-muted-foreground">
                                    We track progress meticulously and adjust training to ensure continuous improvement.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Certifications & Qualifications</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                                <div className="w-2 h-2 bg-wsa-blue rounded-full"></div>
                                <span className="font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
} 