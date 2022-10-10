import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profiles/ProfilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect } from 'react';

function AppRoutingOne() {
  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  }, [logged]);

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/login">| LOGIN ||</Link>
        </aside>

        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route
              path="/profile"
              element={logged ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/task:id" element={<TaskDetailPage />} />
            <Route path="/login" element={<LoginPage/>}/>

            {/* 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
