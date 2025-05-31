"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Ready to start your speed training journey? Let&apos;s connect and discuss how Wilson Speed Academy can help you reach your athletic goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="sport" className="block text-sm font-medium mb-2">
                                            Sport/Activity
                                        </label>
                                        <select
                                            id="sport"
                                            name="sport"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                        >
                                            <option value="">Select your sport</option>
                                            <option value="track">Track & Field</option>
                                            <option value="football">Football</option>
                                            <option value="basketball">Basketball</option>
                                            <option value="soccer">Soccer</option>
                                            <option value="volleyball">Volleyball</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                            placeholder="Tell us about your goals and how we can help..."
                                            required
                                        ></textarea>
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-wsa-blue mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Training Location</h3>
                                            <p className="text-muted-foreground">
                                                Tad Gormley Stadium<br />
                                                City Park, New Orleans, LA 70124
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="h-6 w-6 text-wsa-blue mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-muted-foreground">(504) 555-SPEED</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-wsa-blue mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-muted-foreground">info@wilsonspeedacademy.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Clock className="h-6 w-6 text-wsa-blue mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Training Hours</h3>
                                            <div className="text-muted-foreground space-y-1">
                                                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                                                <p>Saturday: 8:00 AM - 6:00 PM</p>
                                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Map Placeholder */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Find Us</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                            <p className="text-muted-foreground">
                                                Interactive map would be embedded here
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-2">
                                                Google Maps integration for Tad Gormley Stadium
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 