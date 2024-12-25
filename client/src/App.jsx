import Header from "./components/header"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import ProductPage from "./pages/Product"
import SignupPage from "./pages/Signup"
import RegistrationPage from "./pages/Registration"
import PersonalDetailsPage from "./pages/PersonalDetails"
import ProfessionalDetailsPage from "./pages/ProfessionalDetails"
import UploadDocumentPage from "./pages/UploadDocument"


function App() {
  return (
    <>
      <Routes>
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/PersonalDetailsPage" element={<PersonalDetailsPage />} />
        <Route path="/ProfessionalDetailsPage" element={<ProfessionalDetailsPage />} />
        <Route path="/UploadDocumentPage" element={<UploadDocumentPage />} />
      </Routes>
    </>
  )
}

export default App
