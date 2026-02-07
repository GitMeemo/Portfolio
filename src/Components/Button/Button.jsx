
const Button = ({ className, size = "default", children, href, ...props }) => {

    const baseClasses = "inline-block relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 texr-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    
    if (href) {
        return (
            <a href={href} className={classes}>
                <span className="relative flex items-center justify-center gap-2">
                    {children}</span>
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}</span>
        </button>
    )
}
export default Button;