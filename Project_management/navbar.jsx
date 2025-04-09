import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <Link to="/" className="text-xl font-bold">Project Manager</Link>
    </nav>
  );
}