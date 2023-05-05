import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import TestPreview from "./pages/TestPreview/TestPreview";
import Assessments from "./pages/Assesssments/Assessments";
import TestEdit from "./pages/Assesssments/TestEdit/TestEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div class="grid grid-cols-12">
          <div class="col-span-3 ">
            <Sidebar />
          </div>
        </div>
        <div className="pl-18 ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/testpreview" element={<TestPreview />} />
            <Route path="/testedit" element={<TestEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
