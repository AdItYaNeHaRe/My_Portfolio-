import clsx from "clsx";
import { motion } from "framer-motion";

const Card = ({ children, className = "", glow = false }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className={clsx(
        "rounded-[1.5rem] border border-border/70 bg-surface/80 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur",
        glow && "shadow-[0_0_35px_rgba(0,217,255,0.16)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
