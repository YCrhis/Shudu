import UIHeader from "@/components/generic/UIHeader"
import React from "react"

interface Props {
    children: React.ReactNode
}

const LayoutIn = ({children}:Props) => {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">
       {/* Header */}
      <UIHeader/>

      {children}</main>
  )
}

export default LayoutIn