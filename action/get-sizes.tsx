import { Size } from "@/types"

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const revalidate = 1;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getSizes;