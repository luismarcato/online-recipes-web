import { LoadingState } from "@/components/LoadingState";
import api from "@/services/api";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface User {
  name: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function saveSession(token: string, user: User) {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("user", JSON.stringify(user));
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function clearSession() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  delete api.defaults.headers.Authorization;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        saveSession(token, parsedUser);
        setUser(parsedUser);
      } catch {
        clearSession();
      }
    }
    setLoading(false);
  }, []);

  const signIn = useCallback(
    async (credentials: { email: string; password: string }) => {
      try {
        const { data } = await api.post("/auth/signin", credentials);

        saveSession(data.accessToken, data.user);
        setUser(data.user);

        navigate("/receitas");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Falha ao conectar-se");
      }
    },
    []
  );

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
    navigate("/entrar", { replace: true });
  }, []);

  const value = useMemo(
    () => ({
      user,
      signIn,
      logout,
      isAuthenticated: !!user,
      loading,
    }),
    [user, signIn, logout, loading]
  );

  if (loading) return <LoadingState />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

