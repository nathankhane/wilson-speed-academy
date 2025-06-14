"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, GraduationCap, Target, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
    {
        year: "2023",
        title: "Founded Wilson Speed Academy",
        description: "Launched elite speed training program in New Orleans"
    },
    {
        year: "2024",
        title: "NCAA Division I Competitor",
        description: "Currently competing for St. Edwards University Track & Field team"
    }
]

export default function AboutAnimatedSections() {
    return (
        <>
            {/* Hero Section */}
            <motion.section
                className="pt-16 pb-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-16">
                        <Image
                            src="/images/WSA logo3.png"
                            alt="Wilson Speed Academy"
                            width={48}
                            height={48}
                            className="mx-auto mb-2 h-12 w-12"
                        />
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
            </motion.section>

            {/* Philosophy - moved up */}
            <motion.section
                className="py-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
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
            </motion.section>

            {/* Athletic Journey - now after Philosophy */}
            <motion.section
                className="py-16 bg-muted/50"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
                <div className="container mx-auto max-w-screen-xl px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Athletic Journey</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-6"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-wsa-blue rounded-full flex items-center justify-center text-white font-bold">
                                            {achievement.year}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                        <p className="text-muted-foreground">{achievement.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
} 