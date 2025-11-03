'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '../button'
import { Heading } from '../heading'
import StarSvg from '../star-svg'
import { Text } from '../text'

interface HeroSection3Props {
  className?: string
}

// Array of background images - replace with your actual image paths
const backgroundImages = ['/images/jeans/blog3.png', '/images/jeans/blog2.jpg', '/images/jeans/blog1.jpg']

const HeroSection3 = ({ className }: HeroSection3Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Manual navigation function
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Next and previous slide functions
  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
  }

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
  }

  return (
    <div className="relative flex min-h-dvh w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt={`Hero background ${currentImageIndex + 1}`}
              className="object-cover object-center"
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative container flex flex-1 pt-20 pb-36">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-7 self-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StarSvg width={48} height={48} color="white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
              <span data-slot="italic">Where</span> Luxury <br /> finds its <span data-slot="italic">Meaning.</span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text className="max-w-sm">
              Unreservedly honest products that truly work, and be kind to skin and the planet – no exceptions!
            </Text>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous image"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next image"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 z-20 flex -translate-x-1/2 space-x-2 sm:bottom-36">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImageIndex ? 'w-8 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA Button - Moved further down */}
      <motion.div
        className="absolute bottom-8 left-1/2 container max-w-3xl -translate-x-1/2 sm:bottom-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button
          href={'/collections/all'}
          color="white"
          className="mt-10 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
        >
          Explore all products
          <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </motion.div>
    </div>
  )
}

export default HeroSection3
