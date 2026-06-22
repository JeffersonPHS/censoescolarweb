import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './View/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
        
        <Route index element={<Home />} />
        
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;