"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, RotateCcw, Trophy } from "lucide-react"
import { useEffect, useState } from "react"
import { quizData } from "@/lib/quiz-data"

interface UnitSelectorProps {
  onSelectUnit: (unit: string) => void
  onReset: () => void
}

const getScoresFromStorage = () => {
  if (typeof window === "undefined") return {}
  const stored = localStorage.getItem("examScores")
  return stored ? JSON.parse(stored) : {}
}

export default function UnitSelector({ onSelectUnit, onReset }: UnitSelectorProps) {
  const [scores, setScores] = useState<Record<string, number>>({})

  useEffect(() => {
    setScores(getScoresFromStorage())
  }, [])

  const accentColor = "#2563eb"
  const bgAccent = "bg-blue-50 dark:bg-blue-950"

  const units = [
    { id: "pstav", data: quizData.pstav },
    { id: "pct", data: quizData.pct },
    { id: "tag", data: quizData.tag },
    { id: "unit1111", data: quizData.unit1111 },
    { id: "unit11112", data: quizData.unit11112 },
    { id: "unit133", data: quizData.unit133 },
    { id: "unit1", data: quizData.unit1 },
    { id: "unit2", data: quizData.unit2 },
    { id: "unit3", data: quizData.unit3 },
    { id: "unit4", data: quizData.unit4 },
    { id: "unit5", data: quizData.unit5 },
    { id: "unit6", data: quizData.unit6 },
    { id: "unit7", data: quizData.unit7 },
    { id: "unit8", data: quizData.unit8 },
    { id: "unit9", data: quizData.unit9 },
    { id: "unit10", data: quizData.unit10 },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            English Proficiency Exam
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Master English grammar, comprehension, and communication skills
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 mb-12">
          {units.map((unit) => {
            const unitScore = scores[unit.id]
            return (
              <button key={unit.id} onClick={() => onSelectUnit(unit.id)} className="quiz-card text-left group">
                <Card className={`h-full border-2 border-border hover:border-opacity-100 transition-all ${bgAccent}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                          {unit.data.name}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg">{unit.data.description}</CardDescription>
                      </div>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}40 100%)`,
                        }}
                      >
                        <BookOpen className="w-8 h-8" style={{ color: accentColor }} />
                      </div>
                    </div>

                    {unitScore ? (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="w-4 h-4" style={{ color: accentColor }} />
                          <span className="text-foreground/70">Previous Score:</span>
                          <span className="font-bold text-lg" style={{ color: accentColor }}>
                            {unitScore}%
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-foreground/50">No attempts yet</p>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              </button>
            )
          })}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={onReset}
            variant="outline"
            className="gap-2 px-6 py-2 text-base border-2 hover:bg-secondary bg-transparent"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
