import React, { SetStateAction, useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

import { trpc } from '../utils/trpc';

export default function exp() {
    const [myImage, setMyImagge] = useState('');
    const newDta = trpc.useMutation('seller.addProduct');
    const { data: session } = useSession();
    console.log(session, 'session');
    console.log(myImage, 'image');

    if (!session?.user?.email) {
        return <div>EnterData</div>;
    }

    // const data = trpc.useQuery([
    //     'seller.getData',
    //     {
    //         email: session.user.email,
    //     },
    // ]);
    async function uploadProduct() {
        if (newDta && session?.user?.email) {
            await newDta.mutate({
                name: 'falana',
                size: 'input.size',
                image: myImage,
                stock: 'input.stock',
                price: 'someprice',
                description: 'input.description',
                email: session.user.email,
            });
            console.log('success');
        }
    }

    function setFileToBase(file: any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setMyImagge(reader.result as SetStateAction<string>);
        };
    }

    return (
        <div>
            {/* {data.data?.name} */}
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        uploadProduct();
                    }}
                >
                    <input
                        type="file"
                        accept="images"
                        onChange={(e) => {
                            const target = e.target as HTMLInputElement;

                            const file = target.files?.[0];
                            setFileToBase(file);
                            console.log(file, 'insub');
                        }}
                    />
                    <input type="submit" value="sub" />
                </form>

                <button
                // onClick={async (e) => {
                //     uploadProduct().then((data) =>
                //         console.log(';succesfull'),
                //     );
                // }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
