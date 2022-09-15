import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { trpc } from '../../utils/trpc';

export default function displayProduct() {
    const router = useRouter();
    const { data: session } = useSession();
    if (!router.query?.productId || !session?.user) {
        return <div>Loading...</div>;
    } else {
        const product = trpc.useQuery([
            'products.getByID',
            { productID: router.query.productId as string },
        ]);
    }

    return <div>productId</div>;
}
