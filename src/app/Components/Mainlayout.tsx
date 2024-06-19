import React from 'react'

function Mainlayout({children}) {
  return (
    <div>
        {/* <h1>mychatting app</h1> */}
        <main>{children}</main>
    </div>
  )
}

export default Mainlayout