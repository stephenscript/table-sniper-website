'use client';

import { type RestaurantData } from './RestaurantData';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
    restaurantData: RestaurantData;
}

export const Navigation = ({ restaurantData }: NavigationProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed z-50 w-full bg-black text-white transition-all duration-300 ${scrolled ? 'bg-opacity-95 shadow-lg' : 'bg-opacity-90'}`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xl font-bold">
                        <img
                            src={restaurantData.logo}
                            alt={`${restaurantData.name} Logo`}
                            className="h-12"
                        />
                        {restaurantData.name}
                    </div>
                    <div className="hidden space-x-8 md:flex">
                        <a href="#" className="transition hover:text-yellow-300">
                            Home
                        </a>
                        <a href="#menu" className="transition hover:text-yellow-300">
                            Menu
                        </a>
                        <a href="#gallery" className="transition hover:text-yellow-300">
                            Gallery
                        </a>
                        <a href="#locations" className="transition hover:text-yellow-300">
                            Locations
                        </a>
                        <a href="#reservations" className="transition hover:text-yellow-300">
                            Reservations
                        </a>
                    </div>
                    <button className="cursor-pointer focus:outline-none md:hidden">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
};
