"use client"

import { Card } from "@/components/ui/card"

export default function VerbTensesPage() {
  const tenseData = [
    {
      tense: "Present",
      emoji: "⏱️",
      color: "from-blue-400 to-blue-500",
      simple: {
        helping: "do / does",
        note: "(in questions & negatives)",
        verbForm: "base form / s with he, she, it",
        example: "I play, he plays",
      },
      continuous: {
        helping: "am / is / are",
        verbForm: "V1 + ing",
        example: "I am playing",
      },
      perfect: {
        helping: "has / have",
        verbForm: "V3 (past participle)",
        example: "I have played",
      },
      perfectContinuous: {
        helping: "has been / have been",
        verbForm: "V1 + ing",
        example: "I have been playing",
      },
    },
    {
      tense: "Past",
      emoji: "⏮️",
      color: "from-orange-400 to-orange-500",
      simple: {
        helping: "did",
        note: "(in questions & negatives)",
        verbForm: "V2",
        example: "I played",
      },
      continuous: {
        helping: "was / were",
        verbForm: "V1 + ing",
        example: "I was playing",
      },
      perfect: {
        helping: "had",
        verbForm: "V3",
        example: "I had played",
      },
      perfectContinuous: {
        helping: "had been",
        verbForm: "V1 + ing",
        example: "I had been playing",
      },
    },
    {
      tense: "Future",
      emoji: "⏩",
      color: "from-green-400 to-green-500",
      simple: {
        helping: "will / shall",
        verbForm: "V1",
        example: "I will play",
      },
      continuous: {
        helping: "will be",
        verbForm: "V1 + ing",
        example: "I will be playing",
      },
      perfect: {
        helping: "will have",
        verbForm: "V3",
        example: "I will have played",
      },
      perfectContinuous: {
        helping: "will have been",
        verbForm: "V1 + ing",
        example: "I will have been playing",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-pink-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Fun Title */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🎓</span>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-balance">
              English Verb Tenses
            </h1>
            <span className="text-5xl">📚</span>
          </div>
          <p className="text-lg md:text-xl text-purple-700 font-semibold max-w-2xl mx-auto mt-4">
            Master all 12 tenses with fun examples and helpful tips!
          </p>
        </div>

        {/* Tense Cards Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {tenseData.map((row, idx) => (
            <div key={idx} className="lg:col-span-1">
              {/* Tense Header Card */}
              <div
                className={`bg-gradient-to-r ${row.color} rounded-2xl p-6 mb-4 text-white shadow-lg transform hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{row.emoji}</span>
                  <h2 className="text-3xl font-bold">{row.tense}</h2>
                </div>
                <p className="text-sm opacity-90">Click below to learn more</p>
              </div>

              {/* Sub-tense Cards */}
              <div className="space-y-3">
                {/* Simple */}
                <Card className="p-4 bg-white border-2 border-blue-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🔵</span>
                    <h3 className="font-bold text-blue-600">Simple</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-blue-700">Helping:</span>
                      <p className="text-blue-900 font-medium">{row.simple.helping}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">Form:</span>
                      <p className="text-blue-900">{row.simple.verbForm}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg border-l-4 border-blue-400">
                      <p className="text-xs text-blue-800 font-semibold">Example:</p>
                      <p className="text-blue-900 italic">{row.simple.example}</p>
                    </div>
                    {row.simple.note && <p className="text-xs text-blue-600 italic">💡 {row.simple.note}</p>}
                  </div>
                </Card>

                {/* Continuous */}
                <Card className="p-4 bg-white border-2 border-orange-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🟠</span>
                    <h3 className="font-bold text-orange-600">Continuous</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-orange-700">Helping:</span>
                      <p className="text-orange-900 font-medium">{row.continuous.helping}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">Form:</span>
                      <p className="text-orange-900">{row.continuous.verbForm}</p>
                    </div>
                    <div className="bg-orange-50 p-2 rounded-lg border-l-4 border-orange-400">
                      <p className="text-xs text-orange-800 font-semibold">Example:</p>
                      <p className="text-orange-900 italic">{row.continuous.example}</p>
                    </div>
                  </div>
                </Card>

                {/* Perfect */}
                <Card className="p-4 bg-white border-2 border-green-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🟢</span>
                    <h3 className="font-bold text-green-600">Perfect</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Helping:</span>
                      <p className="text-green-900 font-medium">{row.perfect.helping}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700">Form:</span>
                      <p className="text-green-900">{row.perfect.verbForm}</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg border-l-4 border-green-400">
                      <p className="text-xs text-green-800 font-semibold">Example:</p>
                      <p className="text-green-900 italic">{row.perfect.example}</p>
                    </div>
                  </div>
                </Card>

                {/* Perfect Continuous */}
                <Card className="p-4 bg-white border-2 border-pink-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🟣</span>
                    <h3 className="font-bold text-pink-600">Perfect Continuous</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-pink-700">Helping:</span>
                      <p className="text-pink-900 font-medium">{row.perfectContinuous.helping}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-pink-700">Form:</span>
                      <p className="text-pink-900">{row.perfectContinuous.verbForm}</p>
                    </div>
                    <div className="bg-pink-50 p-2 rounded-lg border-l-4 border-pink-400">
                      <p className="text-xs text-pink-800 font-semibold">Example:</p>
                      <p className="text-pink-900 italic">{row.perfectContinuous.example}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

   
        {/* Fun Tip Section */}
      
      </div>
    </main>
  )
}
