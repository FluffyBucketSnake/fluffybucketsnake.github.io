import DefaultLayout from "layouts/DefaultLayout";
import type { NextPage } from "next";

const DonatePage: NextPage = () => {
  return (
    <DefaultLayout>
      <article className="max-w-[65ch] prose prose-invert">
        <header className="not-prose mb-8">
          <h1 className="font-display text-7xl text-gray-100">
            Pay me a coffee
          </h1>
        </header>
        <p>Oh! You want to give me some free money? Many thanks!</p>
        <section>
          <h4>Bitcoin wallet(Segwit)</h4>
          <span className="break-all">
            bc1qjgphzkvgmlr909x4xg06w0jq2drzj9ttcgr53laz4s8ykduxvp0qtf0kn3
          </span>
        </section>
        <section>
          <h4>PIX</h4>
          <span>9edee982-92e4-49bb-9927-643e68643d45</span>
        </section>
      </article>
    </DefaultLayout>
  );
};

export default DonatePage;
