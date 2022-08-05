import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import Tour from './Screens/Tours'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Checkout from './Screens/Checkout'
import Payment from './Screens/Payment'
import Page404 from './Components/404'
import Footer from './Components/Footer'

import ConferenceServices from './Pages/ConferenceServices'
import AgentsAffiliates from './Pages/AgentsAffiliates'
import PrivacyCookies from './Pages/PrivacyCookies'
import Accessibility from './Pages/Accessibility'
import PrivateTours from './Pages/PrivateTours'
import StudentTours from './Pages/StudentTours'
import TermsConditions from './Pages/TermsConditions'
import Faq from './Pages/Faq'

function App() {

  const [inputText, setInputText] = useState("")
  const [selectAdults, setSelectAdults] = useState("")
  const [selectChildren, setSelectChildren] = useState("")
  const [selectSenior, setSelectSenior] = useState("")
  const [selectStudents, setSelectStudents] = useState("")
  const [date, setDate] = useState(new Date('Pick Your Tour Date'))
  const [tourBooking, setTourBooking] = useState([])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tour" 
          element={
          <Tour 
            inputText={inputText}
            setInput={setInputText}
            selectAdults={selectAdults}
            setSelectAdults={setSelectAdults}
            selectChildren={selectChildren}
            setSelectChildren={setSelectChildren}
            selectSenior={selectSenior}
            setSelectSenior={setSelectSenior}
            selectStudents={selectStudents}
            setSelectStudents={setSelectStudents}
            date={date}
            setDate={setDate}
            tourBooking={tourBooking}
            setTourBooking={setTourBooking} />}  
          />
        <Route path="/*" element={<Page404 />} />

        <Route path="/conferenceservices" element={<ConferenceServices />} />
        <Route path="/agentsaffiliates" element={<AgentsAffiliates />} />
        <Route path="/privacycookies" element={<PrivacyCookies />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privatetours" element={<PrivateTours />} />
        <Route path="/studenttours" element={<StudentTours />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/faq" element={<Faq />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
