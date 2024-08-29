import { Manga } from "./data";
import Book from "./manga";

export default function Ebook() {
  return (
    <div className="bg-green-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ร้านขายหนังสือมังงะ</h2>
        
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {Manga.map((manga) => (
            <div key={manga.Title} className="relative bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Book Bestseller={manga.Bestseller} Recommended={manga.Recommended} />
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={manga.Cover}
                  alt={manga.Title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fuchsia-900 mb-2">
                  <a href={manga.href} className="hover:underline">{manga.Title}</a>
                </h3>
                <p className="text-sm font-semibold text-fuchsia-500 mb-1">{manga.Category}</p>
                <p className="text-sm text-blue-600 mb-2">{manga.Description}</p>
                <p className="text-sm text-red-700 mb-2">ผู้แต่ง : {manga.Author}</p>
                <p className="text-sm text-red-500 mb-2">สำนักพิมพ์ : {manga.Publishing}</p>
                <p className="text-sm font-medium text-gray-900">ราคา : {manga.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}