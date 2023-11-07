import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Carts from "./pages/Carts"
import MainLayout from "./layouts/MainLayout"
import "./scss/app.scss"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          path=""
          element={<Home />}
        />
        <Route
          path="cart"
          element={<Carts />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default App
