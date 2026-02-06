'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type MenuOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
};

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Hire ME', href: '/contact' },
];

const overlayVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
        },
    },
};


const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1] as const, // ✅ REQUIRED
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1] as const, // ✅ REQUIRED
        },
    },
};
export default function MenuOverlay({
    isOpen,
    onClose,
}: MenuOverlayProps) {
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        if (isOpen) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Lock body scroll
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    className="menu-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ul className="menu-list">
                        {menuItems.map(item => (
                            <motion.li
                                key={item.href}
                                variants={itemVariants}
                                className="menu-item"
                            >
                                <Link href={item.href} onClick={onClose}>
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
