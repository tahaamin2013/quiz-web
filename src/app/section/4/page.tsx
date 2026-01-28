'use client';
import { useState } from 'react';

const page = () => {
    const sections = [
        { id: 1, title: "Affirmative sentences", url: "/section/1/1" },
        { id: 2, title: "Negative sentence & Interrogative Sentences", url: "/section/1/2" },
    ];

    const questions: Record<number, string[]> = {
        1: [
            "لوگ صبح سے سیر گاہ آ رہے ہیں۔",
            "کھلاڑی چار بجے سے فٹ بال کھیل رہے ہیں۔",
            "بچہ دو گھنٹے سے رو رہا ہے۔",
            "لڑکی تین دن سے دوائی پی رہی ہے۔",
            "طالبعلم چار ماہ سے محنت کر رہا ہے۔",
            "لڑکیاں دو سال سے کالج آ رہی ہیں۔",
            "استاد آٹھ بجے سے پڑھا رہا ہے۔",
            "اصغر پندرہ منٹ سے نہا رہا ہے۔",
            "ہم کئی گھنٹے سے آپ کا انتظار کر رہے ہیں۔",
            "لوگ شام سے صدر کا استقبال کرنے کے لیے جمع ہو رہے ہیں۔",
            "وہ 1982ء سے اس مکان میں رہ رہا ہے۔",
            "کنجوس پانچ سال سے ایک ایک پیسہ جمع کر رہا ہے۔",
            "اسلم دو پہر سے پتنگ اڑا رہا ہے۔",
            "سب دوست منگل سے اکٹھے سفر کر رہے ہیں۔",
            "ہم کل سے واپس جانے کی تیاری کر رہے ہیں۔",
            "اکبر کئی گھنٹے سے پہاڑے یاد کر رہا ہے۔",
            "تم چھ بجے سے دوستوں کو خط لکھ رہے ہو۔",
            "مریض دس منٹ سے پیچ رہا ہے۔",
            "ڈاکٹر دس منٹ سے مریض کا معائنہ کر رہا ہے۔",
            "چوکیدار پانچ گھنٹے سے پہرہ دے رہا ہے۔",
            "تم پانچ منٹ سے چاقو تیز کر رہے ہو۔",
            "کسان دو ماہ سے فصل کی کٹائی کر رہا ہے۔",
            "نقشہ نویس ایک ہفتے سے عمارت کا نقشہ بنا رہے ہیں۔",
            "کھلاڑی کئی دن سے میچ کھیلنے کی تیاری کر رہے ہیں۔",
            "میں بدھ سے ٹی وی کی مرمت کر رہا ہوں۔",
            "وہ 1983ء سے پنشن لے رہا ہے۔",
            "کچھ لوگ شام سے نمائش کا لطف اُٹھا رہے ہیں۔",
            "سب لوگ ایک گھنٹے سے ایک دوسرے سے بغل گیر ہو رہے ہیں۔",
            "لڑکیاں سات بجے سے بار بنا رہی ہیں۔",
            "تمام مسلمان یکم رمضان سے روزے رکھ رہے ہیں۔",
        ],
        2: [
            "ملاح دو گھنٹے سے اپنی کشتیاں چھوڑ کر نہیں جارہے ہیں۔",
            "وہ دو دن سے ورزش نہیں کر رہا ہے۔",
            "مسافر شام سے آگ نہیں جلا رہے ہیں۔",
            "لکھے طالبعلم کئی دنوں سے کام نہیں کر رہے ہیں۔",
            "درزی منگل سے کپڑے نہیں کی رہا ہے۔",
            "شکاری کئی ماہ سے جال نہیں بچھا رہا ہے۔",
            "یہ لڑ کے تین دن سے شرارت نہیں کر رہے ہیں۔",
            "پولیس سوموار سے شہر میں گشت نہیں کر رہی ہے۔",
            "وہ ہمیں پندرہ دن سے نصیحت نہیں کر رہے ہیں۔",
            "آپ اپنے والدین کے مشورے پر کئی سال سے عمل نہیں کر رہے ہیں۔",
            "ڈاکٹر تین دن سے مریضوں کا علاج نہیں کر رہے۔",
            "مجھے اکتوبر سے اپنے بھائی کے خط نہیں مل رہے ہیں۔",
            "وہ اپنی ماں کو چار ماہ سے کچھ نہیں دے رہا ہے۔",
            "دو سہیلیاں مارچ سے ایک دوسرے کو نہیں مل رہی۔",
            "لوگ کل رات سے ڈاکو کی موت پر افسوس نہیں کر رہے ہیں۔",
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



