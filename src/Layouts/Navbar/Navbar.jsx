import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";
import { Button, } from "../../Components";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]
const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500
            ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
        >
            <nav className="container mx-auto px-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary" >
                    AK<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-primary-foregroundforeground hover:text-primary rounded-full hover:bg-background">
                                {link.label}</a>))}
                    </div>
                    {/* <div  >
                        <a className="hover:text-primary" href="#about">About</a>
                        <a className="hover:text-primary" href="#projects">Projects</a>
                        <a className="hover:text-primary" href="#experience">Experience</a>
                        <a className="hover:text-primary" href="#testimonials">Testimonials</a>
                        <a className="hover:text-primary" href="#contact">Contact</a>
                    </div> */}
                </div>

                <div className="hidden md:block">
                    <Button size="sm">Contact me</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong  animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}</a>))}

                        <Button size="default">Contact me</Button>

                    </div>
                </div>
            )}
        </header >
    )
}

export default Navbar;