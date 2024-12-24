import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, Calendar, FileText, Globe, Mail, MessageSquare, ThumbsUp, Video } from 'lucide-react'
import { EducationModel } from './components/education-model'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 scroll-smooth">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_the_logo_minimalistic_change_the_colours_to_a_more_aesthetic_one_the_logo_contains_the_letter__y5-removebg-preview-3ZWobvSairBKQS8zrM8KwlJWs6x48Y.png"
              alt="D2T Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Dropper2Topper
            </span>
          </button>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }} 
              className="text-sm hover:text-primary"
            >
              Features
            </button>
            <button
              onClick={() => {
                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm hover:text-primary"
            >
              Benefits
            </button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Future of Education is{" "}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Paperless
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Access educational content anytime, anywhere. Transform the way you learn with our comprehensive digital education platform.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 hover:opacity-90">
                Start Learning
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_the_logo_minimalistic_change_the_colours_to_a_more_aesthetic_one_the_logo_contains_the_letter__y5-removebg-preview-3ZWobvSairBKQS8zrM8KwlJWs6x48Y.png"
              alt="D2T Logo"
              width={600}
              height={600}
              className="relative w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create a seamless digital education environment
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <EducationModel />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Education?</h2>
            <p className="text-white/80">
              Join us in creating a sustainable, accessible, and efficient learning environment.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make_the_logo_minimalistic_change_the_colours_to_a_more_aesthetic_one_the_logo_contains_the_letter__y5-removebg-preview-3ZWobvSairBKQS8zrM8KwlJWs6x48Y.png"
                alt="D2T Logo"
                width={32}
                height={32}
                className="h-6 w-auto"
                priority
              />
              <span className="font-semibold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Dropper2Topper
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Dropper2Topper. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated timetable creation and class scheduling based on professor availability.",
  },
  {
    icon: Video,
    title: "Virtual Classrooms",
    description: "Integrated video conferencing with automatic meeting links and invites.",
  },
  {
    icon: Brain,
    title: "AI-Powered Notes",
    description: "Automatic transcription and summarization of lecture recordings.",
  },
  {
    icon: FileText,
    title: "Digital Notes",
    description: "Create, share, and manage notes with easy organization tools.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Learning",
    description: "Q&A cards generated from lectures for effective revision.",
  },
  {
    icon: Globe,
    title: "Anywhere Access",
    description: "Access your educational content from any device, anywhere in the world.",
  },
]

const benefits = [
  {
    icon: ThumbsUp,
    title: "Enhanced Learning Experience",
    description: "Interactive content and personalized learning paths for better understanding.",
  },
  {
    icon: Mail,
    title: "Smart Notifications",
    description: "Never miss important classes or deadlines with automated reminders.",
  },
  {
    icon: FileText,
    title: "Eco-Friendly",
    description: "Reduce paper waste and contribute to environmental sustainability.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Learn from anywhere, at any time, on any device.",
  },
]

