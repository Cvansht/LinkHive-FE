import { forwardRef } from "react";
import { motion } from "framer-motion";

interface InputProps {
  placeholder: string;
  reference?: React.RefObject<HTMLInputElement>;
  className?: string;
}

export const InputUsername = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, reference, className = "", ...props }, ref) => {
    return (
      <motion.input
        ref={reference || ref}
        type="text"
        placeholder={placeholder}
        className={`w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-white/30 ${className}`}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />
    );
  }
);

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, reference, className = "", ...props }, ref) => {
    return (
      <motion.input
        ref={reference || ref}
        type="password"
        placeholder={placeholder}
        className={`w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:border-white/30 ${className}`}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />
    );
  }
);

InputUsername.displayName = "InputUsername";
InputPassword.displayName = "InputPassword";