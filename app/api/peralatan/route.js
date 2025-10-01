import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

export async function GET() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbinventori"
  })
  const [rows] = await connection.execute("SELECT * FROM peralatan")
  return NextResponse.json(rows)
}
