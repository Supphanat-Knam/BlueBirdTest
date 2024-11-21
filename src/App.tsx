import "./App.css";
import "./Animation.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlueBirdRoutes from "./routes/route";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen m-0 p-0">
        <Navbar />
        <Suspense>
          <Routes>
            {BlueBirdRoutes.map((route, index) =>
              route.index ? (
                <Route key={index} index element={route.element} />
              ) : (
                <Route key={index} path={route.path} element={route.element} />
              )
            )}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
