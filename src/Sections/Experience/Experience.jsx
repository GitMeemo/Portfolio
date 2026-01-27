const experience = [
    {
        period: "June 2024 - Dec 2024",
        role: "Frontend Developer",
        company: "Industrial liason Comats Abbotabad",
        description: "",
        technologies: ["Javascript, React"],
        current: false,

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
                    <span className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold
                     mt-4 mb-6 animate-fade-in animation-delay-100
                     text-secondary-foreground"
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            speaks volumes.
                        </span>
                    </h2>
                    <p
                        className="text-muted-foreground
           animate-fade-in animation-delay-200"
                    >
                        A timeline of my professional growth, from curious beginner to
                        senior engineer leading teams and building products at scale.
                    </p>
                </div>
            </div>

        </section>)
}
export default Experience;