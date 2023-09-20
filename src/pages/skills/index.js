import React from "react";
import { NavLink } from "react-router-dom";

export default function Skills() {
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
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-blue-500 group"
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
            Skills
            </h2>
            <ul className="mt-3 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center dark:text-gray-800">
                <svg
                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Framework Laravel
            </li>
            <li className="flex items-center dark:text-gray-800">
                <svg
                className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                React (Sedang belajar)
            </li>
            </ul>
        </div>
        </div>
    );
}
