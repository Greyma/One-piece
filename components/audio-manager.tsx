"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Volume2, VolumeX, Music, Pause, Play } from "lucide-react"
import { useAudio } from "@/hooks/use-audio"

interface AudioContextType {
  isMuted: boolean
  volume: number
  setMuted: (muted: boolean) => void
  setVolume: (volume: number) => void
  playHoverSound: () => void
  playClickSound: () => void
  playTransitionSound: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function useAudioContext() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudioContext must be used within AudioProvider")
  }
  return context
}

// Créons des sons synthétiques simples
const createHoverSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1)

  gainNode.gain.setValueAtTime(0, audioContext.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.1)
}

const createClickSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.15)

  gainNode.gain.setValueAtTime(0, audioContext.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.15)
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolumeState] = useState(0.5)
  const [showControls, setShowControls] = useState(false)

  // Musique de fond (URL placeholder pour une musique d'ambiance pirate)
  const backgroundMusic = useAudio("/audio/Background.mp3", {
    loop: true,
    volume: volume * 0.3,
  })

  useEffect(() => {
    // Auto-play de la musique de fond après interaction utilisateur
    const handleFirstInteraction = () => {
      if (!backgroundMusic.isPlaying) {
        backgroundMusic.play()
      }
      document.removeEventListener("click", handleFirstInteraction)
    }

    document.addEventListener("click", handleFirstInteraction)
    return () => document.removeEventListener("click", handleFirstInteraction)
  }, [backgroundMusic])

  const playHoverSound = () => {
    if (!isMuted && typeof window !== "undefined") {
      try {
        createHoverSound()
      } catch (error) {
        console.log("Audio context not available")
      }
    }
  }

  const playClickSound = () => {
    if (!isMuted && typeof window !== "undefined") {
      try {
        createClickSound()
      } catch (error) {
        console.log("Audio context not available")
      }
    }
  }

  const playTransitionSound = () => {
    if (!isMuted && typeof window !== "undefined") {
      try {
        createHoverSound()
      } catch (error) {
        console.log("Audio context not available")
      }
    }
  }

  const setMuted = (muted: boolean) => {
    setIsMuted(muted)
    if (muted) {
      backgroundMusic.pause()
    } else {
      backgroundMusic.play()
    }
  }

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume)
    backgroundMusic.setVolume(newVolume * 0.3)
  }

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        volume,
        setMuted,
        setVolume,
        playHoverSound,
        playClickSound,
        playTransitionSound,
      }}
    >
      {children}

      {/* Contrôles audio flottants */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col items-end space-y-2">
          {showControls && (
            <Card className="parchment-bg border-amber-600 p-4 w-64">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <span className="ancient-text text-amber-900 font-semibold">Musique de fond</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => (backgroundMusic.isPlaying ? backgroundMusic.pause() : backgroundMusic.play())}
                    className="text-amber-700 hover:text-amber-900"
                  >
                    {backgroundMusic.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="space-y-2">
                  <span className="ancient-text text-amber-900 text-sm">Volume</span>
                  <Slider
                    value={[volume]}
                    onValueChange={(value) => setVolume(value[0])}
                    max={1}
                    step={0.1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMuted(!isMuted)}
              className="bg-amber-100 border-amber-600 text-amber-700 hover:bg-amber-200 shadow-lg"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowControls(!showControls)}
              className="bg-amber-100 border-amber-600 text-amber-700 hover:bg-amber-200 shadow-lg"
            >
              <Music className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </AudioContext.Provider>
  )
}
