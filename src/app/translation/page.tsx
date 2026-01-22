const page = () => {
    const sections = [
        { id: 1, title: "Present Simple Tense Active Vice", url: "/section/1" },
        { id: 2, title: "Present Continuous Tense", url: "/section/2" },
        { id: 3, title: "Present Perfect Tense Active Vice", url: "/section/3" },
        { id: 4, title: "Present Perfect Continuous Tense Active Vice", url: "/section/4" },
        { id: 5, title: "Past Simple Tense Active Vice", url: "/section/5" },
        { id: 6, title: "Past Continuous Tense Active Vice", url: "/section/6" },
        { id: 7, title: "Past Perfect Tense Active Vice", url: "/section/7" },
        { id: 8, title: "Past Perfect Continuous Tense Active Vice", url: "/section/8" },
        { id: 9, title: "Future Simple Tense Active Vice", url: "/section/9" },
        { id: 10, title: "Future Continuous Tense Active Vice", url: "/section/10" },
        { id: 11, title: "Future Perfect Tense Active Vice", url: "/section/11" },
        { id: 12, title: "Future Perfect Continuous Tense Active Vice", url: "/section/12" },
        { id: 14, title: "Use of Introductary it,and,there", url: "/section/14" },
        { id: 15, title: "Use of is/am/are and was/were", url: "/section/15" },
        { id: 16, title: "Use of has and have", url: "/section/16" },
        { id: 17, title: "Use of had", url: "/section/17" },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-6">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={section.url}
                    className="p-6 bg-white text-black rounded-lg hover:bg-white font-bold border-2 cursor-pointer"
                >
                    {section.title}
                </a>
            ))}
        </div>
    );
};

export default page;
