import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Pie,
  Bar,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";

import "./App.css";

export default function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl text-white p-3 hover:drop-shadow-xl  bg-blue-600 hover:bg-blue-900 rounded-full transition-colors duration-500"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          <div
            className={`dark:bg-secondary-dark-bg fixed sidebar truncate bg-white ${
              activeMenu ? "w-72" : "w-0"
            }`}
          >
            <Sidebar />
          </div>
          <div
            className={`body dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              <Navbar />
            </div>
            <button
              onClick={() => {
                setActiveMenu(!activeMenu);
              }}
            >
              click
            </button>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/employees" element="Employees" />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
