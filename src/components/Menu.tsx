'use client';

import { type RestaurantData } from './RestaurantData';
import { useState } from 'react';

interface MenuProps {
    restaurantData: RestaurantData;
}

export const Menu = ({ restaurantData }: MenuProps) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? restaurantData.menuItems
            : restaurantData.menuItems.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-4xl font-bold">Our Menu</h2>
                    <div className="mx-auto h-1 w-24 bg-red-600" />
                </div>

                <div className="mb-12 flex flex-wrap justify-center">
                    {restaurantData.menuCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`mx-2 mb-2 cursor-pointer rounded-full px-6 py-2 font-semibold transition ${
                                activeCategory === category
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 hover:bg-red-600 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-lg bg-white shadow-lg"
                        >
                            <div className="relative h-64">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                                <div className="bg-opacity-70 absolute inset-0 flex items-center justify-center bg-black opacity-0 transition duration-300 group-hover:opacity-100">
                                    <div className="p-4 text-center text-white">
                                        <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                                        <p className="mb-4">{item.description}</p>
                                        <span className="text-lg font-bold text-red-400">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                                <p className="mb-4 text-gray-600">{item.description}</p>
                                <span className="font-bold text-red-600">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={`${restaurantData.slug}/menu`}
                        target='_blank'
                        className="inline-block rounded-full border-2 border-black px-8 py-3 font-bold transition duration-300 hover:bg-black hover:text-white"
                    >
                        VIEW FULL MENU
                    </a>
                </div>
            </div>
        </section>
    );
};
