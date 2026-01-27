const experiences = [
    {
        period: "June 2024 — Dec 2024",
        role: "Frontend Developer",
        company: "Industrial liason Comats Abbotabad",
        description: "Contributed to the development of web and mobile applications to enhance operational efficiency and public service delivery.",
        technologies: ["Javascript", "React"],
        current: false,

    },
    {
        period: "Sep 2025 — Present",
        role: "Freelance Video Editor",
        company: "Self-employed",
        description: "I specialize in YouTube videos and Instagram Shorts. I create engaging, high-quality edits with clean cuts, smooth transitions, subtitles, color grading, and effects.",
        technologies: ["Adobe Premiere Pro", "Adobe After Effects"],
        current: true,
    }
]

const Experience = () => {
    return (
        <section id="experience"
            className="py=32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96
            h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3l mb-16">

                    <span className="text-white text-default font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey</span>

                    <h2 className="text-4xl md:text-5xl font-bold
                     mt-4 mb-6 animate-fade-in animation-delay-100
                     text-secondary-foreground glow-text" >
                        Experience </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my growth, from curious beginner to
                        experinced web developer and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative ">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience */}
                    <div className="space-y-12">
                        {experiences.map((exp, id) => (
                            <div
                                key={id}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(id + 1) * 150}ms` }}>

                                {/* Timeline Dot*/}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${id % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>

                                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/70 trans-all duration-500">

                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground">{exp.description}</p>

                                        <div className={`flex flex-wrap gap-2 mt-4 ${id % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techId) => (
                                                <span key={techId}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground  hover:border-primary/50 hover:text-primary transition-all duration-300"
                                                >{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>)
}
export default Experience;