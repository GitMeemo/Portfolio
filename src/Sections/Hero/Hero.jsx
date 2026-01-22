import { ArrowBigRightIcon, Download, Github, Linkedin } from "lucide-react";
import { Button, AnimatedBB } from "../../Components";
const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
                <img src="/images/hero-bg.jpg" alt="HeroBG" className="w-full h-full object-cover opacity-100" />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background">
            </div>

            {/* Blue Dots */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#00a6ff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}>
                    </div>
                ))}
            </div> */}
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content > Left */}
                    <div className="space-y-8">

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Developing digital
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif font-normal text-primary glow-text">
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
                            <Button size="lg">
                                Contact Me <ArrowBigRightIcon className="w-5 h-5" />
                            </Button>
                            <AnimatedBB>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBB>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            {[
                                { icon: Github, href: "https://github.com/GitMeemo" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ameenullah-kamangar-628584347" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Profile img > Right */}
                </div>
            </div>
        </section>
    )
}
export default Hero;