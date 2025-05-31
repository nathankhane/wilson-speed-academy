import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, TrendingUp, Timer, Award } from 'lucide-react'
import Link from 'next/link'

export default function ResultsPage() {
    const results = [
        {
            id: 1,
            name: "Michael Rodriguez",
            sport: "Football",
            image: "/results/michael.jpg",
            improvement: "-0.4s 40-yard dash",
            timeframe: "8 weeks",
            quote: "Tyriq&apos;s training completely transformed my 40-yard dash time. I went from 4.8 to 4.5 seconds in just 8 weeks!"
        },
        {
            id: 2,
            name: "Jasmine Williams",
            sport: "Track & Field",
            image: "/results/jasmine.jpg",
            improvement: "-0.15s",
            metric: "100m sprint",
            before: "11.85s",
            after: "11.70s",
            timeframe: "12 weeks",
            quote: "The personalized approach helped me break my plateau."
        },
        {
            id: 3,
            name: "David Thompson",
            sport: "Basketball",
            image: "/results/david.jpg",
            improvement: "+2\"",
            metric: "Vertical jump",
            before: "28\"",
            after: "30\"",
            timeframe: "10 weeks",
            quote: "My first step explosion improved dramatically."
        },
        {
            id: 4,
            name: "Sofia Rodriguez",
            sport: "Soccer",
            image: "/results/sofia.jpg",
            improvement: "-0.25s",
            metric: "Sprint speed",
            before: "3.2s",
            after: "2.95s",
            timeframe: "6 weeks",
            quote: "Game-changing speed training that translated to the field."
        },
        {
            id: 5,
            name: "Cameron Lewis",
            sport: "Track & Field",
            image: "/results/cameron.jpg",
            improvement: "-0.20s",
            metric: "200m sprint",
            before: "22.15s",
            after: "21.95s",
            timeframe: "14 weeks",
            quote: "Consistently improved every week with Tariq's methods."
        },
        {
            id: 6,
            name: "Ashley Chen",
            sport: "Volleyball",
            image: "/results/ashley.jpg",
            improvement: "+15% first step",
            timeframe: "6 weeks",
            quote: "Consistently improved every week with Tyriq's methods."
        }
    ]

    const filterOptions = [
        { label: "All Sports", value: "all" },
        { label: "Football", value: "football" },
        { label: "Track & Field", value: "track" },
        { label: "Basketball", value: "basketball" },
        { label: "Soccer", value: "soccer" },
        { label: "Volleyball", value: "volleyball" }
    ]

    const stats = [
        { icon: <Trophy className="h-8 w-8" />, value: "75+", label: "Athletes Trained" },
        { icon: <TrendingUp className="h-8 w-8" />, value: "0.28s", label: "Avg Speed Improvement" },
        { icon: <Timer className="h-8 w-8" />, value: "10", label: "Weeks Avg Training" },
        { icon: <Award className="h-8 w-8" />, value: "12+", label: "Scholarships Won" }
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <Image
                            src="/images/WSA logo3.png"
                            alt="Wilson Speed Academy"
                            width={70}
                            height={70}
                            className="mx-auto mb-6 h-18 w-18"
                        />
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Proven Results
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            See how our athletes have transformed their performance with personalized speed training.
                            These results speak to the effectiveness of our proven methods.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-b">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-wsa-blue/10 rounded-full text-wsa-blue mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-wsa-blue mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real athletes, real improvements. Each result represents dedication,
                            hard work, and the power of personalized speed training.
                        </p>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {filterOptions.map((option) => (
                            <Button
                                key={option.value}
                                variant={option.value === "all" ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                            >
                                {option.label}
                            </Button>
                        ))}
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {results.map((result) => (
                            <Card key={result.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-square relative bg-gradient-to-br from-wsa-blue/10 to-wsa-blue/5">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                                            <span className="text-gray-500 text-sm">Photo</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-sm">
                                        <span className="text-sm font-semibold text-wsa-blue">{result.sport}</span>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                                        <div className="text-3xl font-bold text-wsa-blue mb-1">
                                            {result.improvement}
                                        </div>
                                        <div className="text-sm text-muted-foreground mb-4">
                                            {result.metric} improvement in {result.timeframe}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                                        <div>
                                            <div className="text-sm text-muted-foreground">Before</div>
                                            <div className="font-semibold">{result.before}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">After</div>
                                            <div className="font-semibold text-wsa-blue">{result.after}</div>
                                        </div>
                                    </div>

                                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                                        &ldquo;{result.quote}&rdquo;
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join the ranks of athletes who have achieved breakthrough performance improvements.
                        Your success story could be next.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/book">Book Free Assessment</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/programs">View Programs</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 