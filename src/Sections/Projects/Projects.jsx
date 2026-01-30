import { Code2, Lightbulb, Rocket, Users, Github, ArrowUpRight } from "lucide-react";
import images from '../../Assets/images.js';
import { AnimatedBB } from "../../Components";

const projects = [
    {
        title: "Lamborghini Dealership",
        description: "A modern, fully responsive Lamborghini dealership website built with React. This project focuses on clean UI, smooth animations, and responsiveness.This project can also be used for other types of business websites.",
        image: images.Lambo,
        tags: ["React", "CSS", "Javascript"],
        github: "https://github.com/GitMeemo/Lamborghini_Dealership"
    },
    {
        title: "GPT",
        description: "GPT Early Access Website is a fully responsive front-end using Next.js and React, with a strong focus on clean code and responsive design. The project follows modern front-end standards by using reusable Components and layout-based Containers.",
        image: images.GPT,
        tags: ["React", "CSS", "Javascript", "Next.js"],
        github: "https://github.com/GitMeemo/GPT"
    },
    {
        title: "AK Games",
        description: "AK Games is a frontend-only gaming website developed using React with inline Bootstrap.This project was built to strengthen frontend development skills, particularly in React component architecture.",
        image: images.AKGames,
        tags: ["React", "Bootstrap CSS", "Javascript"],
        github: "https://github.com/GitMeemo/AK-Games"
    }
]

const Projects = () => {
    return (<section id="projects" className="py-32 relative overflow-hidden">
        {/* BG glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className='text-center mx-auto max-w-3xl mb-16'>
                <span className='text-white text-sm font-medium tracking-wider uppercase animate-fade-in'>
                    Featured Work
                </span>
                <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white'>Projects
                <span className="font-serif font-normal text-primary glow-text"> that make an impact.</span>
                </h2>
                
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Highlights of my recent work, including scalable web applications.
                </p>
            </div>
            {/* Projects Grid */}
            <div className='grid md:grid-cols-3 gap-6'>
                {projects.map((project, id) => (
                    <div key={id}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{ animationDelay: `${(id + 1) * 100}ms` }}>
                        {/* image */}
                        <div className='relative overflow-hidden aspect-video'>

                            <img src={project.image} alt={project.title} className="w-full h-full  transition-transform duration-700 group-hover:scale-110" />

                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.link}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight
                                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            {/* View All CTA */}
            {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBB>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBB>
            </div> */}
        </div>
    </section>
    )
}
export default Projects;