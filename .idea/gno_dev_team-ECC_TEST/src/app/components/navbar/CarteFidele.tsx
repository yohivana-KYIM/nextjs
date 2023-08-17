import Link from 'next/link';
import React from 'react'

type Props = {
    data: {
      id: number;
      name: string;
      surname: string
      email: string;
      city: string;
      country: string;
      sex: string;
      ministry: string;
    };
  }

function CarteFidele({data}: Props){
  return (

    <Link href={`/account/${data.id}`}>
      <div className="flex flex-col items-center justify-start p-2 rounded-lg w-auto h-auto bg-white shadow">
        <div className="bg-slate-300 rounded-full w-[140px] h-[140px] shadow-sm"></div>
        <p className="pt-4 font-semibold text-black text-lg">{data.surname} {data.name}</p>
        <p className="pt-1 text-blue-600 text-grey-700">{data.email}</p>
        <p className="pt-1 font-light text-black">{data.city}, {data.country}</p>
        <p className="pt-1 font-light text-black">{data.sex}</p>
        <p className="pt-1 font-light text-black">{data.ministry}</p>
      </div>
    </Link>
  );
};

export default CarteFidele