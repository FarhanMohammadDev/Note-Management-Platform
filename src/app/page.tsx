import Link from "next/link";
import Logo from "../components/Logo";

export default function Page() {
  return (
    <main className="flex flex-col p-6 min-h-screen">
      <Logo />
      <div className="flex flex-col gap-4 mt-4 justify-center md:flex-row grow">
        <div className="flex flex-col gap-6 justify-center py-10 px-6 rounded-lg md:px-20 md:w-2/5 border-2 border-indigo-800 ">
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Note Management App.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/dashboard/notes"
            className="flex gap-5 items-center self-start py-3 px-6 text-sm font-medium text-white bg-blue-500 rounded-lg transition-colors md:text-base hover:bg-blue-400"
          >
            <span>Try it now!</span>
          </Link>
        </div>
      </div>
    </main>
  );
}