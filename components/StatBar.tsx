"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
    value: number
    label: string
    suffix?: string
    prefix?: string
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            const duration = 2000 // 2 seconds
            const increment = value / (duration / 16) // 60fps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl font-bold text-wsa-blue mb-2">
                {prefix}{count}{suffix}
            </div>
            <div className="text-lg text-muted-foreground">{label}</div>
        </motion.div>
    )
}

const StatBar = () => {
    const stats = [
        { value: 75, label: 'Athletes Trained', suffix: '+' },
        { value: 32, label: 'Avg 40-yd Drop (hundredths)', prefix: '-0.', suffix: 's' },
        { value: 12, label: 'Scholarships Won', suffix: '+' },
        { value: 95, label: 'Client Satisfaction', suffix: '%' }
    ]

    return (
        <section className="py-16 bg-wsa-blue/5">
            <div className="container mx-auto max-w-screen-xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Results That Speak</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See the measurable impact of our training programs on athlete performance
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatBar 