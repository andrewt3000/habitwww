import Link from "next/link"
import { ArrowRight, CheckCircle, LineChart, Smartphone, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">🤖 Habit Tracker 3000</span>
            <span className="block text-indigo-600 mt-2">The habit tracker of the future</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your daily routines into lasting habits. Track, analyze, and improve your lifestyle with our cutting-edge habit tracking platform.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/register"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/login"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

