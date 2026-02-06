'use client';

import { motion } from 'framer-motion';

type BurgerButtonProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function BurgerButton({
    isOpen,
    onToggle,
}: BurgerButtonProps) {
    return (
        <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={onToggle}
            className={`burger-button ${isOpen ? "open" : ""}`}
        >
            <motion.span
                className="burger-line line-top"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />

            <motion.span
                className="burger-line line-middle"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
            />

            <motion.span
                className="burger-line line-bottom"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
        </button>
    );
}
