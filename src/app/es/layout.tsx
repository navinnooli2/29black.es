"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function FrLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} />

        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>

      <MobileNav onToggleMenu={() => setSidebarOpen(!sidebarOpen)} />
      <ScrollToTop />
    </>
  );
}
