import React, { PropsWithChildren } from "react"

const PrimaryButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="px-8 py-2 shadow-md bg-primary text-light rounded-md transition duration-300 ease-in-out transform hover:bg-gradient-to-r from-primary to-secondary active:translate-y-1 active:translate-x-0">
      {children}
    </button>
  )
}

export default PrimaryButton
