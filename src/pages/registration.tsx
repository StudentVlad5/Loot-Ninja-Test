import withAuth from "../hook/withAuth";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Login Page</h1>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
  );
}

export default withAuth(Login, 'public');
