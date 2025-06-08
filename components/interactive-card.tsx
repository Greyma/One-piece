"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useAudioContext } from "@/components/audio-manager"
import { forwardRef } from "react"

interface InteractiveCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode
  backgroundImage?: string
}

export const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ children, onMouseEnter, backgroundImage, className, ...props }, ref) => {
    const { playHoverSound } = useAudioContext()

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      playHoverSound()
      onMouseEnter?.(e)
    }

    return (
      <Card
        ref={ref}
        {...props}
        onMouseEnter={handleMouseEnter}
        className={`transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden ${
          backgroundImage ? "bg-cover bg-center" : ""
        } ${className || ""}`}
        style={{
          ...props.style,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
      >
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    )
  },
)

InteractiveCard.displayName = "InteractiveCard"
