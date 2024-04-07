export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-lg text-center">
          <p className="text-xl">A new portfolio is under construction. 🏗️</p>
          <br />
          <p>Check my online profiles:</p>
        </div>
      </div>
      <div className="flex flex-col w-full h-full grow items-center">
        <div
          id="LinksList"
          className="flex flex-col grow max-h-96 w-full justify-around items-center text-center"
        >
          <a href="https://linkedin.com/in/muriloloffi">
            <div className="flex flex-row grow rounded-lg border-white">
              LinkedIn
            </div>
          </a>
          <a href="https://mastodon.social/@muriloloffi">Mastodon</a>
          <a href="https://github.com/muriloloffi">Github</a>
        </div>
      </div>
    </main>
  );
}
