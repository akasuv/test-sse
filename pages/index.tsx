import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const eventSource = new EventSource(
        "https://test-sse-node-production.up.railway.app/api/sse"
      );

      eventSource.onmessage = (event) => {
        setData((prev) => {
          return prev + " " + event.data;
        });
      };
    })();
  }, [mounted]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{data}</main>
    </>
  );
}
