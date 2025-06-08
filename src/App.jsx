
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SystemContextProvider } from "./Contexts/SystemContext.jsx";
import PublicHome from './Views/PublicHome.jsx'
import Event1 from './Views/Event_1.jsx'
import Resume from './Views/Resume.jsx'
import "./App.css"
import './i18n';

function App() {

  return (
    <>
        <SystemContextProvider>
        <Router>
          <Routes>
          <Route index element={<PublicHome />} />
          <Route  path='/apoyo-duelo' element={<Event1 />} />
          <Route path='/about-me' element={<Resume />} />
           </Routes>
        </Router>
      </SystemContextProvider>
    </>
  )
}
export default App;
