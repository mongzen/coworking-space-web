import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-bone/80 backdrop-blur border-b border-bone/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-serif text-2xl font-bold text-charcoal">Office</span>
        <ul className="flex gap-8 text-charcoal font-medium">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">MemberShip</a></li>
          <li><a href="#" className="hover:underline">Feature</a></li>
          <li><a href="#" className="hover:underline">Location</a></li>
        </ul>
        <a href="#" className="bg-charcoal text-bone px-5 py-2 rounded-lg font-semibold shadow hover:bg-bone hover:text-charcoal border border-charcoal transition-colors">Book Now</a>
      </nav>
    </header>
  );
}
