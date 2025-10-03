"use client"

import * as React from "react"
import {
  IconDashboard,
  IconNotebook,
  IconTool,
  IconDeviceLaptop,
  IconUser,
  IconInnerShadowTop,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"

const data = {
  user: {
    name: "rangga",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
      items: [
        { title: "Inventarisasi", url: "/inventarisasi", icon: IconNotebook },
        { title: "Peralatan", url: "/peralatan", icon: IconTool },
        { title: "Perangkat", url: "/perangkat", icon: IconDeviceLaptop },
        { title: "Teknisi", url: "/teknisi", icon: IconUser },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Header → logo/judul */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <IconInnerShadowTop className="!size-5" />
              <span className="text-base font-semibold">T2Net Dashboard</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Utama */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer → user info */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
