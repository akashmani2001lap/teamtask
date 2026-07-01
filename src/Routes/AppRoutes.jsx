import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../Components/Home"
import TopicPage from "../Components/TopicPage"
const AppRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/topics/:id" element={<TopicPage />} />
    </Routes>
  )
}

export default AppRoutes