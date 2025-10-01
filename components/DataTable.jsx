export default function DataTable({ title, columns, data }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <table className="w-full border border-gray-700">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="border px-4 py-2 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="border px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
