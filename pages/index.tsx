import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ManagerProvider } from "../lib/ManagerContext";
const Modal = dynamic(() => import("../components/Modal"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ManagerProvider>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <Modal />
        </main>
      </ManagerProvider>
    </div>
  );
};

export default Home;
