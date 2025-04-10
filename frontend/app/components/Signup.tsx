"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff} from "lucide-react";
import googleIcon from "@/public/icons/googleIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner"


const User = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(10, "Username must be at least 10 characters long")
    .max(15, "Username must be at most 15 characters long"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export function ProfileForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof User>>({
    resolver: zodResolver(User),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof User>) {
    console.log(values);
  
    toast("Please verify your email", {
      action: {
        label: "Okay",
        onClick: () => console.log("Okay"),
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-2/5 p-4">
      <h1 className="font-black text-2xl">Sign Up</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Username</FormLabel>
              <FormControl>
                <Input placeholder="Ichigo Kurosaki" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Email</FormLabel>
              <FormControl>
                <Input placeholder="soul.society@bankai.com" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-lg">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter your bankai name"
                    {...field}
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

      <Button type="button" variant="secondary" className="flex bg-white text-black font-bold gap-2 items-center w-1/2 mr-auto ml-auto">
        <Image src={googleIcon} alt="Google Logo" width={25} height={25} />
        Continue with Google
      </Button>


        <Button type="submit" variant="ghost" className="cursor-pointer w-1/2 mr-auto ml-auto font-bold">Submit</Button>
        <p>Already a user? <Link href="/login" className="underline">Login</Link></p>
      </form>
      
    </Form>
  );
}
