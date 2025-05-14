import { useEffect, useRef } from "react";
import withAuth from "../hook/withAuth";
import AuthForm from "@/components/AuthForm";
import gsap from 'gsap';


function Login() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      dropdownRef.current,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.55, ease: 'power2.out' }
    );
  }, []);

  return (
      <div ref={dropdownRef} className="flex items-center justify-center min-h-screen bg-black w-[100%]">
          <AuthForm type="login" />
      </div>
  );
}

export default withAuth(Login, 'public');
