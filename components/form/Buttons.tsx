"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type btnSize = "sm" | "default" | "lg";

type SubmitButtonProps = {
  className?: string;
  size: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className={className} size={size}>
      {pending ? (
        <>
          <Loader className="animate-spin" /> <span>Please wait...</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
};
