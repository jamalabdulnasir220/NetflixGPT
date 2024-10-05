// import OpenAI from "openai";
// import { OPEN_AI_KEY } from "./constants";

// const client = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default client;

import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
