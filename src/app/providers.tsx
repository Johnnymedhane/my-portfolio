"use client";

import type { ReactNode } from "react";
import { AppProvider } from "../contexts/contextApi";
import { ProjectsProvider } from "../contexts/ProjectsContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <ProjectsProvider>
        {children}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "25px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "600px",
              padding: "16px 24px",
              color: "var(--white)",
              backgroundColor: "var(--grey)",
            },
          }}
        />
      </ProjectsProvider>
    </AppProvider>
  );
}
