import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {MainPage} from "./pages/MainPage.jsx";
import {CartPage} from "./pages/CartPage.jsx";
import {Page404} from "./pages/Page404.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path={'/cart'} element={<CartPage/>}/>
          <Route path={'*'} element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App