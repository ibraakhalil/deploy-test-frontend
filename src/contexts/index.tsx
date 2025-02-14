import { LoadFontForLocal } from "@/components/utils/font-loader";
import { ApolloProvider } from "@/contexts/graphql-provider";
import { ThemeProvider } from "@/contexts/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "shadcn/components/ui/tooltip";
import ReactQueryProvider from "./react-query-provider";

export async function Provider({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ReactQueryProvider>
        <ApolloProvider>
          <NextTopLoader shadow={false} crawlSpeed={50} showSpinner={false} color="hsl(var(--color-primary))" />
          <Toaster toastOptions={{ duration: 1000 }} position="bottom-center" />
          <LoadFontForLocal />
          <ThemeProvider>
            <TooltipProvider delayDuration={50}>{children}</TooltipProvider>
          </ThemeProvider>
        </ApolloProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
