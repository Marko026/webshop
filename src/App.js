import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";
import Admin from "./Pages/Admin";
import LayoutRouter from "./Components/LayoutRouter";
const App = () => {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutRouter />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
