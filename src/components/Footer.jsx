import { footerLinks } from "../constants/index.js";

export default function Footer() {
  return (
    <footer className=" w-full mx-auto py-7 px-5">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <p className="text-sm font-medium">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" loading="lazy" />
      </div>
      <hr className="my-7 text-[#424245]" />
      <div className="max-w-7xl flex flex-col lg:flex-row lg:items-center justify-between mx-auto gap-5 text-sm">
        <p className="text-sm font-medium">
          Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>

        <ul className="lg:divide-x flex flex-col lg:flex-row gap-2.5">
          {footerLinks.map(({ label, link }) => (
            <li
              className="lg:px-5 cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"
              key={label}
            >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
