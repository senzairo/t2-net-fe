import DataTable from "@/components/DataTable"

export default function InventarisasiPage() {
  const columns = ["ID", "Nama Barang", "Kategori", "Jumlah"]
  const data = [
    ["1", "Router Mikrotik", "Jaringan", "5"],
    ["2", "Switch Cisco", "Jaringan", "2"],
  ]

  return <DataTable title="Inventarisasi" columns={columns} data={data} />
}
