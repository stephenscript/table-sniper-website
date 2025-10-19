'use client';

import { Phone } from 'lucide-react';
import { type RestaurantData } from './RestaurantData';

interface ReservationProps {
    restaurantData: RestaurantData;
}

export const Reservations = ({ restaurantData }: ReservationProps) => {
    return (
        <section id="reservations" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
                    <div className="md:flex">
                        <div className="flex items-center bg-red-600 p-10 text-white md:w-1/2">
                            <div>
                                <h2 className="mb-6 font-serif text-3xl font-bold">
                                    Make a Reservation
                                </h2>
                                <p className="mb-8">
                                    Experience the art of {restaurantData.cuisineType} crafted by
                                    our master chefs. Book your table today.
                                </p>
                                <div className="flex items-center">
                                    <Phone className="mr-4" />
                                    <div>
                                        <p className="font-semibold">For same-day reservations</p>
                                        <p className="text-lg font-bold">
                                            {restaurantData.contact.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/2">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block font-semibold text-gray-700"
                                        htmlFor="name"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block font-semibold text-gray-700"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            className="mb-2 block font-semibold text-gray-700"
                                            htmlFor="date"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="mb-2 block font-semibold text-gray-700"
                                            htmlFor="time"
                                        >
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            id="time"
                                            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="mb-2 block font-semibold text-gray-700"
                                        htmlFor="guests"
                                    >
                                        Number of Guests
                                    </label>
                                    <select
                                        id="guests"
                                        className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    >
                                        <option>1 person</option>
                                        <option>2 people</option>
                                        <option>3 people</option>
                                        <option>4 people</option>
                                        <option>5+ people</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="hover:bg-gray-800cursor-pointer w-full cursor-pointer rounded-lg bg-black px-4 py-3 font-bold 
                                    hover:bg-neutral-800 text-white transition duration-300"
                                >
                                    RESERVE NOW
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
