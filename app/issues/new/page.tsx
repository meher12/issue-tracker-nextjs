"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface IssuesForm {
  title: string;
  description: string;
}
function NewIssue() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssuesForm>();

  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-3">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
            //console.log(data);
          } catch (error) {
            setError("An unexpected error occurred.");
          }
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
    </div>
  );
}

export default NewIssue;
