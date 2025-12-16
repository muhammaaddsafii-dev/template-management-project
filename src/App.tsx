import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PraKontrakPage from "./pages/PraKontrakPage";
import LelangPage from "./pages/LelangPage";
import PekerjaanPage from "./pages/PekerjaanPage";
import TenagaAhliPage from "./pages/TenagaAhliPage";
import AlatPage from "./pages/AlatPage";
import LegalitasPage from "./pages/LegalitasPage";
import ArsipPage from "./pages/ArsipPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import BeritaAcaraPage from "./pages/BeritaAcaraPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pra-kontrak" element={<PraKontrakPage />} />
          <Route path="/lelang" element={<LelangPage />} />
          <Route path="/pekerjaan" element={<PekerjaanPage />} />
          <Route path="/tenaga-ahli" element={<TenagaAhliPage />} />
          <Route path="/alat" element={<AlatPage />} />
          <Route path="/legalitas" element={<LegalitasPage />} />
          <Route path="/berita-acara" element={<BeritaAcaraPage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
