import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function ResourcesPage() {
    // In a real implementation, these would come from MDX files
    const posts = [
        {
            slug: 'launch-day',
            title: 'Welcome to Wilson Speed Academy!',
            description: 'Introducing elite speed training programs designed to unlock your athletic potential.',
            date: '2024-01-15',
            readTime: '3 min read',
            author: 'Tyriq Wilson',
            tags: ['announcement', 'training']
        },
        {
            slug: 'how-to-sprint',
            title: 'The Science of Sprinting: Proper Technique Breakdown',
            description: 'Learn the biomechanics behind explosive sprint starts and efficient running form.',
            date: '2024-01-22',
            readTime: '7 min read',
            author: 'Tyriq Wilson',
            tags: ['technique', 'sprinting']
        },
        {
            slug: 'nutrition-basics',
            title: 'Fueling Speed: Nutrition for Track Athletes',
            description: 'Essential nutrition strategies to support your speed training and recovery.',
            date: '2024-01-29',
            readTime: '5 min read',
            author: 'Tyriq Wilson',
            tags: ['nutrition', 'performance']
        }
    ]

    const categories = [
        { name: 'All Posts', count: 3 },
        { name: 'Training Tips', count: 2 },
        { name: 'Nutrition', count: 1 },
        { name: 'Technique', count: 1 }
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-wsa-blue/10 to-wsa-blue/5">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
                            Training Resources
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Expert insights, training tips, and performance strategies from Tyriq Wilson.
                            Everything you need to maximize your speed potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Categories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <div key={category.name} className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer">
                                                <span className="text-sm">{category.name}</span>
                                                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                                    {category.count}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Newsletter Signup */}
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle>Stay Updated</CardTitle>
                                    <CardDescription>
                                        Get the latest training tips and performance insights delivered to your inbox.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wsa-blue"
                                        />
                                        <Button className="w-full">Subscribe</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="space-y-8">
                                {posts.map((post) => (
                                    <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{post.readTime}</span>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    {post.tags.map((tag) => (
                                                        <span key={tag} className="text-xs bg-wsa-blue/10 text-wsa-blue px-2 py-1 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <CardTitle className="text-2xl hover:text-wsa-blue transition-colors">
                                                <Link href={`/resources/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                {post.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-muted-foreground">By {post.author}</span>
                                                <Button variant="ghost" asChild>
                                                    <Link href={`/resources/${post.slug}`} className="flex items-center space-x-1">
                                                        <span>Read More</span>
                                                        <ArrowRight className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="text-center mt-12">
                                <Button variant="outline">Load More Posts</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 