const Button = ({ className = "", size = "default", children, ...props }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    // mobile-first: smaller on mobile, scale up on md+
    sm: "px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-sm",
    default: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
