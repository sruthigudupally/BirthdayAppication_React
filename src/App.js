

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Empty from './pages/Empty.jsx';
import Error from './pages/Error.jsx';
function App() {
  return (
    // <div className="App">
    //  <Homepage/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/empty" element={<Empty/>}/>
     
    </Routes>
    </BrowserRouter>
    // </div>
  );

}

export default App;
