import React from 'react';
import { Manga } from './data'; // ตรวจสอบเส้นทางให้ถูกต้อง
import Book from './manga';

export default function Ebook() {
  return (
    <div className="bg-green-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-purple-500 mb-8">มังงะ</h2>
        
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {Manga.map((manga) => (
            <Book key={manga.Code} manga={manga} />
          ))}
        </div>
      </div>
    </div>
  );
}