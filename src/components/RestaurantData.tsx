export type RestaurantData = {
    name: string;
    logo: string;
    heroImage: string;
    tagline: string;
    cuisineType: string;
    story: {
        founded: string;
        description: string;
        mission: string;
    };
    menuCategories: string[];
    menuItems: Array<{
        id: number;
        name: string;
        description: string;
        price: string;
        category: string;
        image: string;
    }>;
    locations: Array<{
        id: number;
        city: string;
        address: string;
        hours: string;
        image: string;
    }>;
    contact: {
        phone: string;
        email: string;
    };
    social: {
        instagram: string;
        facebook: string;
        twitter: string;
    };
};

export const restaurantData: RestaurantData = {
    name: 'New Pho Saigon Noodle & Grill Restaurant',
    logo: 'http://static.photos/food/320x240/1',
    heroImage: 'http://static.photos/restaurant/1200x630/1',
    tagline: 'We serve the freshest Rice Noodle Soup daily',
    cuisineType: 'Vietnamese & Chinese Cuisine',
    story: {
        founded: '2016',
        description:
            'Established in April 2016, New Pho Saigon Noodle & Grill Restaurant brings authentic Chinese-Vietnamese cuisine to Milpitas. Our commitment to freshness and quality has made us a beloved local favorite, serving delicious pho and traditional dishes in a welcoming atmosphere.',
        mission:
            'We pride ourselves on serving the finest Chinese-Vietnamese cuisine with fresh ingredients daily. Our soup is cooked for 12 hours to achieve a rich, flavorful body that sets us apart. We believe in sustainability, using reusable tableware and providing excellent service to create an unforgettable dining experience.',
    },
    menuCategories: [
        'All',
        'Pho (Noodle Soup)',
        'Bun (Vermicelli Bowls)',
        'Com Dia (Rice Plates)',
        'Mi Xao (Chow Mein)',
        'Garlic Noodles',
        'Appetizers',
        'Banh Bot Chien (Flour Cakes)',
        'Desserts',
        'Beverages',
    ],

    menuItems: [
        // Pho (Noodle Soup)
        {
            id: 1,
            name: 'Pho Dac Biet (Special Combination)',
            description:
                'Rice noodle soup with rare steak, well-done brisket, tendon, tripe, and meatballs in our signature 12-hour broth',
            price: '$13.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=640&h=360&fit=crop',
        },
        {
            id: 2,
            name: 'Pho Tai (Rare Steak)',
            description: 'Traditional Vietnamese beef noodle soup with tender rare beef slices',
            price: '$12.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=640&h=360&fit=crop',
        },
        {
            id: 3,
            name: 'Pho Chin (Well-Done Brisket)',
            description: 'Slow-cooked beef brisket in rich broth served over rice noodles',
            price: '$12.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=640&h=360&fit=crop',
        },
        {
            id: 4,
            name: 'Pho Ga (Chicken)',
            description: 'Light and flavorful chicken noodle soup with tender chicken meat',
            price: '$12.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=640&h=360&fit=crop',
        },
        {
            id: 5,
            name: 'Bun Bo Hue',
            description:
                'Spicy beef and pork noodle soup with lemongrass, generous meat portions and robust flavors',
            price: '$13.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=640&h=360&fit=crop',
        },
        {
            id: 6,
            name: 'Hu Tieu Mi Dac Biet (Seafood Noodle Soup)',
            description: 'Combination seafood noodle soup with shrimp, squid, fish balls, and pork',
            price: '$14.95',
            category: 'Pho (Noodle Soup)',
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=640&h=360&fit=crop',
        },

        // Bun (Vermicelli Bowls)
        {
            id: 7,
            name: 'Bun Thit Nuong Cha Gio (Vermicelli with Grilled Pork & Eggrolls)',
            description:
                'Perfectly marinated grilled pork with crispy eggrolls over vermicelli noodles, fresh vegetables and fish sauce',
            price: '$13.95',
            category: 'Bun (Vermicelli Bowls)',
            image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=640&h=360&fit=crop',
        },
        {
            id: 8,
            name: 'Bun Thit Nuong (Grilled Pork Vermicelli)',
            description:
                'Grilled marinated pork over cold vermicelli with fresh herbs and vegetables',
            price: '$12.95',
            category: 'Bun (Vermicelli Bowls)',
            image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=640&h=360&fit=crop',
        },
        {
            id: 9,
            name: 'Bun Bo Nuong (Grilled Beef Vermicelli)',
            description: 'Tender grilled beef over vermicelli with fresh vegetables and peanuts',
            price: '$13.95',
            category: 'Bun (Vermicelli Bowls)',
            image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=640&h=360&fit=crop',
        },

        // Com Dia (Rice Plates)
        {
            id: 10,
            name: 'Com Suon Nuong (Grilled Pork Chop Over Rice)',
            description:
                'Tender grilled pork chop served over jasmine rice with cucumber, tomato, and fish sauce',
            price: '$12.95',
            category: 'Com Dia (Rice Plates)',
            image: 'https://images.unsplash.com/photo-1603073163308-9c4f67e10c19?w=640&h=360&fit=crop',
        },
        {
            id: 11,
            name: 'Com Ga Nuong (Grilled Chicken Over Rice)',
            description: 'Marinated grilled chicken breast over jasmine rice with vegetables',
            price: '$12.95',
            category: 'Com Dia (Rice Plates)',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=640&h=360&fit=crop',
        },
        {
            id: 12,
            name: 'Com Bo Luc Lac (Shaking Beef)',
            description: 'Wok-tossed cubed beef with onions and peppers over rice',
            price: '$15.95',
            category: 'Com Dia (Rice Plates)',
            image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=640&h=360&fit=crop',
        },
        {
            id: 13,
            name: 'Korean Grilled Beef Rice Plate',
            description: 'Korean-style marinated beef grilled to perfection over jasmine rice',
            price: '$14.95',
            category: 'Com Dia (Rice Plates)',
            image: 'https://images.unsplash.com/photo-1635339142043-70d99a993e5f?w=640&h=360&fit=crop',
        },

        // Mi Xao (Chow Mein)
        {
            id: 14,
            name: 'Mi Xao Gion (Crispy Egg Noodles)',
            description:
                'Crispy fried egg noodles topped with stir-fried vegetables and your choice of protein',
            price: '$13.95',
            category: 'Mi Xao (Chow Mein)',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=640&h=360&fit=crop',
        },
        {
            id: 15,
            name: 'Mi Xao Mem (Soft Egg Noodles)',
            description: 'Stir-fried soft egg noodles with vegetables and protein',
            price: '$13.95',
            category: 'Mi Xao (Chow Mein)',
            image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=640&h=360&fit=crop',
        },
        {
            id: 16,
            name: 'Hu Tieu Xao (Chow Fun)',
            description: 'Wide rice noodles stir-fried with vegetables and your choice of protein',
            price: '$13.95',
            category: 'Mi Xao (Chow Mein)',
            image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=640&h=360&fit=crop',
        },

        // Garlic Noodles
        {
            id: 17,
            name: 'Grilled Lobster Tail with Garlic Noodles',
            description:
                'Succulent grilled lobster tail served over aromatic garlic butter noodles',
            price: '$26.95',
            category: 'Garlic Noodles',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=640&h=360&fit=crop',
        },
        {
            id: 18,
            name: 'Grilled Shrimp with Garlic Noodles',
            description: 'Perfectly grilled shrimp over savory garlic butter noodles',
            price: '$21.95',
            category: 'Garlic Noodles',
            image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=640&h=360&fit=crop',
        },
        {
            id: 19,
            name: 'Grilled Pork with Garlic Noodles',
            description: 'Marinated grilled pork served over fragrant garlic noodles',
            price: '$21.95',
            category: 'Garlic Noodles',
            image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=640&h=360&fit=crop',
        },
        {
            id: 20,
            name: 'Grilled New York Steak with Garlic Noodles',
            description: 'Premium NY steak grilled to your liking over garlic butter noodles',
            price: '$25.95',
            category: 'Garlic Noodles',
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=640&h=360&fit=crop',
        },

        // Appetizers
        {
            id: 21,
            name: 'Cha Gio (Vietnamese Egg Rolls)',
            description:
                'Crispy eggrolls filled with pork, vegetables, and vermicelli, served with fresh lettuce and herbs',
            price: '$8.95',
            category: 'Appetizers',
            image: 'https://images.unsplash.com/photo-1593252719532-53f183016149?w=640&h=360&fit=crop',
        },
        {
            id: 22,
            name: 'Goi Cuon (Spring Rolls)',
            description:
                'Fresh spring rolls with shrimp, pork, vegetables, and vermicelli wrapped in rice paper',
            price: '$7.95',
            category: 'Appetizers',
            image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=640&h=360&fit=crop',
        },
        {
            id: 23,
            name: 'Canh Ga Chien (Fried Chicken Wings)',
            description: 'Crispy Vietnamese-style fried chicken wings',
            price: '$9.95',
            category: 'Appetizers',
            image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=640&h=360&fit=crop',
        },
        {
            id: 24,
            name: 'Chao Tom (Grilled Shrimp Paste on Sugarcane)',
            description: 'Savory shrimp paste grilled on sugarcane, a Vietnamese delicacy',
            price: '$10.95',
            category: 'Appetizers',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=640&h=360&fit=crop',
        },

        // Banh Bot Chien (Flour Cakes)
        {
            id: 25,
            name: 'Banh Bot Chien (Taro Flour Cake)',
            description:
                'Traditional Vietnamese taro and rice flour cake, pan-fried to crispy perfection with eggs',
            price: '$9.95',
            category: 'Banh Bot Chien (Flour Cakes)',
            image: 'https://images.unsplash.com/photo-1626776876729-bab4fe9267e6?w=640&h=360&fit=crop',
        },
        {
            id: 26,
            name: 'Banh Khoai Mi (Fried Daikon Cake with Egg)',
            description: 'Pan-fried daikon radish cake with eggs, crispy and savory',
            price: '$9.95',
            category: 'Banh Bot Chien (Flour Cakes)',
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=640&h=360&fit=crop',
        },

        // Desserts
        {
            id: 27,
            name: 'Che Ba Mau (Three Color Dessert)',
            description:
                'Traditional Vietnamese layered dessert with beans, coconut milk, and shaved ice',
            price: '$6.95',
            category: 'Desserts',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=640&h=360&fit=crop',
        },
        {
            id: 28,
            name: 'Che Dau Xanh (Mung Bean Dessert)',
            description: 'Sweet mung bean dessert with coconut milk',
            price: '$5.95',
            category: 'Desserts',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=640&h=360&fit=crop',
        },

        // Beverages
        {
            id: 29,
            name: 'Ca Phe Sua Da (Vietnamese Iced Coffee)',
            description: 'Strong Vietnamese coffee with sweetened condensed milk over ice',
            price: '$5.95',
            category: 'Beverages',
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=640&h=360&fit=crop',
        },
        {
            id: 30,
            name: 'Tra Thai (Thai Iced Tea)',
            description: 'Creamy sweet Thai tea over ice',
            price: '$5.95',
            category: 'Beverages',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=640&h=360&fit=crop',
        },
        {
            id: 31,
            name: 'Sinh To (Fresh Fruit Smoothie)',
            description:
                'Fresh fruit smoothie with your choice of mango, avocado, strawberry, or soursop',
            price: '$6.95',
            category: 'Beverages',
            image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=640&h=360&fit=crop',
        },
        {
            id: 32,
            name: 'Nuoc Dua (Young Coconut Juice)',
            description: 'Fresh young coconut juice served in the coconut',
            price: '$5.95',
            category: 'Beverages',
            image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=640&h=360&fit=crop',
        },
    ],
    locations: [
        {
            id: 1,
            city: 'Milpitas',
            address: '1770 Clear Lake Ave, Milpitas, CA 95035',
            hours: 'Mon-Sun 11:00am - 11:00pm',
            image: 'http://static.photos/cityscape/640x360/1',
        },
    ],
    contact: {
        phone: '(408) 262-1688',
        email: 'info@newphosaigon.com',
    },
    social: {
        instagram: '#',
        facebook: 'https://www.facebook.com/NewPhoSaigonMilpitas/',
        twitter: '#',
    },
};
