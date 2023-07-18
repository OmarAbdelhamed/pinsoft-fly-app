import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between items-center py-4 px-8">
        <li>
          <a href="/" className="text-white text-xl font-semibold">
            Ana Sayfa
          </a>
        </li>
        <li>
          <a href="/hakkimizda" className="text-gray-300 hover:text-white">
            Hakkımızda
          </a>
        </li>
        <li>
          <a href="/iletisim" className="text-gray-300 hover:text-white">
            İletişim
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
