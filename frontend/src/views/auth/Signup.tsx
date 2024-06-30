import { useForm } from "react-hook-form";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { signUp } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await signUp(data.email, data.password);
      // Redirect to Home Page upon successful signup
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
