import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/login";
import { BenefitsPage } from "./pages/benefits";
import { MainLayout } from "./components/layouts";

function App() {
  return (
    <main className="bg-black min-w-screenmin- h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
