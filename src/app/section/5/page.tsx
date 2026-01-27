'use client';
import { useState } from 'react';

const page = () => {
    const sections = [
        { id: 1, title: "Affirmative sentences", url: "/section/1/1" },
        { id: 2, title: "Negative sentences and Interrogative Sentences", url: "/section/1/2" },
    ];

    const questions: Record<number, string[]> = {
        1: [
"وہ سکول گیا۔",
"تم نے سوال حل کیا۔",
"میں نے ایک کیمرہ خریدا۔",
"ہم نے دریا پار کیا۔",
"انھوں نے کار کو روکا۔",
"ہم گاڑی میں سوار ہوئے۔",
"انھوں نے ہم کو تحفہ دیا۔",
"حمید نے انعام حاصل کیا۔",
"لوگوں نے چور پکڑا۔",
"کتے نے خرگوش کا تعاقب کیا۔",
"میں نے خط ڈاک میں ڈالا۔",
"تم نے مجھے چائے پر بلایا۔",
"ہماری ٹیم نے میچ جیت لیا۔",
"لڑکوں نے شور مچایا۔",
"مجید نے خوبصورت تصویر بنائی۔",
"دادی اماں نے ہمیں عجیب کہانی سنائی۔",
"طلبہ نے سبق سنایا۔",
"استاد نے سبق اچھی طرح پڑھایا۔",
"وہ جان بچانے کے لیے بھاگ کھڑا ہوا۔",
"اُس نے اپنی کتاب دینے سے انکار کر دیا۔",
"لوگوں نے باغ میں جلسہ کیا۔",
"مزدوروں نے جلوس نکالا۔",
"طلبہ نے نعرے لگائے۔",
"کلرکوں نے ہڑتال کی۔",
"ہم نے آپ کا انتظار کیا۔",
"انھوں نے ہمارے مشورے پر عمل کیا۔",
"مجھے آپ کا خط مل گیا۔",
"استاد نے طالبعلم کو سزا دی۔",
"ہیڈ ماسٹر نے شرارتی لڑکے کو جرمانہ کیا۔",
"مزدوروں نے ہڑتال کھول دی۔",
"نیک عورت نے یتیم بچے کی پرورش کی۔",
"آپ نے میرے بھائی کی دیکھ بھال کی۔",
"ڈاکٹر نے مریض کا آپریشن کیا۔",
"مسافروں نے جنگل میں آگ لگائی۔",
        ],
        2: [
"اس نے والدین کا حکم نہ مانا۔",
"انھوں نے ہماری مدد نہ کی۔",
"تم نے اپنا وعدہ پورا نہ کیا۔",
"لوگوں نے اس قانون کے خلاف احتجاج نہ کیا۔",
"پولیس نے چور کو گرفتار نہ کیا۔",
"پولیس نے ہجوم کو منتشر نہ کیا۔",
"وہ سزا سے نہ بچا۔",
"تم نے میری ایک نہ سنی۔",
"انھوں نے مجھے ایک طرف نہ دھکیلا۔",
"ہم نے اس کی پرواہ نہ کی۔",
"پرنسپل نے انعامات تقسیم نہ کیے۔",
"میں نے اس کا مذاق نہ اڑایا۔",
"فوج نے قلعہ پر قبضہ نہ کیا۔",
"پہلوان نے اپنے حریف کو نہ پچھاڑا۔",
"اس نے جھوٹ نہ بولا۔",
"تم نے کس سے مشورہ کیا؟",
"اس نے تمھاری بے عزتی کیوں کی؟",
"شیر گائے اُٹھا کر کب لے گیا؟",
"تمھیں یہ کتاب کہاں سے ملی؟",
"اس نے کاغذ کیوں پھاڑا؟",
"انھوں نے ہماری دعوت قبول نہ کی۔",
"کیا تمھارے دوستوں نے تمھاری کامیابی پر مبارک باد دی؟",
"کمرے میں جھاڑو کس نے دیا؟",
"انھوں نے تمھارا استقبال کیسے کیا؟",
"کیا تمھارے دوستوں نے یہ کھیل پسند کیا؟",
"اس نے اپنی تمام جائیداد فروخت نہ کی۔",
"باورچی نے چاول کس طرح پکائے؟",
"میں نے اپنے والد کو ہوائی ڈاک سے خط نہ بھیجا۔",
"کیا آفیسر نے اپنے چپڑاسی کو تبدیل نہ کیا؟",
"مجید نے دونوں ہاتھوں سے دولت کیوں اُڑائی؟",
"کیا مجسٹریٹ نے اسے رنگے ہاتھوں پکڑ لیا؟",
"ہوائی جہاز اڈے پر کب اُترا؟",
"کیا تم نے پرواز سے لطف اُٹھایا؟",
"مال گاڑی مسافر گاڑی سے کہاں ٹکرائی؟",
"تم نے مجھے فیصلے سے آگاہ نہ کیا۔",
"اس نے تمھاری تلخ باتوں کا برا نہیں مانا۔",
"انھوں نے اپنے دوست کا ساتھ نہ دیا۔",
"کیا تمھارے بھائی نے تمھارا ہاتھ بنایا؟",
"انھوں نے تمھارا استقبال کیسے کیا؟",
"مجید نے اپنے چھوٹے بھائی کی پرورش نہ کی۔",
"مزدور نے اتنا بوجھ کیسے اُٹھایا؟",
"ڈاکٹر نے ٹیکہ کسی کو لگایا؟",
"وہ کراچی کب پہنچے؟",
"کیا تم گھر خیریت سے پہنچے؟",
"ہم نے تمام تاریخی مقامات کی سیر نہ کی۔",
"ہوائی جہاز نے پونے آٹھ بجے پرواز شروع نہ کی۔",
"میرا خط کس نے پڑھا؟",
"میرے بھائی نے مجھے ریلوے سٹیشن پر اللہ حافظ نہ کہا۔",
"موچی نے میرا جو تا مرمت کیوں نہ کیا؟",
"دروازہ کس نے کھٹکھٹایا؟",
        ],

    };

    const [selectedSection, setSelectedSection] = useState<number>(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex gap-6 p-4 md:p-6 bg-gray-100 min-h-screen flex-col md:flex-row">
            {/* Mobile menu button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden bg-blue-500 text-white p-2 rounded-lg"
            >
                {sidebarOpen ? '✕' : '☰'}
            </button>

            {/* Sidebar */}
            <div className={`w-full md:w-64 flex flex-col gap-3 ${sidebarOpen ? 'block' : 'hidden'} md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto`}>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => {
                            setSelectedSection(section.id);
                            setSidebarOpen(false);
                        }}
                        className={`p-4 rounded-lg font-bold w-full mt-4 text-left border-2 cursor-pointer transition ${selectedSection === section.id
                            ? 'bg-blue-500 text-white border-blue-600'
                            : 'bg-white text-black border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Main content area */}
            <div className="flex-1 bg-white  p-4 md:p-6 rounded-lg w-full">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {sections.find(s => s.id === selectedSection)?.title}
                </h2>
                <ul className="space-y-2">
                    {questions[selectedSection]?.map((question: string, index: number) => (
                        <li key={index} className="flex gap-4 text-base md:text-lg text-right p-2 border-b justify-end">
                            <span style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>{question}</span>
                            <span className="font-bold text-gray-600 w-8">{index + 1}.</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default page;



