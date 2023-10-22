"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";

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
import { useToast } from "@/components/ui/use-toast";
import { h1fontAlt, pfont } from "@/styles/myFonts";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import "../../styles/main.css";

const api = process.env.NEXT_PUBLIC_API_URL || "";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export function AccountForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    axios
      .post(api, values)
      .then((response) => {
        if (response.status === 200) {
          toast({
            title: "You submitted the following values:",
            description: [values.email, values.name],
            style: {
              background: "#eae0d5ff",
              borderWidth: 1,
              borderColor: "#544f4a",
              padding: "4rem",
            },
          });
        } else {
          console.log("Error posting data to the server");
        }
      })
      .catch((error) => {
        console.log("Axios error:", error.message);
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx(
                  "text-[#eae0d5ff] text-[16px]",
                  h1fontAlt.className
                )}
              >
                Your Email Address
              </FormLabel>
              <FormControl>
                <Input
                  className={clsx(
                    "formInput text-[#eae0d5ff] text-[14px] ",
                    pfont.className
                  )}
                  // style={{placeholder}}
                  placeholder="e.g. sakir@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage
                className={clsx("text-[#f28482] text-[14px]", pfont.className)}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx(
                  "text-[#eae0d5ff] text-[16px]",
                  h1fontAlt.className
                )}
              >
                {"You or Your organization's Name"}
              </FormLabel>
              <FormControl>
                <Input
                  className={clsx(
                    "formInput text-[#eae0d5ff] text-[14px]",
                    pfont.className
                  )}
                  placeholder="eg. Royal Craft Bd LTD"
                  {...field}
                />
              </FormControl>
              <FormMessage
                className={clsx("text-[#f28482] text-[14px]", pfont.className)}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={clsx(
                  "text-[#eae0d5ff] text-[16px]",
                  h1fontAlt.className
                )}
              >
                {"Your Message?"}
              </FormLabel>
              <FormControl>
                <Textarea
                  className={clsx(
                    "formInput text-[#eae0d5ff] text-[14px]",
                    pfont.className
                  )}
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormMessage
                className={clsx("text-[#f28482] text-[14px]", pfont.className)}
              />
            </FormItem>
          )}
        />
        <Button
          className={clsx(
            "bg-[#575552] h-[55px] w-[100px]",
            h1fontAlt.className
          )}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
