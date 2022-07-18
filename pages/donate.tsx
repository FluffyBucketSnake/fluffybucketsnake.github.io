import DefaultLayout from "layouts/DefaultLayout";
import type { NextPage } from "next";
import PIXIcon from "public/pix.svg";
import { IoLogoBitcoin } from "react-icons/io5";

const DonatePage: NextPage = () => {
  return (
    <DefaultLayout title="Pay me a coffee">
      <article className="max-w-[65ch] prose prose-invert">
        <header className="not-prose mb-8">
          <h1 className="font-display text-7xl text-gray-100">
            Pay me a coffee
          </h1>
        </header>
        <p>Oh! You want to give me some free money? Many thanks!</p>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <IoLogoBitcoin className="mr-2" size={24} />
            <h4 className="text-xl">Bitcoin wallet (Segwit)</h4>
          </header>
          <span className="break-all text-lg text-gray-100/75">
            bc1qjgphzkvgmlr909x4xg06w0jq2drzj9ttcgr53laz4s8ykduxvp0qtf0kn3
          </span>
        </section>
        <section className="not-prose card">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <PIXIcon
              className="mr-2"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">PIX</h4>
          </header>
          <span className="text-lg text-gray-100/75">
            9edee982-92e4-49bb-9927-643e68643d45
          </span>
        </section>
      </article>
    </DefaultLayout>
  );
};

export default DonatePage;
