import { RestaurantData } from './RestaurantData';
import { Hero } from './Hero';
import { About } from './About';
import { Menu } from './Menu';
import { Gallery } from './Gallery';
import { Locations } from './Locations';
import { Reservations } from './Reservations';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface RestaurantHomeProps {
    restaurantData: RestaurantData;
}

export const RestaurantHome = ({ restaurantData }: RestaurantHomeProps) => {
    return (
        <div className="bg-gray-100 font-sans text-gray-800">
            <Navigation restaurantData={restaurantData} />
            <Hero restaurantData={restaurantData} />
            <About restaurantData={restaurantData} />
            <Menu restaurantData={restaurantData} />
            <Gallery restaurantData={restaurantData} />
            <Locations restaurantData={restaurantData} />
            <Reservations restaurantData={restaurantData} />
            <Footer restaurantData={restaurantData} />
        </div>
    );
};
