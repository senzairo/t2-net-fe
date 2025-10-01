"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function InventarisasiTable() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("/api/inventarisasi")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
