"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background with fallback */}
            <div className="absolute inset-0 z-0">
                {/* Static background for now - can be replaced with video later */}
                <div
                    className="w-full h-full bg-gradient-to-br from-wsa-black via-slate-900 to-wsa-blue bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/hero-poster.jpg'), linear-gradient(135deg, #151515 0%, #374151 50%, #5DA5C8 100%)`
                    }}
                />
                {/* Video overlay */}
                <div className="absolute inset-0 video-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 leading-tight">
                        Unleash Your
                        <span className="text-wsa-blue"> Speed Potential</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Elite speed training by Tyriq Wilson, St. Edwards University track athlete.
                        Transform your performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button asChild size="lg" className="text-lg px-8 py-3">
                            <Link href="/book">Book Free Assessment</Link>
                        </Button>

                        <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-wsa-black">
                            <Link href="/programs" className="flex items-center space-x-2">
                                <Play className="h-5 w-5" />
                                <span>View Programs</span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#why"
                className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-1 group"
            >
                <span className="text-sm tracking-wide opacity-70 group-hover:opacity-100 transition-opacity text-white">
                    Learn More
                </span>
                <ChevronDown className="w-5 h-5 animate-bounce-slow text-white" />
            </a>

            {/* Stats Overlay */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-20 left-8 hidden lg:block text-white"
            >
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-wsa-blue">50+</div>
                    <div className="text-sm">Athletes Trained</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-20 right-8 hidden lg:block text-white"
            >
                <div className="space-y-2">
                    <div className="text-3xl font-bold text-wsa-blue">-0.3s</div>
                    <div className="text-sm">Avg 40-yd Improvement</div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero 