import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh w-screen">
      <ResizablePanelGroup className="" direction="horizontal">
        <ResizablePanel
          className="hidden min-w-[250px] max-w-[300px] md:block"
          defaultSize={15}
        >
          <div className="h-full">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <div className="h-dvh">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}

export default DashboardLayout;
