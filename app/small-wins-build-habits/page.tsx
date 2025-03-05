import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SmallWinsBuildHabitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-muted-foreground hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-6">
            Small Wins Build Habits
          </h1>
          
          <div className="flex justify-between items-center mb-8">
            <p className="text-lg text-muted-foreground">Learn how small actions lead to big changes</p>
            <a href="https://app.habittracker3000.com/register" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white">
                Start Tracking Today
              </Button>
            </a>
          </div>
          
          <div className="space-y-6">
            
            <p className="text-muted-foreground italic border-l-4 pl-4 py-1">
              &quot;A journey of 1,000 miles starts with a single step.&quot; — Ancient Chinese Proverb
            </p>
            
            <p className="leading-7">
              Building good habits can feel overwhelming, especially when the goal seems massive. Whether it&apos;s drinking more water, eating healthier, or maintaining good posture, it&apos;s easy to get discouraged when progress feels slow. However, research shows that small wins—tiny actions that move you forward—are the key to long-term success.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mt-8">
              How Small Wins Build Lasting Habits
            </h3>
            
            <p className="leading-7">
              Here are three powerful examples of how breaking a major habit down into a small win can lead to long-term success:
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border p-6 bg-card">
                <h4 className="text-lg font-semibold mb-2">
                  1. Drinking 96 Ounces of Water a Day → Filling Your Water Bottle in the Morning
                </h4>
                <p className="leading-7 text-muted-foreground">
                  Many people struggle with drinking enough water, but the habit doesn&apos;t start with forcing yourself to gulp down 96 ounces all at once. Instead, a small win could be simply filling your water bottle each morning. This small action sets the tone for the rest of the day. Once the bottle is full and within reach, you&apos;re much more likely to drink from it.
                </p>
              </div>
              
              <div className="rounded-lg border p-6 bg-card">
                <h4 className="text-lg font-semibold mb-2">
                  2. Eating Healthy and Grocery Shopping → Checking the Fridge in the Morning
                </h4>
                <p className="leading-7 text-muted-foreground">
                  Transitioning to a healthier diet isn&apos;t just about making good food choices—it starts with awareness. Instead of overwhelming yourself with meal planning and grocery shopping, start by simply checking your fridge each morning. This habit makes you more conscious of what you have and what you need, making it easier to plan meals and shop wisely.
                </p>
              </div>
              
              <div className="rounded-lg border p-6 bg-card">
                <h4 className="text-lg font-semibold mb-2">
                  3. Maintaining Good Posture → Doing Neck Situps in the Morning
                </h4>
                <p className="leading-7 text-muted-foreground">
                  Good posture isn&apos;t just about standing tall—it&apos;s about strengthening your muscles to support better alignment. A great way to start is by doing neck sit ups in the morning. This small exercise strengthens your neck and back, creating a foundation for improved posture throughout the day.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center my-8">
              <a href="https://app.habittracker3000.com/register" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Start Your Habit Journey
                </Button>
              </a>
            </div>

            <h3 className="text-xl font-semibold tracking-tight mt-8">
              How &quot;Habit Tracker 3000&quot; Helps Reinforce Small Wins
            </h3>
            
            <div className="md:float-right md:ml-6 md:mb-4 md:w-1/3 my-6 md:my-2">
              <img 
                src="/habits0.png" 
                alt="Habit Tracker 3000 interface showing completed habits" 
                className="rounded-lg shadow-md w-full h-auto" 
              />
            </div>
            
            <p className="leading-7">
              Apps like <span className="italic">Habit Tracker 3000</span> make small wins even more effective by providing an easy way to track progress. As shown in the image, the app allows users to check off completed habits, giving an instant sense of achievement. This simple action triggers the brain&apos;s dopamine response, reinforcing the habit loop and making it more likely that you&apos;ll stick with the behavior.
            </p>
            
            <p className="leading-7">
              By focusing on checking off small, achievable tasks each day, you gradually build momentum. Over time, these micro-habits compound into significant lifestyle changes.
            </p>

            <h3 className="text-xl font-semibold tracking-tight mt-8">
              Conclusion: Take the First Step Today
            </h3>
            
            <p className="leading-7">
              Big transformations don&apos;t happen overnight. They start with small, consistent actions. Whether it&apos;s filling a water bottle, checking the fridge, or doing a quick exercise, every little step moves you closer to your goal. With the help of <span className="italic">Habit Tracker 3000</span>, you can turn these small wins into lifelong habits.
            </p>
            
            <p className="leading-7 font-medium mt-6">
              So, what&apos;s your first small step today?
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-6">
              <a href="https://app.habittracker3000.com/register" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto">
                  Create Your Free Account
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto mt-3 sm:mt-0">
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold mb-3">Ready to transform your habits?</h4>
              <p className="mb-4">Join others who are building better habits one small win at a time.</p>
              <a href="https://app.habittracker3000.com/register" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="bg-black hover:bg-gray-800 text-white w-full">
                  Sign Up Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 