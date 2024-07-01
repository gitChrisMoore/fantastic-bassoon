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

const SignIn: React.FC = () => {
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof authFormSchema>) => {
    try {
      await signIn(values.username, values.password);
      console.log("Signed in successfully!");
      navigate("/dashboard-landing-page");
    } catch (error) {
      console.error("Error signing in:", error);
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
      <PageTitle text="Sign In" />

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
            <Button type="submit">Sign In</Button>
            <Button variant="outline" onClick={() => navigate("/auth-signup")}>
              Need a account? Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
