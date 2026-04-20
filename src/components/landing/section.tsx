import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  )
}
