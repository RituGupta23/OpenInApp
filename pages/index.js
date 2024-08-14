import { IoNotifications } from "react-icons/io5";
import FileUploader from "@/components/FileUploader";

export default function Home() {
  return (
    <>
      <div className="font-nunito h-20 w-full h-[100vh] bg-gray-100 dark:bg-zinc-800 ">
        <div className="text-xl md:ml-80 dark:text-white text-black h-1/5 flex flex-row items-center px-6">
          Upload CSV
          <IoNotifications
            className="text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white hidden md:block"
            aria-label="Notifications"
          />
        </div>
        <div className="h-4/5 flex items-center justify-center">
          <FileUploader />
        </div>
      </div>
    </>
  );
}
