'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function SentenceExercise() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-white">
            {/* Print Button */}
            <div className="flex justify-center p-4 print:hidden">
                <Button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    <Printer className="w-4 h-4" />
                    Print
                </Button>
            </div>

            {/* Content */}
            <div className="px-4 py-2 print:px-3 print:py-1 text-xs">
                <h1 className="text-base font-bold text-center mb-1 print:mb-0.5">Exercise: The Sentence</h1>

                {/* Part A */}
                <div className="mb-1.5 print:mb-1">
                    <h2 className="font-bold text-sm mb-0.5">Part A: Identify the Sentence</h2>
                    <p className="text-xs mb-0.5">Tick (✔) the group of words that is a sentence.</p>
                    <div className="space-y-0.5 text-xs">
                        <div>☐ (a) in the classroom  ☐ (b) The students are in the classroom.</div>
                        <div>☐ (a) very early morning  ☐ (b) It was a very early morning.</div>
                        <div>☐ (a) running across the road  ☐ (b) The dog was running across the road.</div>
                        <div>☐ (a) after the bell rang  ☐ (b) The class ended after the bell rang.</div>
                        <div>☐ (a) on the old bridge  ☐ (b) The man stood on the old bridge.</div>
                    </div>
                </div>

                {/* Part B */}
                <div className="mb-1.5 print:mb-1">
                    <h2 className="font-bold text-sm mb-0.5">Part B: Name the Kind</h2>
                    <div className="grid grid-cols-2 print:grid-cols-2 gap-0.5 text-xs">
                        <div>1. The sky is full of stars. _______</div>
                        <div>2. Where did you find this book? _______</div>
                        <div>3. Please sit down. _______</div>
                        <div>4. What a wonderful idea! _______</div>
                        <div>5. She speaks very politely. _______</div>
                        <div>6. Do not run in the corridor. _______</div>
                        <div>7. How hot the day is! _______</div>
                        <div>8. They won the match yesterday. _______</div>
                        <div>9. Can you help me? _______</div>
                        <div>10. Always speak the truth. _______</div>
                    </div>
                </div>

                {/* Part C */}
                <div className="mb-1.5 print:mb-1">
                    <h2 className="font-bold text-sm mb-0.5">Part C: Rewrite the Sentences</h2>
                    <div className="space-y-0.5 text-xs">
                        <div>Interrogative: You are feeling better. ________________</div>
                        <div>Imperative: You should close the door. ________________</div>
                        <div>Exclamatory: It is a beautiful painting. ________________</div>
                        <div>Declarative: How cold the weather is! ________________</div>
                    </div>
                </div>

                {/* Part D */}
                <div className="mb-1.5 print:mb-1">
                    <h2 className="font-bold text-sm mb-0.5">Part D: Make Your Own Sentences</h2>
                    <div className="space-y-0.5 text-xs">
                        <div>Declarative: 1. ________________  2. ________________</div>
                        <div>Interrogative: 3. ________________  4. ________________</div>
                        <div>Imperative: 5. ________________  6. ________________</div>
                        <div>Exclamatory: 7. ________________  8. ________________</div>
                    </div>
                </div>

                {/* Part E */}
                <div>
                    <h2 className="font-bold text-sm mb-0.5">Part E: Underline and Identify</h2>
                    <div className="grid grid-cols-2 print:grid-cols-2 gap-0.5 text-xs">
                        <div>1. Please lend me your pen. ______</div>
                        <div>2. How fast the river is flowing! ______</div>
                        <div>3. The farmer works very hard. ______</div>
                        <div>4. Why are you late today? ______</div>
                        <div>5. Shut the door quietly. ______</div>
                        <div>6. What a lovely dress she is wearing! ______</div>
                        <div>7. The baby is sleeping peacefully. ______</div>
                        <div>8. Do you know the answer? ______</div>
                        <div>9. Always respect your elders. ______</div>
                        <div>10. How bright the stars look tonight! ______</div>
                        <div>11. We will visit our grandparents tomorrow. ______</div>
                        <div>12. Please do not make noise. ______</div>
                        <div>13. Where did you put my bag? ______</div>
                        <div>14. What a dangerous road this is! ______</div>
                        <div>15. The teacher explained the lesson clearly. ______</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
