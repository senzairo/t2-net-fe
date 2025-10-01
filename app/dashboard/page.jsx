"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Sun, Moon } from "lucide-react";

export default function Page() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/splynx/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const equipment = customers.length;
  const active = customers.filter((c) => c.status === "active").length;
  const inactive = customers.filter((c) => c.status !== "active").length;
  const unpaidInvoices = customers.filter((c) => c.has_unpaid_invoice).length;

  const chartData = [
    { name: "Aktif", value: active },
    { name: "Non-aktif", value: inactive },
  ];

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      {/* Sidebar */}
      <AppSidebar variant="inset" />

      {/* Konten */}
      <SidebarInset>
        {/* Header */}
        <header className="flex h-14 items-center gap-2 border-b px-4 lg:px-6">
          <SidebarTrigger className="lg:hidden" />
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="hidden h-5 w-5 dark:block" />
            </Button>
          </div>
        </header>

        {/* Konten utama */}
        <div className="flex flex-1 flex-col px-4 lg:px-6 py-6 gap-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p>Inventarisasi</p>
                <h2>{equipment}</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p>Peralatan</p>
                <h2 className="text-gray-600">{active}</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p>Perangkat</p>
                <h2 className="text-blue-600">{inactive}</h2>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p>Teknisi</p>
                <h2 className="text-purple-600">{unpaidInvoices}</h2>
              </CardContent>
            </Card>
          </div>

          {/* Chart */}
          <div className="bg-transparent p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">
              Customer Aktif vs Non-aktif
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
