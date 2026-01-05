"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, RotateCcw, Home, Award, TrendingUp } from "lucide-react"

interface ResultsScreenProps {
  gender: "male" | "female"
  results: any
  onRetakeQuiz: () => void
  onReset: () => void
}

export default function ResultsScreen({ gender, results, onRetakeQuiz, onReset }: ResultsScreenProps) {
  const primaryColor = gender === "male" ? "#1e40af" : "#be185d"
  const accentColor = gender === "male" ? "#dbeafe" : "#fce7f3"
  const lightBg = gender === "male" ? "bg-blue-50 dark:bg-blue-950/30" : "bg-pink-50 dark:bg-pink-950/30"
  const successColor = "#16a34a"
  const errorColor = "#dc2626"
  const scorePercent = (results.correctAnswers / results.totalQuestions) * 100
  const isPassing = scorePercent >= 70

  return (
    <div className="min-h-screen px-4 py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-12 border-2 shadow-2xl overflow-hidden" style={{ borderColor: `${primaryColor}30` }}>
          <div
            className={`h-2 ${lightBg}`}
            style={{ background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}80)` }}
          />
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl mb-8">Exam Complete!</CardTitle>
            <div
              className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full flex flex-col items-center justify-center mb-8 shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}40)`,
                border: `3px solid ${primaryColor}`,
              }}
            >
              <div className="text-6xl md:text-7xl font-bold" style={{ color: primaryColor }}>
                {Math.round(scorePercent)}%
              </div>
              <div className="text-sm mt-3 font-semibold text-foreground/70">Final Score</div>
            </div>
          </CardHeader>

          <CardContent className="pb-10">
            {/* Score Stats */}
            <div className={`grid grid-cols-3 gap-4 md:gap-6 mb-8 p-8 rounded-2xl ${lightBg} border border-border/50`}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: successColor }}>
                  {results.correctAnswers}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4" />
                  Correct
                </div>
              </div>
              <div className="text-center border-l border-r border-border">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: errorColor }}>
                  {results.totalQuestions - results.correctAnswers}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <XCircle className="w-4 h-4" />
                  Incorrect
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: primaryColor }}>
                  {results.totalQuestions}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <TrendingUp className="w-4 h-4" />
                  Total
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 ${
                isPassing
                  ? "bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-2 border-green-300 dark:border-green-700"
                  : "bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-2 border-red-300 dark:border-red-700"
              }`}
            >
              {isPassing ? (
                <>
                  <Award className="w-6 h-6" />
                  Excellent Performance! You Passed
                </>
              ) : (
                <>
                  <TrendingUp className="w-6 h-6" />
                  Keep Practicing - Review Your Mistakes
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Detailed Analysis</h2>
          <div className="space-y-5">
            {results.detailedResults.map((result: any, idx: number) => (
              <Card
                key={idx}
                className={`border-l-4 hover:shadow-md transition-shadow`}
                style={{
                  borderLeftColor: result.isCorrect ? successColor : errorColor,
                }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {result.isCorrect ? (
                      <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-4">
                        Question {idx + 1}: {result.question}
                      </CardTitle>
                      <div className="space-y-3 text-base">
                        <div
                          className={`p-4 rounded-lg ${result.isCorrect ? "bg-green-50 dark:bg-green-950/20" : "bg-red-50 dark:bg-red-950/20"}`}
                        >
                          <span className="font-bold">Your Answer:</span>
                          <span
                            className={`ml-3 font-semibold ${result.isCorrect ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}
                          >
                            {result.options[result.userAnswer] || "Not answered"}
                          </span>
                        </div>
                        {!result.isCorrect && (
                          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-400">
                            <span className="font-bold">Correct Answer:</span>
                            <span className="ml-3 font-semibold text-blue-700 dark:text-blue-400">
                              {result.options[result.correct]}
                            </span>
                          </div>
                        )}
                        {result.explanation && (
                          <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-400">
                            <span className="font-bold text-amber-900 dark:text-amber-300">Explanation:</span>
                            <p className="text-amber-800 dark:text-amber-200 mt-2 leading-relaxed">
                              {result.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8 border-t border-border">
          <Button
            onClick={onRetakeQuiz}
            className="gap-2 px-8 py-3 font-bold text-lg"
            style={{ backgroundColor: primaryColor }}
          >
            <RotateCcw className="w-5 h-5" />
            Retake Exam
          </Button>
          <Button
            onClick={onReset}
            variant="outline"
            className="gap-2 px-8 py-3 font-bold text-lg bg-transparent border-2"
          >
            <Home className="w-5 h-5" />
            Return to Units
          </Button>
        </div>
      </div>
    </div>
  )
}
