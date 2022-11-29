import React, { useState } from 'react'
import "./single.css"
import {AiFillPlusSquare ,AiFillMinusSquare} from "react-icons/ai"

const SingleQuestion = ({title, info}) => {

    const[showInfo, setShowInfo]= useState(false)

  return (
    <>
    <article className="main__question">
        <header className= "sq__header">
            <h4>{title}</h4>
            <div className="btn">
                {!showInfo?<AiFillPlusSquare className="btn-qa" onClick={()=>setShowInfo(true)}/>:(
                    <AiFillMinusSquare className="btn-qa" onClick={()=>setShowInfo(false)}/>
                )}
                
            </div>
        </header>
        
        {showInfo?(
            <p>
            {info}
        </p>
        ): ""}
        
    </article>
    </>
  )
}

export default SingleQuestion