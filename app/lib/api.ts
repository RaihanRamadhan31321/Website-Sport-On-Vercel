import { error } from "console";

export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        cache: options?.cache || "no-store", //data no-store dijalankan secara real-time
    })

    if (!res.ok) {
        let errorMessege = 'Failed to fetch data from ${endpoint}';
        try{
            const errorData = await res.json();
            errorMessege = errorData.messege || errorData.error || errorMessege;
        } catch (e) {
            console.log(e);
        }

        throw new Error(errorMessege);
    }

    return res.json();
}

export function getImageUrl(path: string) {
    if (path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}