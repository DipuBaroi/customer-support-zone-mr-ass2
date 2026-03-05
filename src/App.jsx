
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



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Tickets customersPromise={customersPromise}></Tickets>

      <Footer></Footer>


    </>
  )
}

export default App
