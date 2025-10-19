import { redirect } from 'next/navigation';
import { PageProps } from '@/types/next';

import { FullMenu } from '@/components/FullMenu';

// TODO: import this dynamically from DB
import { restaurantData } from '@/components/RestaurantData';

export default async function Page(PageProps: PageProps) {
    const { params } = await PageProps;
    const city = (await params).city;
    const id = (await params).id;

    if (!city || !id) {
        redirect('/');
    }

    return <FullMenu restaurantData={restaurantData} />;
}
