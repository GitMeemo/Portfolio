import { ArrowBigRightIcon, Download, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button, AnimatedBB } from "../../Components";
const skills = ["React", "Next.js", "Tailwind CSS", "Git", "GitHub Actions",
];
const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
                <img src="/images/hero-bg.jpg" alt="HeroBG" className="w-full h-full object-cover opacity-100" />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background">
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content > Left */}
                    <div className="space-y-8 ">

                        {/* Headline */}
                        <div className="space-y-4 my-8">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Developing digital
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif font-normal italic text-primary glow-text">
                                    latest technologies
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Ameenullah Kamangar — a computer science graduate specializing in
                                React, Next.js. I develop attractive, responsive websites.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            {/* <Button size="lg">
                                Contact Me <ArrowBigRightIcon className="w-5 h-5" />
                            </Button> */}
                            <AnimatedBB>
                                <a href="src/Assets/Resume/Resume.pdf" >
                                    <Download className="w-5 h-5" />
                                </a>
                                Download CV
                            </AnimatedBB>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            {[
                                { icon: Github, href: "https://github.com/GitMeemo" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ameenullah-kamangar-628584347" },
                                { icon: Instagram, href: "https://www.instagram.com/halluneema?igsh=ZHFlbmtsZWJkZnVr" },
                                { icon: Facebook, href: "https://www.facebook.com/amin.kamanger/" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-6 h-6" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Profile img > Right */}
                    <div className="relative animate-fade-in animation-delay-300">

                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative inset-0 rounded-3xl p-2 glow-border">
                                <img src="/images/Profile.png" alt="Ameenullah" className="w-full aspect-4/5 object-cover rounded-2xls" />

                                {/* Floating Badge */}
                                {/* <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Available for work
                                        </span>
                                    </div>
                                </div> */}

                                {/* Stats Badge */}
                                <div className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-1xl font-bold text-primary">1+ Year Exp</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Tech Stack</p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-32bg-linear-to-r from-background to-transparent z-10"
                        />
                        <div className="absolute right-0 top-0 bottom-0 w-32bg-linear-to-l from-background to-transparent z-10"
                        />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;