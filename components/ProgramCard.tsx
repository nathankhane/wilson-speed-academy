"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface ProgramCardProps {
    program: {
        id: number
        title: string
        icon: React.ReactNode
        price: string
        priceSubtext: string
        price2: string
        price2Subtext: string
        description: string
        features: string[]
        popular: boolean
    }
    index: number
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, type: 'spring' } })
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <Card className={`relative shadow-xl border-2 border-transparent hover:border-wsa-blue transition-all duration-300 rounded-2xl bg-white/90 dark:bg-card dark:text-card-foreground ${program.popular ? 'ring-2 ring-wsa-blue' : ''} w-full max-w-md mx-auto my-4`}>
                {program.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-wsa-blue text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                            Most Popular
                        </span>
                    </div>
                )}
                <CardHeader className="text-center pb-2">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                        className="mx-auto mb-4 p-3 bg-wsa-blue/10 dark:bg-wsa-blue/20 rounded-full w-fit"
                    >
                        <div className="text-wsa-blue dark:text-wsa-blue">
                            {program.icon}
                        </div>
                    </motion.div>
                    <CardTitle className="text-2xl mb-2 dark:text-card-foreground">{program.title}</CardTitle>
                    <div className="flex flex-col items-center gap-1 mb-2">
                        <span className="text-3xl font-bold text-wsa-blue dark:text-wsa-blue">{program.price}</span>
                        <span className="text-sm text-muted-foreground dark:text-muted-foreground">{program.priceSubtext}</span>
                        <span className="text-lg font-semibold text-wsa-blue dark:text-wsa-blue mt-2">{program.price2}</span>
                        <span className="text-sm text-muted-foreground dark:text-muted-foreground">{program.price2Subtext}</span>
                    </div>
                    <CardDescription className="text-base mb-2 dark:text-muted-foreground">
                        {program.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {program.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                                <span className="inline-block w-2 h-2 rounded-full bg-wsa-blue"></span>
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full btn-hover-lift text-base py-3 rounded-xl mt-2 bg-wsa-blue text-white dark:bg-wsa-blue dark:text-white">
                        <Link href="/book">Get Started</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
} 