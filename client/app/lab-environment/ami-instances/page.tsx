"use client";

import React, { useState } from "react";
import { Plus, Play, Loader2, Trash2 } from "lucide-react";

function Terminal({ id, onDelete, onRun }) {
  const [command, setCommand] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState("100px");

  const handleInputChange = (e) => {
    setCommand(e.target.value);
    // Automatically adjust height based on content
    const lines = e.target.value.split('\n').length;
    setHeight(`${Math.max(100, lines * 24)}px`);
  };

  const handleRun = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: command }),
      });
      
      const data = await response.json();
      setResult(data.output || 'No output');
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg mb-4 bg-[#1e1e1e] text-white overflow-hidden">
      <div className="flex items-center justify-between p-2 bg-[#2d2d2d] border-b border-gray-700">
        <span className="text-sm text-gray-400">In [{id}]:</span>
        <div className="flex gap-2">
          <button
            onClick={handleRun}
            disabled={!command.trim() || isLoading}
            className={`p-1 rounded hover:bg-gray-700 ${
              !command.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Run"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-1 rounded hover:bg-gray-700"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <textarea
        value={command}
        onChange={handleInputChange}
        style={{ height }}
        className="w-full bg-[#1e1e1e] p-4 focus:outline-none resize-none font-mono"
        placeholder="Type your command here..."
      />
      
      {result && (
        <div className="border-t border-gray-700">
          <div className="p-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Out [{id}]:
          </div>
          <pre className="p-4 whitespace-pre-wrap font-mono text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}

function Page() {
  const [terminals, setTerminals] = useState([{ id: 1 }]);

  const addTerminal = () => {
    const newId = Math.max(0, ...terminals.map(t => t.id)) + 1;
    setTerminals([...terminals, { id: newId }]);
  };

  const deleteTerminal = (id) => {
    setTerminals(terminals.filter(terminal => terminal.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Code Terminal</h1>
        <button
          onClick={addTerminal}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Add new terminal"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-4">
        {terminals.map((terminal) => (
          <Terminal
            key={terminal.id}
            id={terminal.id}
            onDelete={deleteTerminal}
          />
        ))}
      </div>

      {terminals.length === 0 && (
        <div className="text-center p-8 text-gray-500">
          No terminals open. Click the + button to add one.
        </div>
      )}
    </div>
  );
}

export default Page;