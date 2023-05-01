import Link from "next/link";
import { useState } from "react";
import { VscCircleLarge, VscAdd } from "react-icons/vsc";
import Modal from "../Modal";
export default function Projects() {
  const links = [
    {
      icon: VscCircleLarge,
      title: "Synovy narozeniny",
      target: "/todo/synovy-narozeniny",
    },
    {
      icon: VscCircleLarge,
      title: "Vysát byt",
      target: "/todo/vysat-byt",
    },
  ];

  const [show, setShow] = useState(false);
  const [vidim, setVidim] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
        className="flex w-full   flex-col mt-16 px-4"
      >
        <div className="relative flex flex-row justify-between items-center mb-2">
          <h2 className="text-white font-semibold ">Todo</h2>
          <button
            onClick={() => setVidim(!vidim)}
            className={`${
              show ? "" : "hidden"
            } text-white text-lg absolute right-0`}
          >
            <VscAdd />
          </button>
        </div>
        <div className="flex flex-col  text-white/80">
          {links.map((link) => (
            <Link
              className=" flex px-4 rounded-sm items-center w-full  gap-4 transition-all duration-300 hover:bg-white/5 h-full py-2 "
              href={link.target}
            >
              <link.icon className="w-4 h-4" />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <Modal isvisible={vidim} onClose={() => setVidim(false)} />
    </>
  );
}
