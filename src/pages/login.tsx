import withAuth from "../hook/withAuth";
import AuthForm from "@/components/AuthForm";


function Login() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-black w-[100%]">
          <AuthForm type="login" />
      </div>
  );
}

export default withAuth(Login, 'public');
