// import OpenAI from "openai";
// import { OPEN_AI_KEY } from "./constants";

// const client = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default client;

import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
