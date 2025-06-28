import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">🏠 MyListingApp</div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <input type="text" placeholder="Search..." className="border p-2 rounded-md" />
        <button className="text-blue-500 font-semibold">Sign In</button>
        <button className="bg-blue-500 text-white p-2 rounded-md">Sign Up</button>
      </div>
      <nav className="mt-2 md:mt-0 flex space-x-4 text-sm text-gray-600">
        <span>Rooms</span>
        <span>Mansion</span>
        <span>Countryside</span>
        <span>Beachfront</span>
      </nav>
    </header>
  );
};

export default Header;
