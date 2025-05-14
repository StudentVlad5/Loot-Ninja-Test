import withAuth from "../hook/withAuth";
import AuthForm from "@/components/AuthForm";

function Registration() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-black w-[100%]">
      <AuthForm type="registration" />
      </div>
  );
}

export default withAuth(Registration, 'public');
