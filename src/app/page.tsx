"use client"

import { useState, useEffect } from "react"
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

    >
           
          
          <div className=" absolute left-4 z-10 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
              <a href="/table-of-tenses" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Table of Tenses</a>
              <a href="/translation" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Translation</a>
              <a href="/excersices" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Grammar Excersices</a>
            </div>
          </div>
        <UnitSelector onSelectUnit={handleUnitSelect} onReset={handleReset} />
      {currentScreen === "quiz"  && selectedUnit && (
        <QuizInterface
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
