import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import { useEffect} from "react";
import { Toaster } from "sonner";

const App = () => {

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  }, [])

  return (
    <div className="">
      <NavBar />
      <main>
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </div>
  )
}

export default App
