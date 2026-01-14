"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { quizData } from "@/lib/quiz-data"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Clock, CheckCircle2 } from "lucide-react"
import ResultsScreen from "@/components/results-screen"

interface QuizInterfaceProps {
  unit: string
  gender?: "male" | "female"
  onQuizComplete: (results: any) => void
  onBack: () => void
}

export default function QuizInterface({ unit, gender = "male", onQuizComplete, onBack }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [quizResults, setQuizResults] = useState<any>(null)
  const [isQuizComplete, setIsQuizComplete] = useState(false)

  const unitData = quizData[unit as keyof typeof quizData]
  const questions = unitData ? unitData.questions : []
  const primaryColor = "#1e40af" // Default blue color
  const accentColor = "#dbeafe" // Light blue accent
  const lightBg = "bg-blue-50 dark:bg-blue-950/30" // Light blue background

  const handleAnswerSelect = (optionIndex: string) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: optionIndex }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    // Calculate results
    const results = {
      unit,
      totalQuestions: questions.length,
      correctAnswers: questions.filter((q, idx) => {
        const userAnswer = answers[idx]
        return userAnswer === q.correct
      }).length,
      answers,
      detailedResults: questions.map((q, idx) => ({
        question: q.question,
        options: q.options,
        correct: q.correct,
        userAnswer: answers[idx],
        isCorrect: answers[idx] === q.correct,
        // explanation: q.explanation,
      })),
      timestamp: new Date().toISOString(),
    }

    const scorePercent = Math.round((results.correctAnswers / results.totalQuestions) * 100)
    localStorage.setItem(
      `examScores`,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("examScores") || "{}"),
        [unit]: scorePercent,
      }),
    )

    setQuizResults(results)
    setIsQuizComplete(true)
  }

  const handleRetakeQuiz = () => {
    setIsQuizComplete(false)
    setQuizResults(null)
    setCurrentQuestionIndex(0)
    setAnswers({})
    localStorage.removeItem(`quiz_${unit}_answers`)
  }

  const handleReset = () => {
    handleRetakeQuiz()
    onQuizComplete(quizResults)
  }

  if (isQuizComplete && quizResults) {
    return <ResultsScreen gender={gender} results={quizResults} onRetakeQuiz={handleRetakeQuiz} onReset={handleReset} />
  }

  const isAnswered = currentQuestionIndex in answers
  const answeredCount = Object.keys(answers).length
  const progressPercent = (answeredCount / questions.length) * 100
  const isopen = true

  const handleClose = () => {
    // Optional: Add any cleanup logic here when dialog closes
  }

  return (
    <div className="fixed inset-0 z-20 bg-black/50 flex items-center justify-center">
      <div className="w-screen h-screen bg-background overflow-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground z-50 p-2"
        >
          ✕
        </button>
        <div className="min-h-screen px-4 py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{unitData ? unitData.name : "Unit not found"}</h1>
                  <p className="text-base text-foreground/60">{unitData?.description}</p>
                </div>
                <Button onClick={onBack} variant="outline" className="gap-2 bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
              </div>

              {/* Progress Section */}
              <div className={`p-6 rounded-2xl ${lightBg} border border-border/50`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                    <span className="font-semibold">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <span className="text-sm text-foreground/60">
                    {answeredCount}/{questions.length} answered
                  </span>
                </div>
                <Progress value={progressPercent} className="h-3" />
              </div>
            </div>

            {unitData && (
              <Card className="mb-10 border-2 shadow-lg" style={{ borderColor: `${primaryColor}30` }}>
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-10 text-pretty leading-relaxed">
                    {questions[currentQuestionIndex].question}
                  </h2>

                  {/* Options */}
                  <div className="grid  gap-2 md:gap-9 grid-cols-2 md:grid-cols-3">
                    {questions[currentQuestionIndex].options.map((option, idx) => {
                      const optionKey = String(idx)
                      const isSelected = answers[currentQuestionIndex] === optionKey
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(optionKey)}
                          className="w-full text-left p-5 md:p-6 rounded-xl border-2 transition-all duration-200 group hover:shadow-md"
                          style={{
                            borderColor: isSelected ? primaryColor : `${primaryColor}20`,
                            backgroundColor: isSelected ? accentColor : "transparent",
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all"
                              style={{
                                borderColor: isSelected ? primaryColor : `${primaryColor}40`,
                                backgroundColor: isSelected ? primaryColor : "transparent",
                              }}
                            >
                              {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                            </div>
                            <span className="text-lg md:text-xl font-medium group-hover:text-foreground/90 transition-colors">
                              {option}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between mb-12">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="gap-2 px-6 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={answeredCount === 0}
                  className="gap-2 px-8 font-semibold text-lg"
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Submit Exam
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="gap-2 px-8 font-semibold text-lg"
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className={`p-8 rounded-2xl ${lightBg} border border-border/50`}>
              <h3 className="font-bold text-lg mb-6">Questions Overview</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className="w-full aspect-square rounded-lg font-bold text-sm transition-all hover:shadow-md"
                    style={{
                      backgroundColor: idx in answers ? primaryColor : "#f3f4f6",
                      color: idx in answers ? "white" : "#6b7280",
                      borderWidth: "2px",
                      borderColor: idx === currentQuestionIndex ? primaryColor : "transparent",
                    }}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
