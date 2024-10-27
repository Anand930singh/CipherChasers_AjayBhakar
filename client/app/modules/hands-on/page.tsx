"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("solidity");
  const [editorContent, setEditorContent] = useState(
    language === "solidity" 
      ? "// Start typing your Solidity code here"
      : "// Start typing your Move code here"
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const getHeroContent = (lang: string) => {
    if (lang === "solidity") {
      return {
        title: "Welcome to the Solidity Smart Contract Analyzer",
        description: "Analyze vulnerabilities in your Solidity smart contracts using our advanced Ethereum-focused analysis tools."
      };
    }
    return {
      title: "Welcome to the Move Smart Contract Analyzer",
      description: "Analyze vulnerabilities in your Move smart contracts using our advanced Aptos-focused analysis tools."
    };
  };

  const handleLanguageChange = (event: any) => {
    const value = event.target.value;
    setLanguage(value);
    setEditorContent(
      value === "solidity"
        ? "// Start typing your Solidity code here"
        : "// Start typing your Move code here"
    );
  };

  const handleSendCode = async () => {
    setLoading(true);
    try {
      const prompt = `
        Language: ${language.toUpperCase()}
        Code: 
        ${editorContent}
        Analyze the given ${language} code and find vulnerabilities. Display vulnerabilities in HTML and inline CSS. I need HTML code only, if possible add small part of code having vulnerabilities, no other text, and make the UI aesthetically pleasing with a black background.
      `;
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: prompt }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const cleanedOutput = data.output
        .replace(/```html/g, "")
        .replace(/```/g, "");

      setResponse(cleanedOutput);
    } catch (error) {
      console.error("Error sending code:", error);
      setResponse("Error: Unable to fetch response.");
    } finally {
      setLoading(false);
    }
  };

  // Get hero content based on selected language
  const heroContent = getHeroContent(language);

  return (
    <div className="flex min-h-screen">
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          !isSidebarOpen ? "md:mr-0" : "md:mr-[300px]"
        }`}
      >
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4 transition-all duration-300">
            {heroContent.title}
          </h1>
          <p className="text-lg mb-4 transition-all duration-300">
            {heroContent.description}
          </p>
        </section>

        {/* Code Editor Section with Language Selector */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Code Editor</h2>
          
          {/* Language Selector */}
          <div className="mb-2">
            <select 
              value={language} 
              onChange={handleLanguageChange}
              className="w-40 p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              style={{
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="solidity">Solidity</option>
              <option value="move">Move (Aptos)</option>
            </select>
          </div>

          {/* Editor Container */}
          <div
            className="editor-container overflow-hidden border border-gray-700 rounded-md"
            style={{
              height: "400px",
            }}
          >
            <MonacoEditor
              height="400px"
              defaultLanguage={language}
              theme="vs-dark"
              value={editorContent}
              onChange={(value) => setEditorContent(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: "on",
                automaticLayout: true,
              }}
            />
          </div>
          <button
            onClick={handleSendCode}
            className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Code"}
          </button>
        </section>

        {/* Response Section */}
        {response && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
            <div className="p-4 border border-gray-700 rounded-md bg-gray-900">
              <div dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Page;