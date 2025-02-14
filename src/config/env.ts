import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().default("http://localhost:3000"),
    NEXT_PUBLIC_SERVER_URL: z.string().default("http://140.245.31.228:5000"),
    NEXT_PUBLIC_GRAPHQL_SERVER: z.string().default("http://140.245.31.228:5000/graphql"),
    NEXT_PUBLIC_APP_STORE_URL: z.string().url().default("https://apps.apple.com/us/app/al-hadith/id1238182914"),
    NEXT_PUBLIC_PLAY_STORE_URL: z
      .string()
      .url()
      .default("https://play.google.com/store/apps/details?id=com.ihadis.ihadis&hl=en"),
  },
  runtimeEnv: process.env as Record<string, string>,
});

export const isDev = process.env.NODE_ENV === "development";
