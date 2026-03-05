
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'


const fetchCustomers = async()=>{
    const res = await fetch('./tickets.json')
    return res.json()
  }
const customersPromise = fetchCustomers()





function App() {

const [inProgress, setInProgress] = useState(0)
const [resolved, steResolved] = useState(0)
const [selectedTicket, setSelectedTicket] = useState([])
const [resolvedTicket, setResolvedTicket] = useState([])

const handleInProgress = (ticket)=>{
 setInProgress(inProgress+1)
 setSelectedTicket([...selectedTicket, ticket])
}

const handleResolved = (ticket) =>{
  setSelectedTicket(selectedTicket.filter(tic => tic.id !== ticket.id))
  steResolved(resolved+1)
  setInProgress(inProgress-1)
  setResolvedTicket([...resolvedTicket, ticket])
}



  return (
    <>
      <Navbar></Navbar>
      <Banner 
      inProgress={inProgress}
      resolved={resolved}
      ></Banner>

      <Tickets 
      customersPromise={customersPromise}
      handleInProgress={handleInProgress}
      selectedTicket={selectedTicket}
      handleResolved={handleResolved}
      resolvedTicket={resolvedTicket}
      ></Tickets>

      <Footer></Footer>


    </>
  )
}

export default App
