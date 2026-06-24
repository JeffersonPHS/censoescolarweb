import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './View/Home';
import InstituicaoEnsino from './View/InstituicaoEnsino'
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>


        
        <Route index element={<Home />} />
      
       <Route path="Listagem" element={<InstituicaoEnsino />}/>
       <Route path="Home" element={<Home />}/>
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;