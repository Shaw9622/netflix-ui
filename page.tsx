import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Home, Search, User, Heart, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StreamingUI() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-zinc-900 flex flex-col items-center py-4 gap-8">
        <div className="w-8 h-8 bg-red-600 rounded-full" />
        <nav className="flex flex-col gap-6">
          <Link href="#" className="text-zinc-400 hover:text-white">
            <Home className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            <Search className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            <Heart className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            <User className="w-6 h-6" />
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pl-16">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-LsjfCNm2yNr9R7EVNOeYkaq6qDDNlU.png"
            alt="Hero Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-20 left-8">
            <h1 className="text-6xl font-bold mb-4">Squid Game</h1>
            <p className="text-lg text-zinc-300 max-w-xl mb-6">
              People will play for the money. A deadly game where players risk their lives for a chance to win big.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-700 transition">
              <PlayCircle className="w-5 h-5" />
              Play Now
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-8 px-8 py-12 bg-zinc-900/50">
          <div>
            <div className="text-4xl font-bold">1.65B+</div>
            <div className="text-sm text-zinc-400">Hours Streamed in 28 Days</div>
          </div>
          <div>
            <div className="text-4xl font-bold">94</div>
            <div className="text-sm text-zinc-400">Country's Top Ranked</div>
          </div>
          <div>
            <div className="text-4xl font-bold">$900M+</div>
            <div className="text-sm text-zinc-400">Value for Netflix</div>
          </div>
          <div>
            <div className="text-4xl font-bold">142M</div>
            <div className="text-sm text-zinc-400">Households Watched</div>
          </div>
        </div>

        {/* Watch Now Section */}
        <section className="px-8 py-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
          <ScrollArea>
            <div className="flex gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="w-[300px] bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=169&width=300"
                    alt="Movie Thumbnail"
                    width={300}
                    height={169}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Movie Title</h3>
                    <p className="text-sm text-zinc-400">Action, Drama</p>
                  </div>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Comments Section */}
        <section className="px-8 py-12 bg-zinc-900/50">
          <h2 className="text-2xl font-semibold mb-8 text-center">What Others Are Saying</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 bg-zinc-800/50 p-6 rounded-lg">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold mb-1">Username</div>
                  <p className="text-zinc-300">
                    This show is absolutely amazing! The plot twists keep you on the edge of your seat.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

