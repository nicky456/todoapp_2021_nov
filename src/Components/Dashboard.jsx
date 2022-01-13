import React from "react";
import Card from "./Card";

const id = () => {
    let id = 0
  
    const getId = () => {
        id = id + 1
        return id
    }
    return getId
  }
  
  const getId = id()

const Dashboard = () => {

    const [cardIds, setCardIds] = React.useState([ ]) 
    

    const addCard = () => {
        setCardIds([...cardIds, getId()])    
    }

    const removeCard = (id) => {
        const newArray=[]
       for (const cardId of cardIds) {
           if(id !== cardId){
               newArray.push(cardId)
           }
       }
       setCardIds(newArray)
    }


    const [dashboardName, setDashboardName] = React.useState("Untitled dashboard")
    const [showInput, setShowInput] = React.useState(false)

    const enter2 = (e) => {
        if (e.key === 'Enter') {
                setShowInput(false)
        } 
    }

    const saveDashboardName = (e) => {
            setDashboardName(e.target.value)
    }

    return (
        <div className="dashboard">
            <button onClick={addCard} className="create-card">+</button>
            <h2 className="dashboard-title" onDoubleClick={()=>setShowInput(!showInput)}>
                {showInput ? 
                <input onKeyDown={enter2} type="text" value={dashboardName} onChange={saveDashboardName}/> : 
                <span>{dashboardName === "" ? "Add your dashboard name" : dashboardName}</span>}
            </h2>  
            {
                cardIds.map(cardId => (
                    <div className="cardholder" key={cardId}>
                        <Card /> 
                        <button className="delete" onClick={()=> removeCard(cardId) }>✕</button> 
                    </div>
                ))
            }  
             
        </div>
    )
}

export default Dashboard;