import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50";
  const variants = {
    primary:
      "bg-accent text-primary hover:bg-accent-secondary shadow-lg shadow-accent/20",
    secondary:
      "border border-border bg-surface text-text hover:bg-surface-light",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(base, variants[variant], className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </motion.button>
  );
};

export default Button;
