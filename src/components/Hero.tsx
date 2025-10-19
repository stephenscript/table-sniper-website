'use client';

import { type RestaurantData } from './RestaurantData';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
    restaurantData: RestaurantData;
}

export const Hero = ({ restaurantData }: HeroProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section
            id="hero"
            className="relative flex h-screen min-h-[700px] items-center justify-center"
        >
            {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
            )}
            <img
                src={restaurantData.heroImage}
                alt={restaurantData.name}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
            />
            <div className="bg-opacity-40 absolute inset-0 bg-black" />
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <img
                    src={restaurantData.logo}
                    alt={`${restaurantData.name} Logo`}
                    className="mx-auto mb-6 h-24 md:h-32"
                />
                <h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl">
                    {restaurantData.name}
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-xl md:text-2xl">
                    {restaurantData.tagline}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="#reservations"
                        className="transform rounded-full bg-red-600 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-red-700"
                    >
                        RESERVE NOW
                    </a>
                    <a
                        href="#menu"
                        className="transform rounded-full border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:border-red-600 hover:bg-red-600"
                    >
                        VIEW MENU
                    </a>
                </div>
            </div>
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce"
            >
                <ChevronDown className="h-10 w-10 text-white" />
            </a>
        </section>
    );
};
