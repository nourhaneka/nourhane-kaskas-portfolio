'use client';

import { useState } from 'react';
import BurgerButton from './BurgerButton';
import MenuOverlay from './MenuOverlay';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BurgerButton
                isOpen={isOpen}
                onToggle={() => setIsOpen(prev => !prev)}
            />

            <MenuOverlay
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
