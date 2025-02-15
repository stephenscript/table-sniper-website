import { getLinkFromToken } from '@/utils/decodingUtils';
import { redirect } from 'next/navigation';
import { PageProps } from '@/types/next';

export default async function Token(PageProps: PageProps) {
    const { params } = await PageProps;
    const token = (await params).token;

    const redirectUrl = getLinkFromToken(token);

    if (redirectUrl) {
        redirect(redirectUrl);
    } else {
        return <div>Invalid table link.</div>;
    }

    return (
        <div className="mt-24 flex w-full flex-col items-center justify-center gap-5">
            <div className="text-4xl font-bold">TableSniper</div>
            <div className="text-base">Taking you to your table...</div>
            <div
                className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
}
