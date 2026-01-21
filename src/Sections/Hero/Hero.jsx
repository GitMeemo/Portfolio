import { LeafyGreen } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
                <img src="/images/hero-bg.jpg" alt="HeroBG" className="w-full h-full object-cover opacity-100" />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background">
            </div>

            {/* Green Dots */}
            <div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                </div>
            </div>
        </section>
    )
}
export default Hero;