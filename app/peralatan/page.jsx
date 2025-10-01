import DataTable from "@/components/DataTable"

export default function PeralatanPage() {
  const columns = ["ID", "Nama Peralatan", "Kondisi", "Lokasi"]
  const data = [
    ["1", "Obeng", "Baik", "Gudang"],
    ["2", "Tang", "Baik", "Gudang"],
  ]

  return <DataTable title="Peralatan" columns={columns} data={data} />
}
