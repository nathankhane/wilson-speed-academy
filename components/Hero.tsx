"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center px-2 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-wsa-blue/10 via-wsa-light-blue/10 to-background animate-gradient-move">
            {/* Content */}
            <div className="relative z-10 text-center text-foreground max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-3xl xs:text-4xl md:text-6xl font-headline font-bold mb-6 leading-tight">
                        Unleash Your<br />
                        <span className="text-wsa-blue">Speed</span> Potential
                    </h1>

                    <p className="text-lg xs:text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Elite speed training by Tyriq Wilson, St. Edwards University track athlete.
                        Transform your performance.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center w-full">
                        <Button asChild size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
                            <Link href="/book">Book Free Assessment</Link>
                        </Button>

                        <Button variant="outline" size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
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
                className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center gap-1 group rounded-full bg-white/80 px-4 py-2 shadow-lg border border-wsa-blue/20 hover:bg-wsa-blue/10 transition-all"
                style={{ touchAction: 'manipulation' }}
            >
                <span className="text-xs xs:text-sm tracking-wide opacity-70 group-hover:opacity-100 transition-opacity text-muted-foreground">
                    Learn More
                </span>
                <ChevronDown className="w-6 h-6 animate-bounce-slow text-wsa-blue" />
            </a>

            {/* Stats Overlay */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-20 left-8 hidden lg:block text-foreground"
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
                className="absolute bottom-20 right-8 hidden lg:block text-foreground"
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