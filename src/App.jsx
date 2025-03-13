
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SystemContextProvider } from "./Contexts/SystemContext.jsx";
import PublicHome from './Views/PublicHome.jsx'
import Event1 from './Views/Event_1.jsx'
import "./App.css"
import './i18n';

function App() {

  return (
    <>
        <SystemContextProvider>
        <Router>
          <Routes>
          <Route index element={<PublicHome />} />
          <Route  path='/event1' element={<Event1 />} />
           </Routes>
        </Router>
      </SystemContextProvider>
    </>
  )
}
export default App;
