"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Home, Search, PlayCircle, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function StreamingUI() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Close search on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  // Handler for Home button
  const handleHome = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Declare images inside the function
  const images = [
    "/25oct7.jpg",
    "/2066192.jpg",
    "/3800121.jpg",
    "/4992098.jpg",
    "/5171295.jpg",
    "/7990386.jpg",
  ];

  // Filter images based on debounced search query
  const filteredImages = images.filter((_, index) =>
    (`Movie Title ${index + 1}`).toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-black flex flex-col items-center py-4 gap-8 z-50">
        {/* Logo */}
        

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          {/* Home Button */}
          <button
            onClick={handleHome}
            aria-label="Home"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Home className="w-6 h-6" />
          </button>

          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-netflix-black z-40 pl-16">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red"
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                aria-label="Close Search"
                className="ml-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.length > 0 ? (
                filteredImages.map((src, i) => (
                  <Card key={i} className="bg-zinc-800 rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Movie Thumbnail ${i + 1}`}
                      width={300}
                      height={169}
                      className="object-cover w-full"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Movie Title {i + 1}</h3>
                      <p className="text-sm text-gray-400">Action, Drama</p>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-gray-400">No results found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pl-16">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full">
          <Image src="/imdexpage.png" alt="Hero Banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent" />
          <div className="absolute bottom-20 left-8">
            <h1 className="text-6xl font-bold mb-4">Squid Game</h1>
            <p className="text-lg text-gray-300 max-w-xl mb-6">
              People will play for the money. A deadly game where players risk their lives for a chance to win big.
            </p>
            <button className="bg-netflix-red text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-700 transition">
              <PlayCircle className="w-5 h-5" />
              Play Now
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-8 px-8 py-12 bg-black/50">
          <div>
            <div className="text-4xl font-bold">1.65B+</div>
            <div className="text-sm text-gray-400">Hours Streamed in 28 Days</div>
          </div>
          <div>
            <div className="text-4xl font-bold">94</div>
            <div className="text-sm text-gray-400">Country's Top Ranked</div>
          </div>
          <div>
            <div className="text-4xl font-bold">$900M+</div>
            <div className="text-sm text-gray-400">Value for Netflix</div>
          </div>
          <div>
            <div className="text-4xl font-bold">142M</div>
            <div className="text-sm text-gray-400">Households Watched</div>
          </div>
        </div>

        {/* Watch Now Section */}
        <section className="px-8 py-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>

          <ScrollArea>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
              {images.map((src, i) => (
                <Card key={i} className="w-[300px] bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Movie Thumbnail ${i + 1}`}
                    width={300}
                    height={169}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Movie Title {i + 1}</h3>
                    <p className="text-sm text-gray-400">Action, Drama</p>
                  </div>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Comments Section */}
        <section className="px-8 py-12 bg-black/50">
          <h2 className="text-2xl font-semibold mb-8 text-center">What Others Are Saying</h2>
          <div className="comment-slider flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="comment-slide flex-shrink-0 w-[300px] bg-zinc-800/50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">Username {i + 1}</div>
                    <div className="text-sm text-gray-400">2 days ago</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  This show is absolutely amazing! The plot twists keep you on the edge of your seat.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

