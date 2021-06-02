import React from 'react'

function Wrapper (props) {
    return (
        <>
         <main className="container-fluid flex-fill">
           {props.children}
       </main>
        </>
    )
}

export default Wrapper 