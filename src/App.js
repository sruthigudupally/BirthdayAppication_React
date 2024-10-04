

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Empty from './pages/Empty.jsx'

function App() {
  return (
    // <div className="App">
    //  <Homepage/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      
      <Route path="/empty" element={<Empty/>}/>
     
    </Routes>
    </BrowserRouter>
    // </div>
  );

}

export default App;
