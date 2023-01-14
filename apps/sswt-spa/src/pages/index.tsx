import Head from "next/head";
import { Dashboard } from "@/features/dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </>
  );
}
