import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4">
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
          </div>
        </div>

        <section className="py-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Acheive Small Wins</h3>
              <p className="text-muted-foreground">
              Easily track and celebrate the small habits that add up to big change. Whether it&apos;s making your bed, doing a single stretch, or simply filling your water bottle in the morning—our intuitive interface helps you reinforce progress without the pressure of overwhelming goals. Build momentum, stay consistent, and feel accomplished every day.
              </p>
              <div className="flex justify-center">
                <img src="/habit.png" alt="Small Win" className="w-3/4" />
              </div>
              
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Daily Habit Journal for Awareness</h3>
              <p className="text-muted-foreground">
              Keep track of your daily habits with a built-in journaling feature that helps you stay mindful of your routines. Reflect on your habits at the end of each day, recognize patterns, and gain insights into what&apos;s working. By reviewing your daily habits in one place, you can stay intentional and make meaningful progress over time.
              </p>
              <div className="flex justify-center">
                <img src="/journal.png" alt="Small Win" className="w-3/4" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Judgment-Free Habit Tracking</h3>
              <p className="text-muted-foreground">
              Habit Tracker is designed to support you, not stress you. There are no streaks, no guilt just a simple, flexible system that helps you build habits at your own pace. Forget the pressure of perfection. Acheive small wins, stay consistent, and keep moving forward in a way that feels right for you.
              </p>
              <div className="flex justify-center">
                <img src="/workout.avif" alt="Small Win" className="w-3/4" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

