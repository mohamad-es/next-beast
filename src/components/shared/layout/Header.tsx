import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";

const Header = () => {
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Demo",
      link: "/demo",
    },
  ];

  return (
    <div className="flex justify-between items-center px-10 mt-10">
      <nav>
        <ul className="flex gap-5">
          {nav.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ModeToggle />
    </div>
  );
};

export default Header;
