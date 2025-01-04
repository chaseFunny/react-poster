import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(
      "container max-w-7xl mx-auto py-4 px-4 min-h-[calc(100vh-8rem)]",
      className
    )}>
      {children}
    </div>
  )
}