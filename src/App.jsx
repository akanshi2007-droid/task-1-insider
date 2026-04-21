import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
    );
}
export default App;