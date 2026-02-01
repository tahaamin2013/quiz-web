'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function GrammarExercise() {
    const handlePrint = () => {
        window.print();
    };

    const exercises = [
        "The cackling of geese saved Rome.",
        "The boy stood on the burning deck.",
        "Tubal Cain was a man of might.",
        "Stone walls do not make a prison.",
        "The singing of the birds delights us.",
        "Miss Kitty was rude at the table one day.",
        "He has a good memory.",
        "Bad habits grow unconsciously.",
        "The earth revolves round the sun.",
        "Nature is the best physician.",
        "Edison invented the phonograph.",
        "The sea hath many thousand sands.",
        "We cannot pump the ocean dry.",
        "Borrowed garments never fit well.",
        "The early bird catches the worm.",
        "All matter is indestructible.",
        "Islamabad is the capital of Pakistan.",
        "We should profit by experience.",
        "All roads lead to Rome.",
        "A guilty conscience needs no excuse.",
        "The beautiful rainbow soon faded away.",
        "No man can serve two masters.",
        "A sick room should be well aired.",
        "The dewdrops glitter in the sunshine.",
        "I shot an arrow into the air.",
        "A barking sound the shepherd hears.",
        "On the top of the hill lives a hermit.",
    ];

    return (
        <div className="bg-white overflow-x-hidden print:bg-white p-0">
            {/* Print Button - Hidden on Print */}
            <div className="mb-2 flex justify-center print:hidden p-2">
                <Button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                >
                    <Printer className="w-3 h-3" />
                    Print
                </Button>
            </div>

            {/* Content Container - Optimized for single page */}
            <div className="max-w-full print:max-w-full mx-auto print:p-0 px-2 py-0 text-xs print:text-xs">
                {/* Header */}
                <div className="text-center mb-1 print:mb-1">
                    <h1 className="text-lg font-bold text-blue-600 mb-0 print:mb-0 leading-none">
                        Grammar Exercise
                    </h1>
                    <p className="text-xs text-gray-600 leading-none">
                        Separate <span className="font-bold">Subject</span> and <span className="font-bold">Predicate</span>
                    </p>
                </div>

                {/* Exercise List - 2 column layout for print */}
                <div className="grid grid-cols-1 print:grid-cols-1 space-y-1  gap-1 print:gap-0.5">
                    {exercises.map((exercise, index) => (
                        <div
                            key={index}
                            className="border-l border-blue-300  pl-1 py-0 bg-gray-50 print:bg-white"
                        >

                            <div className=' w-screen  flex justify-center border-b border-gray-400'>
                                <span className="font-bold text-blue-600 min-w-5 leading-tight">
                                    {index + 1}.
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-800 leading-tight break-words text-xs">
                                        {exercise}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
