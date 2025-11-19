import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Index from "./pages/Index";
import MainLayout from "./components/layout/MainLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/ui/sonner";
import About from "./pages/About";
import ProtectedRoute from "./routes/ProtectedRoute";
import SubmitRecipe from "./pages/SubmitRecipe";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Navigate to="/receitas" replace />} />
                <Route path="receitas" element={<Index />} />
                <Route path="sobre" element={<About />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="nova-receita" element={<SubmitRecipe />} />
                </Route>
              </Route>

              <Route path="/registrar" element={<SignUp />} />
              <Route path="/entrar" element={<SignIn />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster richColors />
    </>
  );
}

export default App;

