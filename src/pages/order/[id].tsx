import { useRouter } from 'next/router';
import withAuth from '../../hook/withAuth';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { transactionData } from '@/constants/CONST';
import Transaction from '@/components/Transaction';

const OrderDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [order, setOrder] = useState<{ id: number} | null>(null);
  const [orderDetail, setOrderDetail] = useState({ id: "", date:"", status:"", game_name:"", game_id:"", balance:"" });

  useEffect(() => {
    if (id) {
      transactionData.map(option=>{if(option.id === id){setOrderDetail({...option})}})
      setOrder({
        id: Number(id)
      });
    }
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="p-4 mt-[64px] h-[100%] w-[100%]">
      <Link href='/orders'>
        <div className="flex f-row item-center mb-4 gap-[12px]">
          <Image src='/images/close_button.svg' alt="back" width={24} height={24}/>
          <span className="text-[17px] font-normal">#{order.id}</span>
        </div>
      </Link>
      <Transaction {...orderDetail}/>
      <ul className="flex f-row justify-between mt-[12px] mb-[8px] text-[15px] font-normal">
        <li>Your Goods:</li>
        <li><b>1 - 279,99$</b></li>
      </ul>
      <div className="flex flex-col py-[19px] bg-[#1C1C1E] text-white rounded-2xl text-[16px] font-bold leading-[12px] tracking-[3%] w-[100%] gap-[14px]">
        <ul className="flex flex-row gap-[8px] justify-center items-center">
          <li>40,500</li>
          <li className="text-[12px] text-white  py-[8px] pr-[12px] pl-[8px] bg-gray-700 blur-[13%] rounded-2xl">+1,500</li>
        </ul>
        <ul  className="flex flex-row gap-[4px] justify-center text-[14px] font-bold">
          <li>279.99$</li>
          <li className="flex text-[12px] font-bold text-gray-400 line-through">749.99$</li>
        </ul>
      </div>
    </div>
  );
};

export default withAuth(OrderDetails, 'private');
