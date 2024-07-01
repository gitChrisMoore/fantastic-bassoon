import { useForm } from "react-hook-form";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { authFormSchema } from "./authFormSchema";

import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import PageTitle from "@/utils/pageTitle";

const Signup: React.FC = () => {
  const { signUp } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof authFormSchema>) => {
    try {
      await signUp(values.username, values.password);
      console.log("Signed up successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div>
      <PageTitle text="Create Account" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username@gmail.com" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button type="submit">Sign Up</Button>
            <Button variant="outline" onClick={() => navigate("/auth-signin")}>
              Already have an account? Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
