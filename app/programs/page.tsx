import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Video, Trophy } from 'lucide-react'

export default function ProgramsPage() {
    const programs = [
        {
            id: 1,
            title: "Elite Personal Training",
            price: "$150/session",
            duration: "90 minutes",
            description: "Personalized 1-on-1 training with Tyriq Wilson at our facility",
            icon: <CheckCircle className="h-8 w-8" />,
            features: [
                "One-on-one coaching with Tyriq Wilson",
                "Personalized training plan",
                "Video analysis and feedback",
                "Nutrition guidance",
                "Performance tracking",
                "Access to professional equipment"
            ],
            calendlyUrl: "https://calendly.com/wilsonspeedacademy",
            popular: true
        },
        {
            id: 2,
            title: "Remote Coaching Plan",
            price: "$75",
            priceSubtext: "per month",
            description: "Custom training plans and virtual coaching from anywhere",
            icon: <Video className="h-8 w-8" />,
            features: [
                "Custom weekly training plans",
                "Video form analysis",
                "Weekly check-ins with coach",
                "Nutrition recommendations",
                "Progress tracking app",
                "Email support"
            ],
            popular: false
        },
        {
            id: 3,
            title: "Combine Prep Intensive",
            price: "$500",
            priceSubtext: "4-week program",
            description: "Specialized training for NFL Combine and pro day preparation",
            icon: <Trophy className="h-8 w-8" />,
            features: [
                "8 intensive training sessions",
                "40-yard dash specialization",
                "Broad jump training",
                "Vertical jump optimization",
                "Agility drill mastery",
                "Mental preparation coaching"
            ],
            popular: false
        }
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <Image
                            src="/images/WSA logo4.png"
                            alt="Wilson Speed Academy"
                            width={60}
                            height={60}
                            className="mx-auto mb-6 h-15 w-15"
                        />
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Training Programs
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Personalized speed training programs designed to unlock your athletic potential.
                            Choose the training option that fits your goals and schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program) => (
                            <Card key={program.id} className={`relative ${program.popular ? 'border-wsa-blue shadow-xl' : ''}`}>
                                {program.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-wsa-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-wsa-blue/10 rounded-full w-fit">
                                        <div className="text-wsa-blue">
                                            {program.icon}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                                    <div className="text-3xl font-bold text-wsa-blue">
                                        {program.price}
                                        <span className="text-sm font-normal text-muted-foreground ml-1">
                                            {program.priceSubtext}
                                        </span>
                                    </div>
                                    <CardDescription className="text-base">
                                        {program.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <ul className="space-y-3">
                                        {program.features.map((feature, index) => (
                                            <li key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button asChild className="w-full" variant={program.popular ? "default" : "outline"}>
                                        <Link href="/book">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
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
    )
} 