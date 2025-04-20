import React, { useState } from "react";
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
import toast, { Toaster } from "react-hot-toast";

const ContactButton = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        console.log("Success:", result);
        toast.success("Your message was sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Uh-oh, something went wrong.");
      }
    } catch (error) {
      toast.error(error.message || "Server error. Try again later.");
    } finally {
      setIsSubmitting(false);
      setOpenDialog(false);
    }
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild onClick={() => setOpenDialog(true)}>
          <div className="bg-primary rounded-full border-ring border py-4 px-3 text-background h-[60px] flex gap-2 items-center hover:bg-primary-light  duration-300 cursor-pointer transform transition-transform hover:-rotate-12 origin-bottom-left w-fit">
            <div className="relative rounded-full bg-green-500 w-4 h-4">
              <div className="rounded-full absolute bg-green-500 animate-ping w-4 h-4"></div>
            </div>
            <p>Let&apos;s Connect!</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Drop me a message!</DialogTitle>
            <DialogDescription>I'll get back to you soon!</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <CustomInput {...register("name", { required: true })} />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <label>Email</label>
              <CustomInput
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <label>Message</label>
              <CustomTextarea {...register("message", { required: true })} />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-white hover:bg-primary-light duration-200"
              >
                {isSubmitting ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  );
};

export default ContactButton;
