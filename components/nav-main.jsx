"use client"

import * as React from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import { IconChevronRight } from "@tabler/icons-react"

export function NavMain({
  items
}) {
   const [openIndex, setOpenIndex] = React.useState(null)

   const toggleMenu = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item, i) => (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton 
               onClick={() => toggleMenu(i)}
                className="flex items-center justify-between"
               >
                <div className="flex items-center gap-2">
                {item.icon && <item.icon />}
                <span>{item.title}</span>
               </div>
               {item.items && (
                    <IconChevronRight
                      className={`transition-transform ${
                      openIndex === i ? "rotate-90" : ""
                  }`}
              />
              
            )}
              </SidebarMenuButton>

              {/* Submenu */}
            {item.items && openIndex === i && (
                  <SidebarMenuSub>
                      {item.items.map((sub, j) => (
                        <SidebarMenuSubItem key={j}>
                            <SidebarMenuSubButton href={sub.url}>
                                {sub.icon && <sub.icon className="!size-4" />}
                                <span>{sub.title}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
