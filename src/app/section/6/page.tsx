'use client';
import { useState } from 'react';

const page = () => {
    const sections = [
        { id: 1, title: "Affirmative sentences (Past Continuous Tense)", url: "/section/1/1" },
        { id: 2, title: "Negative sentences (Past Continuous Tense)", url: "/section/1/2" },
        { id: 3, title: "Interrogative Sentences (Past Continuous Tense)", url: "/section/1/3" },
    ];

    const questions: Record<number, string[]> = {
        1: [

            "وہ تیز دوڑ رہا تھا۔",
            "تم کہانی سنا رہے تھے۔",
            "وہ اپنی گاڑی بیچ رہے تھے۔",
            "وہ سخت رو رہی تھی۔",
            "ہم گہری نیند سو رہے تھے۔",
            "گھوڑے کھیت میں چر رہے تھے۔",
            "کنارات کو بھونک رہا تھا۔",
            "بچے شور مچا رہے تھے۔",
            "کچھ لڑکے سوکھے پتے اکٹھے کر رہے تھے۔",
            "اس کا بھائی مل میں کام کر رہا تھا۔",
            "میرا والد اپنے دوستوں کا انتظار کر رہا تھا۔",
            "صبح بارش ہو رہی تھی۔",
            "لوگ پینگیں اُڑا رہے تھے۔",
            "بوڑھا کمرے میں اُونگھ رہا تھا۔",
            "ہم دوپہر کے وقت خبر میں ٹن رہے تھے۔",
        ],
        2: [
            "چپڑاسی گھنٹی نہیں بجا رہا تھا۔",
            "امیر آدمی غریب کو خیرات نہیں دے رہا تھا۔",
            "لڑکا سوال حل نہیں کر رہا تھا۔",
            "ہم ایک ساتھ سفر نہیں کر رہے تھے۔",
            "استاد صاحب ہمیں انگریزی نہیں پڑھا رہے تھے۔",
            "میں پیدل نہیں چل رہا تھا۔",
            "وہ جھوٹے وعدے نہیں کر رہے تھے۔",
            "وہ تیر کر دریا پار نہیں کر رہے تھے۔",
            "حکومت اس کو رہا نہیں کر رہی تھی۔",
            "تاجر واپس گھر نہیں آ رہا تھا۔",
            "میں کتاب سے نقل نہیں کر رہا تھا۔",
            "اسلم کرکٹ نہیں کھیل رہا تھا۔",
            "لڑکے گیت نہیں گا رہے تھے۔",
            "نوکر فرنیچر کو نہیں جھاڑ رہا تھا۔",
            "میں آپ سے مذاق نہیں کر رہا تھا۔",
            "پانی کی سطح بلند نہیں ہو رہی تھی۔",
            "کسان مارچ میں فصل نہیں کاٹ رہے تھے۔",
            "طالب علم کشتی نہیں چلا رہے تھے۔",
            "بہشتی پانی نہیں چھڑک رہا تھا۔",
            "ڈرائیور کار تیز نہیں چلا رہا تھا۔",
            "دشمن دریا کو عبور نہیں کر رہا تھا۔",
            "میں ملازمت کے لیے اس کی سفارش نہیں کر رہا تھا۔",
            "وہ اپنے بھائی کو نہیں مار رہا تھا۔",
            "نوکر بہانے نہیں بنا رہا تھا۔",
            "کئی طالب علم مباحثے میں حصہ نہیں لے رہے تھے۔",
        ],
        3: [
            "کیا وہ کھیلوں میں حصہ لے رہا تھا؟",
            "کیا آپ سردی سے کانپ رہے تھے؟",
            "کیا غریب بچی چیخ رہی تھی؟",
            "کیا مسافر گھوڑوں پر سواری کر رہے تھے؟",
            "کیا وہ شہر کو خوبصورت بنا رہے تھے؟",
            "وہ کیوں پیدل چل رہے تھے؟",
            "تم ادھر اُدھر کہاں پھر رہے تھے؟",
            "میں آسمان کی طرف کب دیکھ رہا تھا؟",
            "وہ تصویر کیسے بنا رہا تھا؟",
            "کیا دونوں کھلاڑی گیند کے پیچھے بھاگ رہے تھے؟",
            "آپ کے بارے میں کون پوچھ رہا تھا؟",
            "وہ جنگل سے کب گزر رہے تھے؟",
            "شیر کہاں پانی پی رہا تھا؟",
            "تمھارا بھائی کسی کو خط لکھ رہا تھا؟",
            "معزز مہمانوں کو ہار کون پہنا رہا تھا؟",
            "کیا تم بالوں میں کنگھی کر رہے تھے؟",
            "وہ کس کی جرا میں رفو کر رہی تھیں؟",
            "کیا وہ آگ جلا رہے تھے؟",
            "لڑکے آپس میں کیوں جھگڑ رہے تھے؟",
            "وہ کسی بینک میں روپیہ جمع کرا رہے تھے؟",
            "شیر صبح کہاں گرج رہا تھا؟",
            "کیا وہ استاد کو توجہ سے سن رہے تھے؟",
            "کتنے آدمی باغ میں جمع ہو رہے تھے؟",
            "بس پر پتھر کون پھینک رہا تھا؟",
            "ڈاکٹر مریض کا معائنہ کہاں کر رہا تھا؟",
            "آپ کے مکان کی مرمت کون کر رہا تھا؟",
            "پولیس جلوس کو کیوں منتشر کر رہی تھی؟",
            "لوگ کس کا انتظار کر رہے تھے؟",
            "کیا لوگ جلدی جلدی سٹیشن پر پہنچ رہے تھے؟",
            "مزدور کام کب مکمل کر رہے تھے؟",
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



