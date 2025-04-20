import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";

const ContactButton = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-primary rounded-full border-ring border py-4 px-3 text-background h-[60px] flex gap-2 items-center hover:bg-primary-offset  duration-300 cursor-pointer transform transition-transform hover:-rotate-12 origin-bottom-left w-fit">
            <div className="relative rounded-full bg-green-500 w-4 h-4">
              <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
            </div>
            <p>Let&apos;s Connect!</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Drop me a message!</DialogTitle>
            <DialogDescription>
              Let&apos;s build something great together.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <CustomInput {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
              <label>Email</label>
              <CustomInput {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
              <label>Message</label>
              <CustomTextarea {...register("message", { required: true })} />
              {errors.message && <span>This field is required</span>}
              <Button type="submit" className="text-white">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactButton;
