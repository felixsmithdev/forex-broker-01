"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

const sidebarItems = [
  { id: "overview", label: "Overview" },
  { id: "regulation", label: "Regulation & Safety" },
  { id: "faq", label: "FAQ" },
  { id: "related-brokers", label: "Related Brokers" },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("overview")

  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-64 lg:flex-col lg:pt-16">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 py-8">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-1">
              <li className="mb-4">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  FXTRADING.com Guide
                </div>
              </li>
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setActiveItem(item.id)}
                    className={cn(
                      "group flex gap-x-3 rounded-lg px-3 py-2.5 text-sm font-medium leading-6 transition-all",
                      activeItem === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
