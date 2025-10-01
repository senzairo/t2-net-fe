import DataTable from "@/components/DataTable"

export default function PerangkatPage() {
  const columns = ["ID", "Nama Perangkat", "Status", "Pengguna"]
  const data = [
    ["1", "Laptop Dell", "Aktif", "Teknisi A"],
    ["2", "Printer HP", "Non-aktif", "Admin"],
  ]

  return <DataTable title="Perangkat" columns={columns} data={data} />
}
