import { type RestaurantData } from './RestaurantData';

interface GalleryProps {
    restaurantData: RestaurantData;
}

export const Gallery = ({ restaurantData }: GalleryProps) => {
    console.log(restaurantData);
    
    return (
        <section
            id="gallery"
            className="relative py-32"
            style={{
                backgroundImage: `url('http://static.photos/restaurant/1200x630/1')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="bg-opacity-50 absolute inset-0 bg-black" />
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <h2
                    className="mb-6 font-serif text-4xl font-bold"
                    style={{
                        textShadow:
                            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    }}
                >
                    Experience Our Atmosphere
                </h2>
                <p
                    className="mx-auto mb-10 max-w-2xl text-xl"
                    style={{
                        textShadow:
                            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    }}
                >
                    A feast for both your palate and your eyes
                </p>
                <a
                    href="#"
                    className="inline-block transform rounded-full bg-red-600 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-red-700"
                >
                    VIEW GALLERY
                </a>
            </div>
        </section>
    );
};
