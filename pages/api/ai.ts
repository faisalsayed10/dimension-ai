import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPEN_AI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { title, description, projects, tags } = req.body;
  const prompt = `A user is creating a task with the given details:

Title: ${title}
Description: ${description}

---------------------------------------------------------------

The projects and tags available are:

Project: ${projects.map((p: any) => p.name).join(", ")}.

Tags: ${tags.map((t: any) => t.name).join(", ")}.

From the above array of options, the most suitable project and the most suitable tag for this task is:`;

  const system = `You are a language model designed to help the user choose the appropriate projects and tags for the tasks that they create. Do not respond in sentences, respond only with what is required and keep it short and concise.

The ideal response format should be:

Project: _________
Tag: _________`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 100,
  });

  const data = response.data.choices[0].message?.content;
  console.log(data);

  return res.status(200).json({ data });
}
