import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './utils/protectedRoute';
import { UserProvider } from './contexts/UserContext';
import NavBar from './layouts/NavBar';
import SideBar from './layouts/SideBar';
import Posts from './pages/Dashboard/Posts';
import NewPost from './pages/Dashboard/Posts/NewPost';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="min-h-full h-screen flex flex-col">
      <ToastContainer />
      <NavBar />
      <div className="w-full h-full relative flex">
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <SideBar />
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/posts"
                element={
                  <ProtectedRoute>
                    <SideBar />
                    <Posts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/new-post"
                element={
                  <ProtectedRoute>
                    <SideBar />
                    <NewPost />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
