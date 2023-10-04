"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import {
  h1font,
  h1fontAlt,
  h2font,
  h3font,
  italicfont,
  pfont,
} from "@/styles/myFonts";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import "../../styles/main.css";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
    console.log(values);
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
              className={clsx(
                    "text-[#f28482] text-[14px]",
                    pfont.className
                  )}/>
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
                className={clsx(
                    "text-[#f28482] text-[14px]",
                    pfont.className
                  )}/>
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
                className={clsx(
                    "text-[#f28482] text-[14px]",
                    pfont.className
                  )}/>
            </FormItem>
          )}
        />
        <Button className={clsx("bg-[#575552] h-[55px] w-[100px]", h1fontAlt.className)} type="submit">Submit</Button>
      </form>
    </Form>
  );
}
