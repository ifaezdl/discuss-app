"use server";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/db";
import { Topic } from "@/generated/prisma/client";
import { redirect } from "next/navigation";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase letters and dashes without spaces ",
    }),
  description: z.string().min(10),
});
interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}
export async function createTopic(
  formstate: CreateTopicFormState,
  formdata: FormData,
): Promise<CreateTopicFormState> {
  // TODO :revalidate the homepage after creating a topic
  const session = await auth();
  const name = formdata.get("name");
  const description = formdata.get("description");
  const result = createTopicSchema.safeParse({
    name: name,
    description: description,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
    //{name:['the error for the name'],description:['the description ']}
  }
  if (!session || !session?.user) {
    return {
      errors: {
        _form: ["must log in "],
      },
    };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["some thing went wrong "],
        },
      };
    }
  }
  revalidatePath("/");
  const path = paths.topicsShow(topic.slug);
  redirect(path);
}
