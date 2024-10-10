// app/page.js
"use client";

import Navbar from '../components/Navbar';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Component */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      
      {/* Main Content */}
      <main className="flex-grow mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-center text-4xl font-bold mb-8">Welcome to TuckerHub</h1>
        
        {/* Responsive Three Column Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">Column 1</h2>
            <p className="text-neutral-400">Content for the first column goes here.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">Column 2</h2>
            <p className="text-neutral-400">Content for the second column goes here.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">Column 3</h2>
            <p className="text-neutral-400">Content for the third column goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}