import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import SignupPage from './pages/Auth/Signup';
import LoginPage from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Main';
import ProtectedRoute from './utils/protectedRoute';
import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';
import Posts from './pages/Dashboard/Posts';
import NewPost from './pages/Dashboard/Posts/New';
import EditPost from './pages/Dashboard/Posts/Edit';
import EmailVerify from './pages/Auth/VerifyEmail';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="min-h-full h-screen flex flex-col">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter>
            <NavBar />
            <ToastContainer />
            <div className="w-full h-full relative flex">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/verify-email/:id" element={<EmailVerify />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <SideBar isSelected="dashboard" />
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/posts"
                  element={
                    <ProtectedRoute>
                      <SideBar isSelected="posts" />
                      <Posts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/posts/new"
                  element={
                    <ProtectedRoute>
                      <SideBar isSelected="posts" />
                      <NewPost />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/posts/edit/:id"
                  element={
                    <ProtectedRoute>
                      <SideBar isSelected="posts" />
                      <EditPost />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
