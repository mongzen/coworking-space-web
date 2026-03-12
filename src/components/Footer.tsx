import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-2xl font-bold">Office</span>
          <span className="text-sm opacity-80">© Office 2026 All Rights Reserved</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Interested?</span>
          <span className="text-sm opacity-80">Consectetur adipiscing elit, sed do eiusmod tempor.</span>
          <a href="mailto:Office@coworker.com" className="underline text-bone">Contact Us</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Find Us</span>
          <span className="text-sm opacity-80">+91-9876543456</span>
          <span className="text-sm opacity-80">Office@coworker.com</span>
        </div>
      </div>
    </footer>
  );
}
