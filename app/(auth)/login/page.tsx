"use client";
import { Button } from "@/components/ui/button";
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { apiConnector } from "@/services/apiConnector";

const Login = () => {
    const form = useForm();

    const onSubmit = async(formData:any) => {
      const {data} = await apiConnector("POST","/login",formData);
        console.log('Form submitted');
    }
  return (
    <div className="max-w-[500px] w-11/12 mx-auto my-5">
      <Card className="bg-gradient-to-tl from-[#7DE2FC] to-[#AD88C6]">
        <CardHeader className="space-y-1 ">
          <CardTitle className="text-2xl text-center">Log In</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
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
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Login</Button>
              <Button variant="ghost" className="w-full" type="button">
                Forgot Password
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="mt-2 text-xs text-center text-gray-700">
            {" "}
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className=" text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
