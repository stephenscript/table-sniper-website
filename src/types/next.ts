export interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
