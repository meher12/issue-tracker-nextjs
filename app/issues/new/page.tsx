"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import React from "react";
import { useRouter } from "next/navigation";

interface IssuesForm {
  title: string;
  description: string;
}
function NewIssue() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssuesForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
        console.log(data);
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title…" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description…" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
}

export default NewIssue;
