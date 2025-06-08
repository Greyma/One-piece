"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useAudio(src: string, options: { loop?: boolean; volume?: number } = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = options.loop || false
    audio.volume = options.volume || 0.5

    audio.addEventListener("loadeddata", () => setIsLoaded(true))
    audio.addEventListener("play", () => setIsPlaying(true))
    audio.addEventListener("pause", () => setIsPlaying(false))
    audio.addEventListener("ended", () => setIsPlaying(false))

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.removeEventListener("loadeddata", () => setIsLoaded(true))
      audio.removeEventListener("play", () => setIsPlaying(true))
      audio.removeEventListener("pause", () => setIsPlaying(false))
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [src, options.loop, options.volume])

  const play = useCallback(() => {
    if (audioRef.current && isLoaded) {
      audioRef.current.play().catch(console.error)
    }
  }, [isLoaded])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }, [])

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume))
    }
  }, [])

  return { play, pause, isPlaying, isLoaded, setVolume }
}

export function useHoverSound(soundSrc: string, volume = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(soundSrc)
    audio.volume = volume
    audioRef.current = audio

    return () => {
      audio.pause()
    }
  }, [soundSrc, volume])

  const playHoverSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(console.error)
    }
  }, [])

  return playHoverSound
}
