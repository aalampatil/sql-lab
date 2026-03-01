import Editor from "@monaco-editor/react";
import { UseDataContext } from "../context/Context";

function SqlEditor() {
  const { query, setQuery, executeQuery, current } = UseDataContext();

  function handleQuery() {
    executeQuery(current, query);
    console.log(1);
  }

  return (
    <div className="flex flex-col h-full w-full border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <h3 className="font-semibold">SQL Query Editor</h3>
        <button
          onClick={handleQuery}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Run Query
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          width="100%"
          language="sql"
          value={query}
          onChange={(value) => setQuery(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}

export default SqlEditor;
