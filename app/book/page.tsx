"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Video } from 'lucide-react'

export default function BookPage() {
    const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

    const programs = [
        {
            id: 'assessment',
            title: 'Free Assessment',
            duration: '30 minutes',
            type: 'In-Person',
            price: 'Free',
            description: 'Complimentary movement analysis and training plan consultation',
            calendlyUrl: 'https://calendly.com/tariq-wsa/free-assessment'
        },
        {
            id: 'elite-training',
            title: 'Elite Personal Training',
            duration: '90 minutes',
            type: 'In-Person',
            price: '$150',
            description: 'One-on-one personalized speed training with Tyriq Wilson',
            calendlyUrl: 'https://calendly.com/tyriq-wsa/elite-training'
        },
        {
            id: 'remote-consultation',
            title: 'Remote Consultation',
            duration: '45 minutes',
            type: 'Virtual',
            price: '$75',
            description: 'Virtual coaching session and custom training plan creation',
            calendlyUrl: 'https://calendly.com/tariq-wsa/remote-consultation'
        }
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Book Your Session
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose a session type and schedule your training with Tyriq Wilson.
                            All sessions include personalized coaching and performance analysis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program Selection */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Choose Your Session</h2>
                        <p className="text-lg text-muted-foreground">
                            Select the training option that best fits your needs and goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {programs.map((program) => (
                            <Card
                                key={program.id}
                                className={`cursor-pointer transition-all ${selectedProgram === program.id
                                    ? 'border-wsa-blue shadow-lg ring-2 ring-wsa-blue/20'
                                    : 'hover:shadow-md'
                                    }`}
                                onClick={() => setSelectedProgram(program.id)}
                            >
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-wsa-blue/10 rounded-full w-fit">
                                        {program.type === 'Virtual' ? (
                                            <Video className="h-6 w-6 text-wsa-blue" />
                                        ) : (
                                            <MapPin className="h-6 w-6 text-wsa-blue" />
                                        )}
                                    </div>
                                    <CardTitle className="text-xl">{program.title}</CardTitle>
                                    <div className="text-2xl font-bold text-wsa-blue">{program.price}</div>
                                    <CardDescription>{program.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="text-center space-y-2">
                                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        <span>{program.duration}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                                        {program.type === 'Virtual' ? (
                                            <Video className="h-4 w-4" />
                                        ) : (
                                            <MapPin className="h-4 w-4" />
                                        )}
                                        <span>{program.type}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {selectedProgram && (
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">
                                    Schedule Your {programs.find(p => p.id === selectedProgram)?.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    Select a convenient time from the available slots below
                                </p>
                            </div>

                            {/* Calendly Embed */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6 bg-wsa-blue/5 border-b">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold">
                                                {programs.find(p => p.id === selectedProgram)?.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {programs.find(p => p.id === selectedProgram)?.duration} • {programs.find(p => p.id === selectedProgram)?.type}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-wsa-blue">
                                                {programs.find(p => p.id === selectedProgram)?.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Calendly iframe placeholder */}
                                <div className="h-96 flex items-center justify-center bg-gray-50">
                                    <div className="text-center">
                                        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                        <p className="text-muted-foreground mb-4">
                                            Calendly booking widget would appear here
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Integration URL: {programs.find(p => p.id === selectedProgram)?.calendlyUrl}
                                        </p>
                                        <Button asChild className="mt-4">
                                            <a
                                                href={programs.find(p => p.id === selectedProgram)?.calendlyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Open Calendly
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto max-w-screen-xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Questions?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Ready to take your speed to the next level? Book a session with Tyriq Wilson and start your journey to elite performance. Whether you&apos;re looking for a free assessment or intensive training, we have options for every athlete.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline" asChild>
                            <a href="mailto:info@wilsonspeedacademy.com">
                                Email Us
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="tel:5045555733">
                                Call (504) 555-SPEED
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 