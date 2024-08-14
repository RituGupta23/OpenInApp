import React, { useState, useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaCalendarDays, FaFileInvoiceDollar } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      {/* Mobile screen */}
      <div className="font-nunito flex items-center justify-between p-4 bg-white dark:bg-zinc-900 md:hidden">
        <div className="flex items-center">
          <button
            onClick={toggleMobileSidebar}
            className="text-gray-500 mr-3 text-2xl hover:text-gray-900 dark:hover:text-white"
          >
            {isMobileSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
              fill="#7975FF"
            />
          </svg>
          <span className="ml-3 text-2xl dark:text-white text-black">Base</span>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isMobileSidebarOpen && (
        <aside
          className="font-nunito fixed inset-0 z-50 flex flex-col w-64 bg-white dark:bg-zinc-900"
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                  fill="#7975FF"
                />
              </svg>
              <span className="ml-3 text-2xl dark:text-white text-black">
                Base
              </span>
            </div>
            <button
              onClick={toggleMobileSidebar}
              className="ml-4 text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="font-medium">
            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <MdSpaceDashboard className="text-2xl mr-3" />
                <span className="text-lg">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <RiContactsBookUploadFill className="text-2xl mr-3" />
                <span className="text-lg">Upload</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaFileInvoiceDollar className="text-2xl mr-3" />
                <span className="text-lg">Invoice</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <TbNotes className="text-2xl mr-3" />
                <span className="text-lg">Schedule</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaCalendarDays className="text-2xl mr-3" />
                <span className="text-lg">Calendar</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <IoNotifications className="text-2xl mr-3" />
                <span className="text-lg">Notifications</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <RiSettings4Fill className="text-2xl mr-3" />
                <span className="text-lg">Settings</span>
              </a>
            </li>
          </ul>

          <div className="px-6 py-6">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-full text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {isDarkMode ? <BsSun /> : <BsMoon />}
            </button>
          </div>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside
        id="default-sidebar"
        className={`hidden md:block font-nunito fixed top-0 left-0 z-40 h-screen transition-transform ${
          isOpen ? "w-80" : "w-30"
        } bg-white dark:bg-zinc-900`}
        aria-label="Sidebar"
      >
        <div className="h-full mt-5 overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-6">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                  fill="#7975FF"
                />
              </svg>
              {isOpen && (
                <span className="ml-3 text-2xl dark:text-white text-black">
                  Base
                </span>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className="ml-4 text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white"
            >
              <GoSidebarCollapse />
            </button>
          </div>

          <ul className="font-medium">
            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <MdSpaceDashboard className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Dashboard</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <RiContactsBookUploadFill className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Upload</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaFileInvoiceDollar className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Invoice</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <TbNotes className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Schedule</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaCalendarDays className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Calendar</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <IoNotifications className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Notifications</span>}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <RiSettings4Fill className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Settings</span>}
              </a>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 w-full px-6 py-6">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-full text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {isDarkMode ? <BsSun /> : <BsMoon />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
