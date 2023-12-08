import React, { PropsWithChildren } from "react"

const SecondaryButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="px-8 py-2 shadow-md rounded-md transition duration-300 ease-in-out transform hover:bg-primary hover:text-light border border-primary active:translate-y-1 active:translate-x-0">
      {children}
    </button>
  )
}

export default SecondaryButton
