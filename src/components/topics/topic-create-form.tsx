"use client";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import * as actions from "@/actions";
import { useActionState } from "react"; //this is a hook and just can used in cielnt side componets
export default function TopicCreateFrom() {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  });
  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">crete topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg"> Create a Topic </h3>
              <Input
                name="name"
                label="name"
                labelPlacement="outside"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
              />
              <Textarea
                name="description"
                label="description"
                labelPlacement="outside"
                placeholder="describe your topic"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(", ")}
              />
              {formState.errors._form ? (
                <div className="p-2 bg-red-200 border border-red-400 rounded">
                  {formState.errors._form?.join(", ")}
                </div>
              ) : null}

              <Button type="submit">submit</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
