'use client';
import { useState } from 'react';

const page = () => {
    const sections = [
        { id: 1, title: "Affirmative sentences (Future Perfect Tense)", url: "/section/1/1" },
        { id: 2, title: "Negative sentences (Future Perfect Tense)", url: "/section/1/2" },
        { id: 3, title: "Interrogative Sentences (Future Perfect Tense)", url: "/section/1/3" },
    ];

    const questions: Record<number, string[]> = {
        1: [
            "سورج غروب ہو چکا ہوگا۔",
            "مہمان آ چکے ہوں گے۔",
            "ہم آرام کر چکے ہوں گے۔",
            "چوکیدار گھر جا چکا ہوگا۔",
            "تم ناشتہ کر چکے ہوگے۔",
            "انہوں نے نماز پڑھ لی ہوگی۔",
            "بچے نے مٹھائی کھا لی ہوگی۔",
            "ہیڈ ماسٹر دفتر میں داخل ہو چکا ہوگا۔",
            "تم نے منی آرڈر وصول کر لیا ہوگا۔",
            "ہم مکان تبدیل کر چکے ہوں گے۔",
            "پولیس ہجوم کو منتشر کر چکی ہوگی۔",
            "ڈاکو جنگل میں چھپ چکے ہوں گے۔",
            "کتے خرگوش پر جھپٹ پڑے ہوں گے۔",
            "میں سات بجے تک سیر کر چکا ہوں گا۔",
            "نوکر مرغیوں کو ڈربے میں بند کر چکا ہوگا۔",
            "وہ دروازے کو تالا لگا چکا ہوگا۔",
            "ہم صندوق کا قفل کھول چکے ہوں گے۔",
            "مزدوروں نے ہڑتال کردی ہوگی۔",
            "کلرک ہڑتال کھول چکے ہوں گے۔",
            "وہ اپنا کام مکمل کر چکے ہوں گے۔",
            "اس اجتماع میں کئی ملکوں نے حصہ لیا ہوگا۔",
            "اچھے کھلاڑی انعامات حاصل کر چکے ہوں گے۔",
            "باغبان کیا ریاں تیار کر چکا ہوگا۔",
            "سلیم نے اپنے بھائی کی مدد کی ہوگی۔",
            "ہمارے دوست ہمارا انتظار کر چکے ہوں گے۔",
            "تم نے مجید کی سفارش کر دی ہوگی۔",
            "میں جماعت کو امتحان کے بارے میں سب کچھ بتا چکا ہوں گا۔",
            "لڑکے مقابلے کے متعلق سب کچھ جان چکے ہوں گے۔",
            "زیبا اپنی سہیلی کو راز بتا چکی ہوگی۔",
            "سوار گھوڑوں سے اتر چکے ہوں گے۔"
        ],
        2: [
            "وہ آم نہیں کھا چکے ہوں گے۔",
            "تم نہا نہیں چکے ہو گے۔",
            "وہ عدالت میں قسم نہیں کھا چکے ہوں گے۔",
            "ڈاکو نے اس کے ہاتھ پاؤں نہیں باندھے ہوں گے۔",
            "ڈاکٹر نے زخمی کی مرہم پٹی نہیں کی ہوگی۔",
            "حیدر نے نوکر کو تمھارے پاس نہیں بھیجا ہوگا۔",
            "کمھار نے برتن نہیں پکائے ہوں گے۔",
            "جلد ساز کتابوں کی جلد نہیں بنا چکا ہوگا۔",
            "شکاری نے کوئی پرندہ نہیں پکڑا ہو گا۔",
            "استاد حاضری نہیں لگا چکے ہوں گے۔",
            "ہیڈ ماسٹر نے لڑکوں کو معاف نہیں کیا ہوگا۔",
            "لڑکوں نے معافی نہیں مانگی ہوگی۔",
            "اس لڑکے نے اندھے آدمی کو دھکا نہیں دیا ہوگا۔",
            "دشمن نے ہتھیار نہیں ڈالے ہوں گے۔",
            "انھوں نے یہ غلطی انہیں کی ہوگی۔",
            "وہ تنخواہ نہیں لے چکے ہوں گے۔",
            "میں نے تمھارا خط نہیں کھولا ہوگا۔",
            "استاد نے طالب علم کو بیدہ نہیں لگائے ہوں گے۔",
            "ہم نے ان کے سوالات کے جواب نہیں دیے ہوں گے۔",
            "کوئی مسافر بس میں سوار نہیں ہوا ہوگا۔",
            "رنگ ساز نے دروازوں کو رنگ نہیں کیا ہوگا۔",
            "بھیڑیں ابھی چری نہیں چکی ہوں گی۔",
            "گوالے نے بھینس کا دودھ نہیں نکالا ہوگا۔",
            "گاؤں والوں نے اپنی مدد آپ نہیں کی ہوگی۔",
            "وہ جلوس میں شامل نہیں ہوئے ہوں گے۔",
            "باورچی نے کھانا تیار نہیں کیا ہوگا۔",
            "وہ اخبار نہیں پڑھ چکے ہوں گے۔",
            "ڈاکیا میرا خط نہیں لایا ہوگا۔",
            "اس نے غریب آدمی کا مذاق نہیں اُڑایا ہوگا۔"
        ],
        3: [
            "کیا تمام پرندے اڑ چکے ہوں گے؟",
            "کیا میرے ساتھی سامان باندھ چکے ہوں گے؟",
            "کیا مہمان اپنی اپنی جگہ بیٹھ چکے ہوں گے؟",
            "انھوں نے اپنا کام کیوں ادھورا چھوڑ دیا ہوگا؟",
            "ہم نے ان کی حوصلہ شکنی کب کی ہوگی؟",
            "کیا تم مقررہ وقت پر دفتر جاچکے ہو گے؟",
            "افسر نے تمھاری درخواست پر کب غور کیا ہوگا؟",
            "لوگوں نے اپنے مطالبات کیسے پیش کیے ہوں گے؟",
            "کیا وہ جوئے میں سب کچھ ہار چکا ہوگا؟",
            "کیا تمھارا بیٹا مقابلے میں امتیاز حاصل کر چکا ہوگا؟",
            "کیا قاتل صاف بیچ کر نکل گیا ہو گا؟",
            "حکومت قیمتیں کب کم کر چکی ہوگی؟",
            "میں اس کو کیوں معاف کر چکا ہوں گا؟",
            "کیا تمام اراکین نے اس تجویز سے اتفاق کیا ہوگا؟",
            "ڈائریکٹر اس منصوبے کو کیوں مسترد کر چکا ہوگا؟",
            "کیا انجینئر اس نقشے کو منظور کر چکے ہوں گے؟",
            "گاؤں والوں نے گاؤں کو کیسے سجایا ہوگا؟",
            "کیا بشیر نے استعفیٰ دے دیا ہوگا؟",
            "گاڑی پر پتھر کس نے پھینکا ہوگا؟",
            "دیوانے نے کتابیں کہاں جلائی ہوں گی؟",
            "مسافر کل رات کہاں ٹھہرے ہوں گے؟",
            "کیا عورتوں نے یہ گیت پسند کیا ہوگا؟",
            "اس نے کب خط ڈاک میں ڈالا ہو گا؟",
            "کیا وہ الزام ماننے سے انکار کر چکا ہو گا؟",
            "پوسٹ ماسٹر نے ڈاک خانہ کب کھولا ہوگا؟",
            "کیا مزدور سکول میں سفیدی کر چکے ہوں گے؟",
            "کیا چوکیدار نے مکان کی حفاظت کی ہوگی؟",
            "کیا انھوں نے افسر کا حکم مانا ہوگا؟",
            "کیا تم میرے مشورے پر عمل کر چکے ہو گے؟",
            "اس کو یہ حادثہ کہاں پیش آیا ہو گا؟"
        ],

    };
    const [selectedSection, setSelectedSection] = useState<number>(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* PRINT CSS */}
            <style jsx global>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .print-area, .print-area * {
                        visibility: visible;
                    }
                    .print-area {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                }
            `}</style>

            <div className="flex gap-6 p-4 md:p-6 bg-gray-100 min-h-screen flex-col md:flex-row">

                {/* Mobile menu */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden bg-blue-500 text-white p-2 rounded-lg print:hidden"
                >
                    {sidebarOpen ? '✕' : '☰'}
                </button>

                {/* Sidebar */}
                <div className={`w-full md:w-64 flex flex-col gap-3 ${sidebarOpen ? 'block' : 'hidden'} md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto print:hidden`}>
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => {
                                setSelectedSection(section.id);
                                setSidebarOpen(false);
                            }}
                            className={`p-4 rounded-lg font-bold w-full mt-4 text-left border-2 transition ${selectedSection === section.id
                                    ? 'bg-blue-500 text-white border-blue-600'
                                    : 'bg-white text-black border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* MAIN */}
                <div className="flex-1 bg-white p-4 md:p-6 rounded-lg w-full print-area">

                    {/* Print Button */}
                    <button
                        onClick={handlePrint}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 print:hidden"
                    >
                        🖨️ Print Sentences
                    </button>

                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-right">
                        {sections.find(s => s.id === selectedSection)?.title}
                    </h2>

                    <ul className="space-y-2">
                        {questions[selectedSection]?.map((question, index) => (
                            <li key={index} className="flex gap-4 text-base md:text-lg text-right p-2 border-b justify-end">
                                <span style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>{question}</span>
                                <span className="font-bold text-gray-600 w-8">{index + 1}.</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default page;