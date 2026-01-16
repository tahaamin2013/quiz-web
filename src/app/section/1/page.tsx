const page = () => {
    const sections = [
        { id: 1, title: "Afermative sentences", url: "/section/1/1" },
        { id: 2, title: "Negative sentences", url: "/section/1/2" },
        { id: 3, title: "Interogative Sentences", url: "/section/1/3" },
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
