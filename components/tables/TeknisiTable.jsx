"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TeknisiTable() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("/api/teknisi")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Kategori</TableHead>
          <TableHead>Peralatan ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.nama}</TableCell>
            <TableCell>{item.kategori}</TableCell>
            <TableCell>{item.peralatanId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
