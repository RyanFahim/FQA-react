import React, { useState } from 'react'
import data from "./data"
import './qna.css'
import SingleQuestion from "../Question/SingleQuestion"

const QnA = () => {
    const [question, setQuestion] = useState(data)
    
    
    return (
        <>
            <div className="container__qna container" style={{backgroundCOlor:'red'}}>
                <div className="q__title" style={{ backgroundColor: "white" }}>
                    <h3 className= "q__title-h3">Frequenty asked question</h3>
                </div>

                <div className="main">
                    {question.map(question=>{
                        
                        return <SingleQuestion key={question.id} {...question}/>;                   
                    })}
                </div>
            </div>
        </>
    )
}

export default QnA