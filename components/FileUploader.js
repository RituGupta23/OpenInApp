import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleFileUpload = () => {
    if (fileContent) {
      // If file content is already displayed, remove the file
      handleRemoveFile();
      return;
    }

    if (!selectedFile) return;

    setLoading(true); // Start loading

    const reader = new FileReader();

    if (selectedFile.name.endsWith(".xlsx")) {
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          setFileContent(jsonData);
        } catch (error) {
          console.error("Error reading xlsx file:", error);
        } finally {
          setLoading(false); // End loading
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    } else if (selectedFile.name.endsWith(".csv")) {
      reader.onload = (e) => {
        Papa.parse(e.target.result, {
          complete: (result) => {
            setFileContent(result.data);
            setLoading(false); // End loading
          },
          header: false,
        });
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileContent(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Reset file input
    }
  };

  return (
    <div className="font-nunito md:ml-80">
      <div className="w-96 h-80 bg-white dark:bg-zinc-900  flex-col items-center rounded-lg">
        <div className="h-5/6 p-4">
          <label
            htmlFor="file-upload"
            className=" border-2 flex-col flex items-center justify-center rounded-lg h-full border-dashed border-gray-500 text-center cursor-pointer text-gray-500"
          >
            <svg
              width="31"
              height="29"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_22_2725)">
                <path
                  d="M19.2801 14.2324L7.45557 12.1324V27.6493C7.45557 28.3579 8.02638 28.9324 8.73053 28.9324H29.1341C29.8382 28.9324 30.4091 28.3579 30.4091 27.6493V21.9324L19.2801 14.2324Z"
                  fill="#185C37"
                />
                <path
                  d="M19.2802 0.932632H8.73059C8.02644 0.932632 7.45563 1.50709 7.45563 2.21573V7.93263L19.2802 14.9326L25.5402 17.0326L30.4091 14.9326V7.93263L19.2802 0.932632Z"
                  fill="#21A366"
                />
                <path
                  d="M7.45563 7.93263H19.2802V14.9326H7.45563V7.93263Z"
                  fill="#107C41"
                />
                <path
                  opacity="0.1"
                  d="M15.9185 6.53313H7.45557V24.0331H15.9185C16.6216 24.0308 17.1911 23.4577 17.1934 22.75V7.81622C17.1911 7.10855 16.6216 6.53543 15.9185 6.53313Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M15.2229 7.23288H7.45557V24.7329H15.2229C15.9261 24.7306 16.4956 24.1575 16.4978 23.4498V8.51598C16.4956 7.8083 15.9261 7.23518 15.2229 7.23288Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M15.2229 7.23288H7.45557V23.3329H15.2229C15.9261 23.3306 16.4956 22.7575 16.4978 22.0498V8.51598C16.4956 7.8083 15.9261 7.23518 15.2229 7.23288Z"
                  fill="black"
                />
                <path
                  opacity="0.2"
                  d="M14.5273 7.23288H7.45557V23.3329H14.5273C15.2305 23.3306 15.8 22.7575 15.8023 22.0498V8.51598C15.8 7.8083 15.2305 7.23518 14.5273 7.23288Z"
                  fill="black"
                />
                <path
                  d="M1.77496 7.23288H14.5274C15.2315 7.23288 15.8023 7.80734 15.8023 8.51598V21.3498C15.8023 22.0584 15.2315 22.6329 14.5274 22.6329H1.77496C1.07082 22.6329 0.5 22.0584 0.5 21.3498V8.51598C0.5 7.80734 1.07082 7.23288 1.77496 7.23288Z"
                  fill="url(#paint0_linear_22_2725)"
                />
                <path
                  d="M4.44867 19.1032L7.13075 14.9207L4.67334 10.7613H6.65011L7.99115 13.4213C8.11497 13.674 8.19982 13.8616 8.24574 13.9855H8.26312C8.35123 13.7839 8.44397 13.5882 8.54135 13.3982L9.97489 10.7627H11.7896L9.26959 14.8976L11.8536 19.1032H9.92274L8.37372 16.1835C8.30075 16.0593 8.23884 15.9288 8.18871 15.7936H8.16576C8.12038 15.9261 8.06018 16.0529 7.9863 16.1716L6.39138 19.1032H4.44867Z"
                  fill="white"
                />
                <path
                  d="M29.1342 0.932632H19.2802V7.93263H30.4091V2.21573C30.4091 1.50709 29.8383 0.932632 29.1342 0.932632Z"
                  fill="#33C481"
                />
                <path
                  d="M19.2802 14.9326H30.4091V21.9326H19.2802V14.9326Z"
                  fill="#107C41"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_22_2725"
                  x1="3.15832"
                  y1="6.23029"
                  x2="13.2396"
                  y2="23.5799"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18884F" />
                  <stop offset="0.5" stop-color="#117E43" />
                  <stop offset="1" stop-color="#0B6631" />
                </linearGradient>
                <clipPath id="clip0_22_2725">
                  <rect
                    width="29.9091"
                    height="28"
                    fill="white"
                    transform="translate(0.5 0.932632)"
                  />
                </clipPath>
              </defs>
            </svg>

            {fileName ? (
              `Selected: ${fileName}`
            ) : (
              <span>
                Drag your excel sheet here or
                <span className="text-indigo-500"> browse</span>
              </span>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept=".xlsx, .csv"
            className="hidden"
            ref={fileInputRef}
          />
        </div>

        <div className="h-1/6 px-4">
          <button
            onClick={handleFileUpload}
            disabled={(!selectedFile && !fileContent) || loading}
            className={`w-full bg-indigo-500 text-white px-4 py-2 rounded-lg ${
              (!selectedFile && !fileContent) || loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-indigo-500"
            }`}
          >
            {fileContent ? (
              "Remove File"
            ) : loading ? (
              "Uploading..."
            ) : (
              <div className="flex items-center justify-center">
                <FiUpload /> <span className="ml-2">Upload</span>
              </div>
            )}
          </button>
        </div>
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        )}
        {fileContent && !loading && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-center text-gray-500">
                File: {fileName}
              </h3>
            </div>
            <div className="">
              <table className="w-96 bg-white dark:bg-zinc-900 rounded">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    {fileContent[0] &&
                      fileContent[0].map((cell, index) => (
                        <th key={index} className="px-4 py-2 text-gray-600">
                          {cell}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {fileContent.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
