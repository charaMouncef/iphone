import { navLinks } from "../constants";
export default function Navbar() {
  return (
    <header className="w-screen min-h-[7vh] fixed top-0 left-0 z-50 flex justify-center items-center border-b-2 border-dark-200 bg-black backdrop-blur-md">
      <nav className="max-w-7xl container flex justify-between items-center mx-auto px-5">
        <img
          className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          src="/logo.svg"
          alt="Apple logo"
        />
        <ul className="flex justify-center items-center gap-5">
          {navLinks.map(({ label, link }) => (
            <li key={label}>
              <a
                className="hidden md:block opacity-80 text-white font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                href={link}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center gap-3">
          <button className="bg-transparent border-none outline-none cursor-pointer">
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              src="/search.svg"
              alt="Search"
            />
          </button>
          <button className="bg-transparent border-none outline-none cursor-pointer">
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              src="/cart.svg"
              alt="Cart"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
