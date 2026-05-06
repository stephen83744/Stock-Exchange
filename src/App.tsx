
import SignUp from "./SignupPage.tsx";
import LoginPage from "./LoginPage.tsx";
import MarketNewsPage from "./marketNewsPage.tsx";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TradePage from "./tradePage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<SignUp />} />
        <Route path ="/market" element={<MarketNewsPage />} />
        <Route path="/trade" element={<TradePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
