import { type RestaurantData } from './RestaurantData';
import { ArrowRight } from 'lucide-react';

interface LocationsProps {
    restaurantData: RestaurantData;
}

export const Locations = ({ restaurantData }: LocationsProps) => {
    return (
        <section id="locations" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-4xl font-bold">Our Locations</h2>
                    <div className="mx-auto h-1 w-24 bg-red-600" />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {restaurantData.locations.map((location) => (
                        <div
                            key={location.id}
                            className="overflow-hidden rounded-lg bg-gray-100 shadow-lg transition hover:scale-105"
                        >
                            <div className="h-48">
                                <img
                                    src={location.image}
                                    alt={location.city}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold">{location.city}</h3>
                                <p className="mb-4 text-gray-600">{location.address}</p>
                                <p className="mb-4">
                                    <span className="font-semibold">Hours:</span> {location.hours}
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/NMCvzoQdGYiF22z47"
                                    target="_blank"
                                    className="flex items-center font-semibold text-red-600 transition hover:text-red-800"
                                >
                                    More Info <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
