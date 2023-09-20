import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
    return (
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-blue-500 group"
                  to={"/about"}
                >
                  <span className="ml-3">About</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={"/experience"}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Experience
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={"/education"}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Education
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={"/skills"}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={"/interests"}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Interests
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  to={"/awards"}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">Awards</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-black">
            About
          </h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            +62 89688493847
          </span>
          <span className="bg-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-gray-800">
            mohani.s@untan.ac.id
          </span>
          <p class="mt-3 text-justify text-gray-500 dark:text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    );
}
