import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import UserSignup from './pages/UserSignup/UserSignup';
import UserSearch from './pages/UserSearch/UserSearch';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/UserSearch' element={<UserSearch />} />
        <Route path='/UserSignup' element={<UserSignup />} />
        <Route path='/user/:id' element={<ProfileCard />} />
        <Route path='/SignupSuccess/:id' element={<Homepage signup={true}/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
