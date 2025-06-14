"use client"

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'keen-slider/keen-slider.min.css'

interface Testimonial {
    id: number
    name: string
    sport: string
    quote: string
    image: string
    improvement: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marcus Thompson",
        sport: "Football",
        quote: "Tyriq's training transformed my 40-yard dash time. I dropped from 4.6 to 4.3 seconds in just 8 weeks. The techniques he taught me are game-changing.",
        image: "/testimonials/marcus.jpg",
        improvement: "-0.3s 40-yd"
    },
    {
        id: 2,
        name: "Jasmine Rodriguez",
        sport: "Track & Field",
        quote: "The personalized attention and scientific approach to speed training is unmatched. Tyriq helped me shave crucial milliseconds off my sprint times.",
        image: "/testimonials/jasmine.jpg",
        improvement: "-0.15s 100m"
    },
    {
        id: 3,
        name: "David Thompson",
        sport: "Basketball",
        quote: "My first step and acceleration improved dramatically. The training isn't just about speed - it's about explosion and power that translates to the game.",
        image: "/testimonials/david.jpg",
        improvement: "+2 inch vertical"
    },
    {
        id: 4,
        name: "Sofia Chen",
        sport: "Soccer",
        quote: "Working with Tyriq was the best decision for my athletic career. His methods are proven and his passion for helping athletes succeed is evident.",
        image: "/testimonials/sofia.jpg",
        improvement: "+12% acceleration"
    }
]

const TestimonialsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        loop: true,
        mode: "free",
        slides: {
            perView: 1,
            spacing: 20,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 30,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 40,
                },
            },
        },
    })

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto max-w-screen-xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Athletes Say</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from athletes who have transformed their performance with Wilson Speed Academy
                    </p>
                </div>

                <div className="relative">
                    <div ref={sliderRef} className="keen-slider flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch py-8 px-2">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="keen-slider__slide">
                                <div className="bg-card rounded-lg border p-6 h-full shadow-sm">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <blockquote className="text-muted-foreground mb-6 italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.sport}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-semibold text-wsa-blue">
                                                {testimonial.improvement}
                                            </div>
                                            <div className="text-xs text-muted-foreground">Improvement</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {loaded && instanceRef.current && (
                        <>
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    instanceRef.current?.prev()
                                }}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    instanceRef.current?.next()
                                }}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </>
                    )}

                    <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex items-center gap-2 md:hidden">
                        <span className="text-xs text-muted-foreground">Swipe</span>
                        <ChevronRight className="w-4 h-4 animate-bounce-x text-wsa-blue" />
                    </div>
                </div>

                {loaded && instanceRef.current && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {[...Array(instanceRef.current.track.details.slides.length)].map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === idx ? 'bg-wsa-blue' : 'bg-muted'
                                    }`}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestimonialsSlider 