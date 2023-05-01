import Links from "./Links";
import Projects from "./Projects";

export default function Sidebar() {
  return (
    <>
      <div className="bg-zinc-300/5 border-r border-white/10 w-1/6 h-screen py-32 ">
        <div className="px-4 ">
          <Links />
          <Projects />
        </div>
      </div>
    </>
  );
}
