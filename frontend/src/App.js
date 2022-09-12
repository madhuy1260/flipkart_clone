import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./Context/DataProvider";
import { Box } from "@mui/material";
import DetailedView from "./components/details/DetailedView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailedView />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
