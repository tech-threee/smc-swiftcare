"use client";
import { UserRes, UserRoles } from "@/types";
import { CREATE_USER } from "@/utils/server/user";
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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useLocalStorage } from "react-use";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import _ from "lodash";
import Tiptap from "../core/tiptap";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    reciepient: z.string(),
    letter: z.string().min(8, "Letter message should be more than 7 characters")
});

export default function CreateMessageForm() {
    const [localUser, setLocalUser,] = useLocalStorage<UserRes | null>("user", null);
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            reciepient: "ALL",
            letter: ""
        }
    });

    const [selectedAudience, setSelectedAudience] = useState('staff');

    const handleOptionChange = (event: any) => {
        setSelectedAudience(event.target.value);
        console.log(event)
    };


    const createMessage = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>): any => {
            if (!localUser || !localUser?.token) {
                throw new Error("Please login again");
            }
            return values;
            // return CREATE_USER(values, localUser.token);
        },
        onSuccess: (newData) => {
            queryClient.setQueryData([`staff`], (oldData: UserRes[]) => {
                return [...oldData, newData];
            });
            location.reload();

            // toast.success("Created User successfully")
            if (typeof window !== "undefined") {
                location.reload();
            }
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Creating User");

        createMessage.mutate(values, {
            onSuccess: (data) => {
                console.log(data);

                toast.success(`Login Successful`, {
                    id: toastSubmitId
                });

                location.reload();

                if (typeof window !== "undefined") {
                    location.reload();
                }
            },
            onError: (error: any) => {
                toast.error(error?.response?.data?.message || "Couldn't create user", {
                    id: toastSubmitId
                });
                console.log(error);

            }

        });

    }


    return (
        <Form   {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="  w-full space-y-5 flex  gap-4 ">
                <div className="flex-1 flex flex-col gap-4">

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createMessage.isPending} placeholder="Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-2">
                        <h4>
                            Choose Target Audience
                        </h4>
                        <RadioGroup
                            value={selectedAudience}
                            onChange={(e: any) => handleOptionChange(e)}
                            className="flex items-center justify-b gap-8" >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="staff" id="staff" />
                                <Label htmlFor="staff">Staff</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="patient" id="patient" />
                                <Label htmlFor="patient">Patient</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="individual" id="individual" />
                                <Label htmlFor="individual">Individual</Label>
                            </div>
                        </RadioGroup>
                    </div>


                </div>
                <div className="flex flex-col gap-3 -translate-y-4">

                    <FormField
                        control={form.control}
                        name="letter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Message</FormLabel>
                                <FormControl>
                                    <Tiptap letter={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={createMessage.isPending} className=" w-full " type="submit">
                        {createMessage.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Submit
                    </Button>
                </div>





            </form>
        </Form>
    );
}