const page = () => {
    const sections = [
        { id: 1, title: "Sentences", url: "/excersices/sections/1" },
        { id: 2, title: "Separate the Subject and the Predicate", url: "/excersices/sections/2" },
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
