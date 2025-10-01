import DataTable from "@/components/DataTable"

export default function TeknisiPage() {
  const columns = ["ID", "Nama Teknisi", "Spesialisasi", "Status"]
  const data = [
    ["1", "Budi", "Jaringan", "Aktif"],
    ["2", "Andi", "Hardware", "Non-aktif"],
  ]

  return <DataTable title="Teknisi" columns={columns} data={data} />
}
