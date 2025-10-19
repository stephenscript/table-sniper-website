import { ArrowRight } from 'lucide-react';
import { type RestaurantData } from './RestaurantData';

interface AboutProps {
    restaurantData: RestaurantData;
}

export const About = ({ restaurantData }: AboutProps) => {
    const images = [1, 2, 3, 4].map((i) => `http://static.photos/food/640x360/${i}`);

    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="mb-10 md:mb-0 md:w-1/2 md:pr-10">
                        <h2 className="mb-6 font-serif text-4xl font-bold">Our Story</h2>
                        <p className="mb-6 text-lg">{restaurantData.story.description}</p>
                        <p className="mb-8 text-lg">{restaurantData.story.mission}</p>
                        <a
                            href="#"
                            className="flex items-center font-semibold text-red-600 transition hover:text-red-800"
                        >
                            Read More <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((img, idx) => (
                                <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={img}
                                        alt={`Restaurant ${idx + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Menu Section Component
