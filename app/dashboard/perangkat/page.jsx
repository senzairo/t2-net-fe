import { PerangkatTable } from "@/components/tables/PerangkatTable"

export default function PerangkatPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Perangkat</h1>
      <PerangkatTable />
    </div>
  )
}
