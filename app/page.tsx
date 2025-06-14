import Hero from '@/components/Hero'
import StatBar from '@/components/StatBar'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Hero />

            {/* Why Train With Us Section */}
            <section id="why" className="py-16 bg-muted/50">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Train With Wilson Speed Academy?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experience elite-level training with proven results from a St. Edwards University track athlete
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-wsa-blue rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Proven Methods</h3>
                            <p className="text-muted-foreground">
                                Training techniques backed by science and proven in competition at the collegiate level
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-wsa-blue rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Personalized Coaching</h3>
                            <p className="text-muted-foreground">
                                Every athlete gets individualized attention and training plans tailored to their goals
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-wsa-blue rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Measurable Results</h3>
                            <p className="text-muted-foreground">
                                Track your progress with data-driven improvements and performance analytics
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <StatBar />
        </div>
    )
} 