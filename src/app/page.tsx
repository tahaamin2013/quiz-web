"use client"

import { useState, useEffect } from "react"
import GenderSelector from "@/components/gender-selector"
import UnitSelector from "@/components/unit-selector"
import QuizInterface from "@/components/quiz-interface"
import ResultsScreen from "@/components/results-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"gender" | "units" | "quiz" | "results">("gender")
  const [gender, setGender] = useState<"male" | "female" | null>(null)
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null)
  const [quizResults, setQuizResults] = useState<any>(null)

  // Load state from localStorage on mount
  useEffect(() => {
    const savedGender = localStorage.getItem("exam_gender") as "male" | "female" | null
    const savedScreen = localStorage.getItem("exam_screen") as any
    const savedResults = localStorage.getItem("exam_results")

    if (savedGender) {
      setGender(savedGender)
      document.documentElement.setAttribute("data-theme", savedGender)
    }

    if (savedResults) {
      setQuizResults(JSON.parse(savedResults))
      setCurrentScreen("results")
    } else if (savedScreen === "units" || savedScreen === "quiz") {
      setCurrentScreen(savedScreen)
    }
  }, [])

  // Save state to localStorage
  useEffect(() => {
    if (gender) {
      localStorage.setItem("exam_gender", gender)
      document.documentElement.setAttribute("data-theme", gender)
    }
  }, [gender])

  useEffect(() => {
    localStorage.setItem("exam_screen", currentScreen)
  }, [currentScreen])

  const handleGenderSelect = (selectedGender: "male" | "female") => {
    setGender(selectedGender)
    setCurrentScreen("units")
  }

  const handleUnitSelect = (unit: string) => {
    setSelectedUnit(unit)
    setCurrentScreen("quiz")
  }

  const handleQuizComplete = (results: any) => {
    setQuizResults(results)
    localStorage.setItem("exam_results", JSON.stringify(results))
    setCurrentScreen("results")
  }

  const handleRetakeQuiz = () => {
    localStorage.removeItem("exam_results")
    setQuizResults(null)
    setCurrentScreen("units")
  }

  const handleReset = () => {
    localStorage.clear()
    setGender(null)
    setSelectedUnit(null)
    setQuizResults(null)
    setCurrentScreen("gender")
    document.documentElement.removeAttribute("data-theme")
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          gender === "female"
            ? "linear-gradient(135deg, #ffeef8 0%, #fff0f5 50%, #ffe4f0 100%)"
            : "linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 50%, #e5ecff 100%)",
      }}
    >
      {currentScreen === "gender" && <GenderSelector onSelectGender={handleGenderSelect} />}
      {currentScreen === "units" && gender && (
        <UnitSelector gender={gender} onSelectUnit={handleUnitSelect} onReset={handleReset} />
      )}
      {currentScreen === "quiz" && gender && selectedUnit && (
        <QuizInterface
          gender={gender}
          unit={selectedUnit}
          onQuizComplete={handleQuizComplete}
          onBack={() => setCurrentScreen("units")}
        />
      )}
      {currentScreen === "results" && quizResults && gender && (
        <ResultsScreen gender={gender} results={quizResults} onRetakeQuiz={handleRetakeQuiz} onReset={handleReset} />
      )}
    </div>
  )
}
