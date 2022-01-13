import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'

const id = () => {
  let id = 0

  const getId = () => {
      id = id + 1
      return id
  }
  return getId
}

const getId = id()

function App() {

  const [dashboardIds, setDashboardIds] = React.useState([ 
    getId()
  ])

  const addDashboard = () =>{
    setDashboardIds([...dashboardIds, getId()])
  }

  const removeDashboard = (id) => {
    const newArray=[]
   for (const dashboardId of dashboardIds) {
       if(id !== dashboardId){
           newArray.push(dashboardId)
       }
   }
   setDashboardIds(newArray)
}
  
  return (
    <div className="App">
      { dashboardIds.map ((dashboardId) =>
      (<div className="dashboard-holder" key={dashboardId}> 
        <Dashboard  /> 
        <button className="delete-dashboard" onClick={()=> removeDashboard(dashboardId) }>✕</button> 
      </div>)
      )}
      <button onClick={addDashboard} className="add-dashboard">+</button>
    </div>
  );
}

export default App;
