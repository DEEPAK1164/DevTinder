import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections"
import Requests from "./components/Requests";
function App() {
 
  return (
    <>
<Provider store={appStore}>

<BrowserRouter basename="/">
  <Routes>
   
   {/* parent route */}
    <Route  path="/" element={<Body/>}>

    {/* children routes */}
        
        <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/connections" element={<Connections/>}></Route>      
        <Route path="/requests" element={<Requests/>}></Route>      
    </Route>

  </Routes>
</BrowserRouter>

</Provider>
    </>
  )
}

export default App