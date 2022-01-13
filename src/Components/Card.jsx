import React from "react"


const Card = () => {

    const [cardName, setCardName] = React.useState("Untitled card")
    const [cardDescript, setCardDescript] = React.useState("")

    const [showInput, setShowInput] = React.useState(false)
    // const [showDescriptInput,setShowDescriptInput]=React.useState(false)
    const [showDescript, setShowDescript] = React.useState(false)

    const saveCardName = (e) => {
        setCardName(e.target.value)
    }

    const saveCardDescript = (e) => {
        setCardDescript(e.target.value)
    } 

        const enter = (e) => {
        if (e.key === 'Enter') {
                setShowInput(false)
        } 
    }

    return (
        <div className="card-list">            
             <div className="card" onClick={()=>setShowDescript(!showDescript)}>
                <div className="card-name">
                    <h4 className="card-title" onClick={(e)=>{e.stopPropagation(); setShowInput(true)}}>{showInput ? <input onKeyDown={enter} type="text" value={cardName} onChange={saveCardName}/> : <span>{cardName === "" ? "Add card name" : cardName}</span>}</h4>
                </div>
                { showDescript && (
                    <p className="description" onClick={(e)=>{e.stopPropagation(); setShowInput(true)}}>
                        {showInput ? 
                        <input onKeyDown={enter} type="text" value={cardDescript} onChange={saveCardDescript}/> : 
                        <span>{cardDescript === "" ? "Add description" : cardDescript}</span>}
                    </p>)}
            </div>
           
        </div>
    )
}

export default Card