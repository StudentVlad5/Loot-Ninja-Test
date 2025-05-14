// components/AuthForm.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { itemsForLogin } from "@/constants/CONST";

type Props = {
  type: "login" | "registration";
};

export default function AuthForm({ type }: Props) {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLogin = type === "login";

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <form action="/submit" method="POST">
      <div className="bg-[#1C1C1E] text-white rounded-2xl p-4 mr-[12px] ml-[12px] space-y-6 text-[12px] font-normal leading-[12px] tracking-[0.36px] w-[100%]">
          <div className="flex justify-between">
              <div className="flex justify-between bg-[#2C2C2E] rounded-full p-1">
                  <button type="button" aria-label="move to login"
                      className={clsx("flex-1 py-[10px] rounded-full min-w-[106px]", {
                          "bg-white text-black": isLogin,
                      })}
                      >
                      <Link href="/login">Login</Link>
                  </button>
                  <button type="button" aria-label="move to registration"
                      className={clsx("flex-1 py-[10px] rounded-full min-w-[106px]", {
                          "bg-white text-black": !isLogin,
                      })}
                      >
                      <Link href="/registration">Registration</Link>
                  </button>
              </div>
              <Link href="/" className="flex justify-center item-center">
                  <Image src='/images/close_button.svg' alt='close page' width={24} height={24}/>
              </Link>
          </div>

        {isLogin ? (
          <>
          <div className="flex flex-col gap-[8px] justify-center item-center">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#2C2C2E] w-full px-4 py-2 rounded-xl outline-none border border-white/10"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#2C2C2E] w-full px-4 py-2 rounded-xl outline-none border border-white/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button type="button" className="w-full bg-white text-black py-4 rounded-full min-w-[264px]" onClick = {handleLogin}>Login</button>
          <div className="text-center text-white">Use social networks</div>
          <div className="flex justify-center space-x-2 text-xl">
              {itemsForLogin.map(item=>{return(
                  <Image key={item.alt} src={item.url} alt={item.alt} width={32} height={32} onClick={()=>alert(`start registration by ${item.alt}`)} className="cursor-pointer"/>
              )})}
          </div>
          <div className="text-center text-gray-400 underline underline-offset-2">
          <Link href="#">Forgot password ?</Link>
          </div>
          </>
        ) : (
          <>
          <div className="flex flex-col gap-[8px] justify-center item-center">
            <input
              type="text"
              placeholder="Email or Mobile"
              className="bg-[#2C2C2E] w-full px-4 py-3 rounded-xl outline-none border border-white/10"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#2C2C2E] w-full px-4 py-3 rounded-xl outline-none border border-white/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-[#2C2C2E] w-full px-4 py-3 rounded-xl outline-none border border-white/10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <label className="flex item-center space-x-2 text-sm relative gap-[12px]">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-400">Use social networks</span>
          </label>


            <button type="button" className="w-full bg-white text-black py-4 rounded-full min-w-[264px]" onClick = {handleLogin}>Registration</button>
          <div className="text-center text-white">Use social networks</div>
          <div className="flex justify-center space-x-2 text-xl">
              {itemsForLogin.map(item=>{return(
                  <Image key={item.alt} src={item.url} alt={item.alt} width={32} height={32} onClick={()=>alert(`start registration by ${item.alt}`)} className="cursor-pointer"/>
              )})}
          </div>
          </>
        )}
      </div>
    </form>
  );
}
