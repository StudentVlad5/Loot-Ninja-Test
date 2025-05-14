import Link from 'next/link';
import withAuth from '../hook/withAuth';
import {transactionData} from '../constants/CONST'
import Image from "next/image";
import React, { lazy } from "react";
const Transaction = lazy(() => import("@/components/Transaction"));

const Orders = () => {
  return (
    <div className="p-4 mt-[64px] h-[100%] w-[100%]">
      <Link href='/'>
        <div className="flex f-row item-center mb-4 gap-[12px]">
          <Image src='/images/vector.svg' alt="back" width={9.2} height={16.6}/>
          <span className="text-2xl">Orders</span>
        </div>
      </Link>
      <ul className="space-y-3">
        {transactionData.map((transaction) => (
         <Transaction key={transaction.id} {...transaction}/>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Orders, 'private');
