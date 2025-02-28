import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 mx-auto max-w-6xl">
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              Habit Tracker 3000
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
              Transform your daily routines into lasting habits. Track, analyze, and improve your lifestyle.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="https://app.habittracker3000.com/register">
                <Button size="lg">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="https://app.habittracker3000.com/">
                <Button variant="outline" size="lg">
                  Login
                </Button>
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/small-wins-build-habits" className="text-sm text-muted-foreground hover:underline">
                Read our article: Small Wins Build Habits
              </Link>
            </div>
          </div>
        </div>

        <section className="py-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Key Features</h2>
          
          {/* First feature - Image on left, text on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg overflow-hidden mx-auto max-w-md self-start">
              <Image 
                src="/habits0.png" 
                alt="Tracking small wins with Habit Tracker" 
                width={400} 
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4 self-start">
              <h3 className="text-2xl font-semibold">Acheive Small Wins</h3>
              <p className="text-muted-foreground">
                Easily track and celebrate the small habits that add up to big change. Whether it&apos;s making your bed, doing a single stretch, or simply filling your water bottle in the morning—our intuitive interface helps you reinforce progress without the pressure of overwhelming goals. Build momentum, stay consistent, and feel accomplished every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/small-wins-build-habits" className="text-sm text-muted-foreground hover:underline">
                  Read more in our article: Small Wins Build Habits
                </Link>
                <Link href="https://app.habittracker3000.com/register">
                  <Button size="sm">
                    Start Tracking Your Wins
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Second feature - Text on left, image on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4 order-2 md:order-1 self-start">
              <h3 className="text-2xl font-semibold">Daily Habit Journal for Awareness</h3>
              <p className="text-muted-foreground">
                Keep track of your daily habits with a built-in journaling feature that helps you stay mindful of your routines. Reflect on your habits at the end of each day, recognize patterns, and gain insights into what&apos;s working. By reviewing your daily habits in one place, you can stay intentional and make meaningful progress over time.
              </p>
              <div className="mt-6">
                <Link href="https://app.habittracker3000.com/register">
                  <Button size="sm">
                    Start Your Habit Journal
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden mx-auto max-w-md order-1 md:order-2 self-start">
              <Image 
                src="/journal1.png" 
                alt="Daily habit journal interface" 
                width={400} 
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Third feature - Text only */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Judgment-Free Habit Tracking</h3>
              <p className="text-muted-foreground">
                Habit Tracker is designed to support you, not stress you. There are no streaks, no guilt just a simple, flexible system that helps you build habits at your own pace. Forget the pressure of perfection. Acheive small wins, stay consistent, and keep moving forward in a way that feels right for you.
              </p>
              <div className="mt-6">
                <Link href="https://app.habittracker3000.com/register">
                  <Button size="sm">
                    Try Judgment-Free Tracking
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

