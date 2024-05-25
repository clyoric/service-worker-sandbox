import React from "react";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-800 flex justify-center items-center">
        <div className="max-w-[1280px] w-full flex flex-col bg-gray-400 gap-[40px] justify-between">
          <header className="w-full h-[96px] bg-gray-700">
            <nav>
              <ul>
                <li>
                  <a href={`/`}>Home</a>
                </li>
                <li>
                  <a href={`/gallery`}>Gallery</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="w-full min-h-[400px] bg-blue-400">
            <Outlet/>
          </main>
          <footer className="w-full h-[96px] bg-gray-700">FOOTER</footer>
        </div>
      </div>
    </>
  );
}