"use client"
import { Users, Heart } from "lucide-react"
import { useEffect } from "react"

interface GenderSelectorProps {
  onSelectGender: (gender: "male" | "female") => void
}

export default function GenderSelector({ onSelectGender }: GenderSelectorProps) {
  useEffect(() => {
    const savedGender = localStorage.getItem("examGender")
    if (savedGender && (savedGender === "male" || savedGender === "female")) {
      onSelectGender(savedGender)
    }
  }, [onSelectGender])

  const handleGenderSelect = (gender: "male" | "female") => {
    localStorage.setItem("examGender", gender)
    onSelectGender(gender)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">English Proficiency Exam</h1>
          <p className="text-xl md:text-2xl text-foreground/70">Select your theme preference to get started</p>
          <p className="text-base text-foreground/50 mt-4">
            Your selection will be saved locally and personalize your experience
          </p>
        </div>

        {/* Gender Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Male Option */}
          <button onClick={() => handleGenderSelect("male")} className="gender-button group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 p-8 md:p-12 h-full flex flex-col items-center justify-center transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Users className="w-14 h-14 md:w-20 md:h-20 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    Professional Blue
                  </h2>
                  <p className="text-base md:text-lg text-foreground/70">Clean, focus-driven examination mode</p>
                </div>
              </div>
            </div>
          </button>

          {/* Female Option */}
          <button onClick={() => handleGenderSelect("female")} className="gender-button group">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 dark:from-pink-950 dark:via-purple-950 dark:to-pink-900 border-2 border-pink-200 dark:border-pink-800 hover:border-pink-400 p-8 md:p-12 h-full flex flex-col items-center justify-center transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-purple-400/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-pink-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Heart className="w-14 h-14 md:w-20 md:h-20 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                    Vibrant Rainbow
                  </h2>
                  <p className="text-base md:text-lg text-foreground/70">Energetic, colorful examination mode</p>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <p className="text-base md:text-lg text-foreground/60">
            Both modes offer the same professional exam experience with different visual themes
          </p>
        </div>
      </div>
    </div>
  )
}
