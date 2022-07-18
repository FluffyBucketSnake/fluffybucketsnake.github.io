import CodeIcon from "@fluentui/svg-icons/icons/code_24_filled.svg";
import TechIcon from "@fluentui/svg-icons/icons/developer_board_24_filled.svg";
import ToolIcon from "@fluentui/svg-icons/icons/wrench_24_filled.svg";
import GameIcon from "@fluentui/svg-icons/icons/games_24_filled.svg";
import TopicsIcon from "@fluentui/svg-icons/icons/lightbulb_24_filled.svg";
import DefaultLayout from "layouts/DefaultLayout";
import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <DefaultLayout title="About me">
      <article className="prose prose-invert">
        <header className="not-prose mb-8">
          <h1 className="font-display text-7xl text-gray-100">About me</h1>
          <h2 className="font-light text-5xl text-gray-100/75">
            Bruno Henrique Glowaski Morais
          </h2>
        </header>
        <p>
          I'm a Brazilian software developer. What kind of software developer
          you may ask? Pretty much any. I particularly enjoy working on
          desktops, full stack and game projects, but I've also have developed
          mobile apps. In my free time, aside from developing side-projects like
          these ones, I like playing games, drawing and reading.
        </p>
        <p>
          I'm a faster learner, having learned much of development and
          programming by myself, and constantly on look out for new topics and
          technologies to learn. With the knowledge I acquired, I spread it
          whenever I can, trying to make it as simple and intuitive as possible.
        </p>
        <p>
          I'm also a good mathematical thinker, trying to analyze and derive
          concepts from logic and first principles. While I'm mostly an
          introverted person, I enjoy working and refining ideas with a group.
          Finally, I'm a goal-minded person: when working on projects, I like to
          take either an user-centric approach, or a business-centric one, when
          coming up with the ideas for a project, thinking about the user's
          experience.
        </p>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <CodeIcon
              className="mr-2 min-w-[24px]"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">Programming languages</h4>
          </header>
          <ul className="list list-disc list-inside">
            <li>
              <strong>C#</strong>
            </li>
            <li>
              <strong>TypeScript</strong>
            </li>
            <li>
              <strong>Rust</strong>
            </li>
            <li>
              <strong>C++</strong>
            </li>
            <li>C</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>Visual Basic.NET</li>
          </ul>
        </section>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <TechIcon
              className="mr-2 min-w-[24px]"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">Framework &amp; Engines</h4>
          </header>
          <ul className="list list-disc list-inside">
            <li>
              <strong>MonoGame</strong>
            </li>
            <li>
              <strong>Vulkan</strong>
            </li>
            <li>
              <strong>React</strong>
            </li>
            <li>
              <strong>Next.js</strong>
            </li>
            <li>
              <strong>Express.js</strong>
            </li>
            <li>
              <strong>ASP.NET Core</strong>
            </li>
            <li>React Native</li>
            <li>Vue</li>
            <li>Godot Engine</li>
            <li>Unity3D</li>
            <li>SDL2</li>
            <li>Prisma</li>
            <li>TypeORM</li>
            <li>Entity Framework Core</li>
            <li>WPF</li>
          </ul>
        </section>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <ToolIcon
              className="mr-2 min-w-[24px]"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">Tools</h4>
          </header>
          <ul className="list list-disc list-inside">
            <li>
              <strong>Linux</strong>
            </li>
            <li>
              <strong>Git</strong>
            </li>
            <li>MariaDB</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Visual Studio Code</li>
            <li>Neovim</li>
            <li>Github Actions</li>
          </ul>
        </section>
        <p>
          I began my journey as a programmer when I was around 12 years old. I
          was fascinated by computers and games, and I wanted to learn more
          about them. To understand how they worked. To know how they were made.
        </p>
        <p>
          In the beginning, I studied <em>Visual Basic.NET</em>. With it, I
          developed some really basic applications with Win Forms, WPF, SQLite
          and MySQL. At the same time, I started developing games with{" "}
          <em>Game Maker</em>.
        </p>
        <p>
          Following that, I taught myself <em>C#</em>. It helped that this and
          the former languages were built with the same technology behind(
          <em>.NET Framework</em>). This is the language I've most used and am
          most familiar with. With it, I began working with <em>XNA</em>,
          followed by <em>MonoGame</em> when the former was discontinued.
        </p>
        <p>
          Some years later, I started messing with <em>HTML</em>, <em>CSS</em>{" "}
          and <em>JavaScript</em>, learning how to build basic pages. During
          this time, I became interested in writing better code, so I commenced
          my studies and practices of software engineering, as well as clean
          code methodologies.
        </p>
        <p>
          Some years down the line, I entered a graduation course for{" "}
          <em>computer science</em>, seeking to deepen my knowledge about
          computers and software as whole. Alongside this, I gained interest in
          user experience and proper game design, so I developed(Ha! ...not
          funny) my user-centric approach to build applications and games.
        </p>
        <p>
          Now, I still yearn to improve my abilities as a software developer,
          but I also want to branch out and start spreading what I've learned to
          others as to inspire them the same way I was once. That's the reason I
          created this blog.
        </p>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <GameIcon
              className="mr-2 min-w-[24px]"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">Favorite games</h4>
          </header>
          <ul className="list list-disc list-inside">
            <li>
              <strong>Team Fortress 2</strong>
            </li>
            <li>Counter Strike: Global Offensive</li>
            <li>Minecraft</li>
            <li>Terraria</li>
            <li>Factorio</li>
            <li>Super Metroid</li>
            <li>Sonic Mania</li>
            <li>Super Mario World</li>
            <li>Legend of Zelda: A Link to the past</li>
            <li>Little Big Planet 2</li>
            <li>Zomboid</li>
          </ul>
        </section>
        <section className="not-prose card mb-4">
          <header className="flex flex-row items-center mb-2 text-gray-100">
            <TopicsIcon
              className="mr-2 min-w-[24px]"
              fill="currentColor"
              width="24"
              height="24"
            />
            <h4 className="text-xl">Topics I'm interested</h4>
          </header>
          <ul className="list list-disc list-inside">
            <li>
              <strong>Game design &amp; development</strong>
            </li>
            <li>
              <strong>UI/UX</strong>
            </li>
            <li>
              <strong>Software engineering</strong>
            </li>
            <li>Protection &amp; Security</li>
            <li>Electronics &amp; Hardware</li>
            <li>Operating systems</li>
            <li>Full stack development</li>
            <li>Low-level development</li>
            <li>Native(Desktop/Mobile) development</li>
          </ul>
        </section>
      </article>
    </DefaultLayout>
  );
};

export default AboutPage;
