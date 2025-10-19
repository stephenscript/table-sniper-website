'use client';

import { type RestaurantData } from './RestaurantData';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

interface FooterProps {
    restaurantData: RestaurantData;
}

export const Footer = ({ restaurantData }: FooterProps) => {
    return (
        <footer className="bg-black py-16 text-white">
            <div className="container mx-auto px-6">
                <div className="grid gap-10 md:grid-cols-4">
                    <div>
                        <h3 className="mb-6 font-serif text-xl font-bold">
                            {restaurantData.name.toUpperCase()}
                        </h3>
                        <p className="mb-6">
                            Elevating {restaurantData.cuisineType} to an art form since{' '}
                            {restaurantData.story.founded}.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={restaurantData.social.instagram}
                                className="transition hover:text-red-500"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href={restaurantData.social.facebook}
                                className="transition hover:text-red-500"
                            >
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a
                                href={restaurantData.social.twitter}
                                className="transition hover:text-red-500"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-6 text-lg font-semibold">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="transition hover:text-red-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#menu" className="transition hover:text-red-500">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="transition hover:text-red-500">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#locations" className="transition hover:text-red-500">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a href="#reservations" className="transition hover:text-red-500">
                                    Reservations
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-lg font-semibold">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Mail className="mr-3 h-5 w-5" />
                                <span>{restaurantData.contact.email}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 h-5 w-5" />
                                <span>{restaurantData.contact.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="mr-3 h-5 w-5" />
                                <span>{restaurantData.locations[0].address}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-lg font-semibold">Newsletter</h4>
                        <p className="mb-4">
                            Subscribe to our newsletter for updates and special offers.
                        </p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-l-lg px-4 py-2 text-black focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-r-lg bg-red-600 px-4 py-2 text-white transition cursor-pointer hover:bg-red-700"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} {restaurantData.name}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
