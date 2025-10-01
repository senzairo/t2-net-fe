import { TeknisiTable } from "@/components/tables/TeknisiTable"

export default function TeknisiPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Teknisi</h1>
      <TeknisiTable />
    </div>
  )
}