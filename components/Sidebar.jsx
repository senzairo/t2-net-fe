import { Home, Wrench, Monitor, User, FileText } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0f172a] text-white flex flex-col">
      {/* Menu list */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 p-2 hover:bg-[#1e293b] rounded cursor-pointer">
            <Home size={18} />
            <span>Dashboard</span>
          </li>
          <li className="ml-6 flex items-center gap-2 p-2 hover:bg-[#1e293b] rounded cursor-pointer">
            <FileText size={18} />
            <span>Inventarisasi</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-[#1e293b] rounded cursor-pointer">
            <Wrench size={18} />
            <span>Peralatan</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-[#1e293b] rounded cursor-pointer">
            <Monitor size={18} />
            <span>Perangkat</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-[#1e293b] rounded cursor-pointer">
            <User size={18} />
            <span>Teknisi</span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
