"use client"
import React , { useEffect} from 'react'
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from '@/components/ui/input'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from "sonner";
import { apiConnector } from "@/services/apiConnector";

const Register = ({ }) => {
    const form = useForm();
    const router = useRouter();

    const onSubmit = async (formData: any) => {
        try {
            const response = await apiConnector("POST", "/signup", formData);
      
            if (response.status == 200) {
              toast.success("User register Successfully");
              router.push("/login");
            }
          } catch (error) {
            console.error("Error submitting form:", error);
          }
        };
    return (

        <div className=' w-11/12 max-w-[550px] border p-5 shadow-md rounded-lg my-5 mx-auto'>
        <div className=''>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-center font-semibold text-2xl my-5 border-b pb-3">
            Sign Up
          </h2>
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter First Name" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Last Name" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email Address" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Mobile Number" {...field} />
                                </FormControl>
                                <FormDescription />
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
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">other</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription></FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
        </div>
    );
};

export default Register
