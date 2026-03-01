import React from "react";
import { UseDataContext } from "../context/Context";

function Result() {
  const { result, loading, message } = UseDataContext();

  if (loading) {
    return <div className="p-4">Running query...</div>;
  }

  if (!result) {
    return <div className="p-4">Run a query to see results</div>;
  }

  const columns = result.length > 0 ? Object.keys(result[0]) : [];

  return (
    <div className="p-4">
      {/* ✅ Correct / Incorrect message */}
      <div
        className={`mb-3 font-semibold ${
          message === "Correct " ? "text-green-600" : "text-red-600"
        }`}
      >
        {message}
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {columns.map((col) => (
                <th key={col} className="border px-4 py-2 text-left">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {columns.map((col) => (
                  <td key={col} className="border px-4 py-2">
                    {row[col]?.toString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
