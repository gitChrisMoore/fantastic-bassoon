import { useForm } from "react-hook-form";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.email, data.password);
      // Redirect to Home Page upon successful sign in
      navigate("/dashboard-landing-page");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input type="email" {...register("email")} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" {...register("password")} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
