'use client';
import { useState } from 'react';

const page = () => {
    const sections = [
        { id: 1, title: "Affirmative sentences (Future Continous Tense)", url: "/section/1/1" },
        { id: 2, title: "Negative sentences (Future Continous Tense)", url: "/section/1/2" },
        { id: 3, title: "Interrogative Sentences (Future Continous Tense)", url: "/section/1/3" },
    ];

    const questions: Record<number, string[]> = {
        1: [
            "اب بارش ہو رہی ہوگی۔",
            "سورج طلوع ہو رہا ہوگا۔",
            "کھلاڑی میدان میں کھیل رہے ہوں گے۔",
            "کسان حقہ پی رہا ہوگا۔",
            "ماں اپنے بچے کو چوم رہی ہوگی۔",
            "مسافر ٹکٹ خرید رہے ہوں گے۔",
            "وہ پیارے زبانی سبق یاد کر رہے ہوں گے۔",
            "استاد جماعت کو انگلش پڑھا رہا ہوگا۔",
            "مالی پودوں کو پانی دے رہا ہوگا۔",
            "پورا مکان منافع بخش کاروبار کا مرکز ہو گا۔",
            "لوگ نمازِ عید پڑھ رہے ہوں گے۔",
            "پرندے درختوں پر چہچہا رہے ہوں گے۔",
            "تک رن کار سارنگ بجا رہا ہوگا۔",
            "وہ قومی پرچم لہرا رہے ہوں گے۔",
            "طلبا گھر واپس جا رہے ہوں گے۔",
            "صدر جلسہ میں تقریر کر رہے ہوں گے۔",
            "معزز مہمان انعامات تقسیم کر رہا ہو گا۔",
            "میں ڈرامے میں حصہ لے رہا ہوں گا۔",
            "بچہ اپنا کھلونا تلاش کر رہا ہوگا۔",
            "ڈھول بجانے والے ڈھول بجا رہے ہوں گے۔",
            "ہم مکان میں سفیدی کر رہے ہوں گے۔",
            "فوج دشمن پر گولیاں برسا رہی ہوگی۔",
            "تم دریا میں نہا رہے ہوگے۔",
            "وہ کتے کو چھڑی سے مار رہا ہو گا۔",
            "انجینئر پل کی مرمت کر رہے ہوں گے۔",
            "میں کتاب کی جلد بنا رہا ہوں گا۔",
            "پاگل کتا لوگوں کو کاٹ رہا ہوگا۔",
            "زخمی کا خون بہہ رہا ہوگا۔",
            "بچہ کھلونا توڑ رہا ہوگا۔",
        ],
        2: [
            "بچے نہیں رو رہے ہوں گے۔",
            "تم ہنس نہیں رہے ہوں گے۔",

            "وہ مذاق نہیں کر رہے ہوں گے۔",
            "مجید اپنے بھائی کو نہیں ستا رہا ہوگا۔",
            "لنگڑا گھوڑے پر سوار نہیں ہو رہا ہوگا۔",
            "فقیہ بھیک نہیں مانگ رہا ہوگا۔",
            "امیر خیرات نہیں دے رہا ہوگا۔",
            "آقا غلام کو نہیں پیٹ رہا ہوگا۔",
            "شیر بکری کو نہیں پھاڑ رہا ہوگا۔",
            "قصاب چھری تیز نہیں کر رہا ہوگا۔",
            "تم مرغی کو ذبح نہیں کر رہے ہوگے۔",
            "اصغری یومِ پیدائش کا کیک نہیں کاٹ رہی ہوگی۔",
            "دھوبن کپڑے استری نہیں کر رہی ہوگی۔",
            "سٹارز تیاری نہیں کر رہے ہوں گے۔",
            "وہ اس وقت دعا نہیں مانگ رہا ہوگا۔",
            "لوگ آج پتنگیں نہیں اُڑا رہے ہوں گے۔",
            "ڈاکٹر مریض کا آپریشن نہیں کر رہا ہوگا۔",
            "گورنر میری مرضی پر غور نہیں کر رہا ہوگا۔",
            "وہ صلح نہیں کر رہے ہوں گے۔",
            "مریض دوائی نہیں پی رہا ہوگا۔",
            "بچے کاغذی کشتیاں نہیں چلا رہے ہوں گے۔",
            "گاڑی تیز نہیں چل رہی ہوگی۔",
            "عورتیں ہار نہیں بنا رہی ہوں گی۔",
            "تم دوڑ میں حصہ نہیں لے رہے ہوگے۔",
            "موچی جوتے تیار نہیں کر رہے ہوں گے۔",
            "وہ مکان خالی نہیں کر رہے ہوں گے۔",
            "وہ مال سستا نہیں بیچ رہے ہوں گے۔",
            "اچھے دکاندار مال ذخیرہ نہیں کر رہے ہوں گے۔",
            "سمگلر دن کے وقت سامان سمگل نہیں کر رہے ہوں گے۔",
            "نیک آدمی دودھ میں پانی نہیں ملا رہا ہوگا۔",
        ],
        3: [
            "کیا لڑکا اپنا سبق یاد کر رہا ہو گا؟",
            "کیا لڑکیاں چیزیں جھاڑ رہی ہوں گی؟",
            "تم ان کا سبق کیوں پڑھا رہے ہو گے؟",
            "سورج کب نکل رہا ہوگا؟",
            "وہ پتنگ کیسے اڑا رہا ہو گا؟",
            "عورتیں کہاں گا رہی ہوں گی؟",
            "تم کیا سوچ رہے ہوگے؟",
            "ہم میچ کہاں دیکھ رہے ہوں گے؟",
            "شکاری کہاں چھپ رہا ہوگا؟",
            "وہ کس کو بتا رہا ہو گا؟",
            "کتنے آدمی فصل کاٹ رہے ہوں گے؟",
            "تم اس آدمی پر کیوں نہیں ہنس رہے ہو گے؟",
            "بچے کیوں دور ہو رہے ہوں گے؟",
            "تم کب سفر پر روانہ ہو رہے ہو گے؟",
            "کیا میں گھوڑے سے اتر رہا ہوں گا؟",
            "بچے کب سو رہے ہوں گے؟",
            "کسان فصل کب بو رہے ہوں گے؟",
            "کیا مزدور سڑک ہموار کر رہے ہوں گے؟",
            "کیا تم میز کو پیچھے دھکیل رہے ہوں گے؟",
            "وہ کیوں جھوٹ بول رہا ہوگا؟",
            "ریل گاڑی دیر سے کیوں آ رہی ہوگی؟",
            "وہ کہاں جمع ہو رہے ہوں گے؟",
            "ستارے کب چمک رہے ہوں گے؟",
            "کیا مسافر گھر پہنچ رہے ہوں گے؟",
            "ہم ان کا استقبال کہاں کر رہے ہوں گے؟",
            "فوج ملک کا دفاع کیسے کر رہی ہوگی؟",
            "کیا دونوں فریق زمین کے اس ٹکڑے پر لڑ رہے ہوں گے؟",
            "کیا تم تازہ سبزی خرید رہے ہو گے؟",
            "کیا لڑکی چرخہ کات رہی ہوگی؟",
            "کتنے مزدور پل تعمیر کر رہے ہوں گے؟",
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



