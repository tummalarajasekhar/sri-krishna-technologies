import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

import PrivacyPolicy from './component/PrivacyPolicy.jsx';
import TermsAndConditions from './component/TermsAndConditions.jsx';


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<App />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /></Routes>

    
    </Router>
  </StrictMode>,
)
