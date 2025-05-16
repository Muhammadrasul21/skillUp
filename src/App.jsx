import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maqolalar from "./components/Maqolalar";
import Layout from "./components/Layout";
import Course from "./pages/course/Course";
import NewCourse from "./pages/course/NewCourse";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maqolalar" element={<Maqolalar />} />
          <Route path="/course" element={<Course />} />
          <Route path="/newcourse" element={<NewCourse />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
