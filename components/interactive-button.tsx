"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useAudioContext } from "@/components/audio-manager"
import { forwardRef } from "react"

interface InteractiveButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ children, onClick, onMouseEnter, ...props }, ref) => {
    const { playHoverSound, playClickSound } = useAudioContext()

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      playHoverSound()
      onMouseEnter?.(e)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClickSound()
      onClick?.(e)
    }

    return (
      <Button
        ref={ref}
        {...props}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className={`transition-all duration-200 hover:scale-105 ${props.className || ""}`}
      >
        {children}
      </Button>
    )
  },
)

InteractiveButton.displayName = "InteractiveButton"
