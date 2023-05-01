import Link from "next/link";
import { MdOutlineToday, MdOutlineUpcoming } from "react-icons/md";
export default function Links() {
  const links = [
    { icon: MdOutlineToday, title: "Dnes", target: "/todo" },
    { icon: MdOutlineUpcoming, title: "Nadcházející", target: "/todo" },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          className="flex items-center gap-4 text-white transition-all duration-300 rounded-sm hover:bg-white/5 px-4 py-2"
          key={link.target}
          href={link.target}
        >
          <link.icon className="w-6 h-6" />
          {link.title}
        </Link>
      ))}
    </>
  );
}
