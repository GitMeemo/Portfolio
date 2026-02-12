import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center ">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-white text-sm font-medium tracking-wider uppercase animate-fade-in">About me</span>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-white">
                    Developing the future,
                    <br />
                    <span className="font-serif italic font-normal text-primary glow-text">one component at a time.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-100 ">
                    <p>
                        I’m a COMSATS University graduate with over 1 year of hands-on experience in frontend development,
                        crafting digital products that make a difference.
                        My journey started with a curiosity about how things work on the web,
                        and it has evolved into deep expertise in modern frontend technologies.
                    </p>
                    <br />
                    <p>
                        I specialize in React, Next.js, building
                        everything from sleek landing pages.
                        My approach combines technical excellence with a
                        keen eye for design and user experience.
                    </p>
                    <br />
                    <p>
                        I’m passionate about continuous learning, improving user experiences,
                        and turning ideas into polished digital products. Always open to opportunities
                        where I can grow, collaborate, and create impactful web solutions.
                    </p>

                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to create digital experiences that are not just
                        functional, but truly delightful — products that users love to
                        use and developers love to maintain."
                    </p>
                </div>
            </div>

            {/* Right Column - Hilights */}
            <div className="grid sm:grid-cols-3 gap-6 py-10 ">

                {highlights.map((item, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in border border-primary/30 hover:border-primary/70 trans-all duration-500"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>

                        <p className="text-sm text-muted-foreground ">
                            {item.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    </section >
}
export default About;