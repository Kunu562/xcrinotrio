import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './auth/signup/signup';
import Login from './auth/login/login';
import Otp from './auth/otp/otp';
import Ats from './ats/ats';
import Profile from './profile/profile';
// import Message from './message/message';
import Submit from './profilesubmit/submit';
import Landing from './landingpage/landing';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path='/ats' element={<Ats />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/message' element={<Message/>}/> */}
          <Route path='/submit' element={<Submit />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
