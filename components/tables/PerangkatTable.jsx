"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PerangkatTable() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("/api/perangkat")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Jenis</TableHead>
          <TableHead>SN</TableHead>
          <TableHead>Merk</TableHead>
          <TableHead>Peralatan ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.nama}</TableCell>
            <TableCell>{item.jenis}</TableCell>
            <TableCell>{item.sn}</TableCell>
            <TableCell>{item.merk}</TableCell>
            <TableCell>{item.peralatanId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
