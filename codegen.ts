// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./src/config/env";

const config: CodegenConfig = {
  schema: env.NEXT_PUBLIC_GRAPHQL_SERVER,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/artifacts/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: { gqlTagName: "gql" },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
