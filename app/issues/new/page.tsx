"use client";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from 'zod'
type IssuesForm = z.infer<typeof createIssueSchema>;
function NewIssue() {
  const router = useRouter();
  const { register, control, handleSubmit, formState: {errors} } = useForm<IssuesForm>({
    resolver: zodResolver(createIssueSchema),
  });

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
        {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description…" {...field} />
          )}
        />
        {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
}

export default NewIssue;
