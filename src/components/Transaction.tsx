import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useProject } from "@/context/ProjectContext";
import { currencies } from "@/constants/CONST";
import gsap from "gsap";
import { fetchTransactionData } from "@/api/transactionService"; 

type TransactionProps = {
  id: string;
  date: string;
  status: string;
  game_name: string;
  game_id: string;
  balance: string;
};

const Transaction: React.FC<TransactionProps> = ({ id, date, status, game_name, game_id, balance }) => {
  const { currency } = useProject();
  const transactionRef = React.useRef<HTMLDivElement>(null);
  const [transaction, setTransaction] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch transaction data (simulate backend request)
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchTransactionData();
        setTransaction(data);
      } catch (err: any) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  useEffect(() => {
    if (transactionRef.current) {
      gsap.from(transactionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [transaction]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div ref={transactionRef} className="flex flex-col px-[16px] py-[12px] bg-[#1C1C1E] text-white rounded-2xl p-4 space-y-6 text-[12px] font-normal leading-[12px] tracking-[3%] w-[100%]">
      <div key={id} className="flex flex-col">
        <div className="flex justify-between gap-[2px]">
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Transaction ID:</p>{" "}
            <Link href={`/order/${id}`}>
              <p className="underline-2"># {id}</p>
            </Link>
          </div>
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Date:</p>
            <p>{date}</p>
          </div>
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Status:</p>
            <p className="flex flex-nowrap gap-[4px]">
              <span
                className={`flex w-[12px] h-[12px] rounded-full ${
                  status == "Success"
                    ? "bg-green-500"
                    : status == "Unsuccess"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              ></span>
              {status}
            </p>
          </div>
        </div>
        <div className="border-t border-white opacity-10 mt-2 mb-3"></div>
        <div className="flex justify-between gap-[2px]">
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Game Name:</p>
            <p>{game_name}</p>
          </div>
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Game ID:</p>
            <p>{game_id}</p>
          </div>
          <div className="min-w-[83px]">
            <p className="font-normal text-[10px] opacity-50 mb-[4px]">Amount:</p>
            <p>
              {currencies.map((option) => {
                if (option.code == currency) {
                  return (
                    option.value +
                    "  " +
                    Math.round(Number(balance) * Number(option.fix) * 100) / 100
                  );
                }
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
