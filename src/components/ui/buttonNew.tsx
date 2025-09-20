import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const SignIn = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Sign In", className = "", onClick, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        className={`relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-1px] ${className}`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.25)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    );
  }
);

SignIn.displayName = "SignIn";