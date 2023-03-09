import type { ReactNode } from 'react'

export const GlowingCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card relative h-[260px] cursor-pointer rounded-xl border border-neutral-200/10 bg-[rgba(20,20,20,.1)] transition-opacity before:absolute before:top-0 before:left-0 before:z-[3] before:h-full before:w-full before:rounded-[inherit] before:opacity-0 before:content-[''] after:absolute after:top-0 after:left-0 after:z-[1] after:h-full after:w-full after:rounded-[inherit] after:opacity-0 after:content-[''] hover:before:opacity-100 group-hover:after:opacity-100">
      <div className="absolute inset-px z-[2] flex items-center justify-center rounded-[inherit] bg-[rgb(23,23,23)] p-[10px] text-white">
        {children}
      </div>
    </div>
  )
}
