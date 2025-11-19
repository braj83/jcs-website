"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, ReactNode } from "react";

interface CalTriggerProps {
  children: ReactNode;
  onOpen?: () => void;
}

export default function CalTrigger({ children, onOpen }: CalTriggerProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#D3FF50" },
          dark: { "cal-brand": "#D3FF50" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button 
      onClick={onOpen}
      data-cal-namespace="30min"
      data-cal-link="marko-jcs/30min"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
      className="appearance-none bg-transparent border-none p-0 flex justify-end"
      aria-label="Open calendar booking"
    >
      {children}
    </button>
  );
}