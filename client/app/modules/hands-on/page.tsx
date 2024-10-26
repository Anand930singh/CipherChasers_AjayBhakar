"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios"; // Not currently used but can be useful for other API calls
import { GoogleGenerativeAI } from "@google/generative-ai"; // Not used in this context

// Dynamically import the Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editorContent, setEditorContent] = useState(
    "// Start typing your Solidity code here"
  );
  const [response, setResponse] = useState(""); // State to store the response from the backend
  const [loading, setLoading] = useState(false); // State to handle loading status

  const handleSendCode = async () => {
    setLoading(true); // Set loading to true while waiting for response
    try {
      const prompt = `
        Code: 
        ${editorContent},
        Analyze the give solidity code and find vulnerabilities and displayed vulnerabilities in  HTML and inline CSS. I need HTML code only no any other text and make the UI asthetically pleasing and remember black is used as backgrond in UI .
      `;
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: prompt }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 responses
      }

      const data = await response.json();
      const cleanedOutput = data.output
        .replace(/```html/g, "") // Remove the ```html at the start
        .replace(/```/g, ""); // Remove remaining ```

      console.log(cleanedOutput);
      setResponse(cleanedOutput);
    } catch (error) {
      console.error("Error sending code:", error);
      setResponse("Error: Unable to fetch response.");
    } finally {
      setLoading(false); // Reset loading status
    }
  };

  return (
    <div className="flex min-h-screen">
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          !isSidebarOpen ? "md:mr-0" : "md:mr-[300px]"
        }`}
      >
        <div className="md:hidden flex justify-end mb-4">
          {/* Uncomment if you have a Button component */}
          {/* <Button variant="outline" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button> */}
        </div>
        <div className="hidden md:flex justify-end mb-4">
          {/* Uncomment if you have a Button component */}
          {/* <Button
            variant="outline"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed right-4 top-4 z-20"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button> */}
        </div>

        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Cryptocurrency Learning Platform
          </h1>
          <p className="text-lg mb-4">
            This platform is designed to provide comprehensive learning
            resources about cryptocurrency, blockchain technology, and trading
            strategies.
          </p>
        </section>

        {/* Monaco Editor Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Code Editor</h2>
          <div
            className="editor-container overflow-hidden border border-border"
            style={{
              height: "400px",
              borderRadius: "4px",
            }}
          >
            <MonacoEditor
              height="400px"
              defaultLanguage="solidity" // Change language to Solidity
              theme="vs-dark"
              value={editorContent}
              onChange={(value) => setEditorContent(value || "")}
            />
          </div>
          <button
            onClick={handleSendCode}
            className="mt-4 p-2 bg-slate-100 hover:bg-slate-50 text-black rounded"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send Code"}
          </button>
        </section>

        {/* Response Section */}
        {response && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Response</h2>
            <div className="p-4 border border-gray-300 rounded">
              <div dangerouslySetInnerHTML={{ __html: response }} />{" "}
              {/* Render response as HTML */}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Page;
