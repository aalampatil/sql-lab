import React from "react";
import { UseDataContext } from "../context/Context";

export default function DatabaseSchema() {
  const { challengeData, current } = UseDataContext();

  // Find selected challenge
  const currentChallenge = challengeData.find((c) => c.challengeId === current);

  if (!currentChallenge) {
    return <div className="p-4">Select a challenge to view schema</div>;
  }

  const tables = currentChallenge.sampleTables;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Database Schema</h2>

      {tables.map((table) => (
        <div key={table.tableName} className="border rounded-md p-3">
          <h3 className="font-semibold mb-2">{table.tableName}</h3>

          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1 text-left">Column</th>
                <th className="border px-2 py-1 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {table.columns.map((col) => (
                <tr key={col.columnName}>
                  <td className="border px-2 py-1">{col.columnName}</td>
                  <td className="border px-2 py-1 text-gray-600">
                    {col.dataType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
