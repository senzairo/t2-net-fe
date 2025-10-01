"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Menu } from "lucide-react"

export default function ClientLayoutWrapper({ children }) {
  const { toggleSidebar } = useSidebar()

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AppSidebar variant="inset" />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col p-6">
        {/* Navbar */}
        <div className="p-2 bg-gray-900 text-white flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-700 rounded-md"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-2x1 font-bold">T2Net Dashboard</h1>
        </div>

        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}