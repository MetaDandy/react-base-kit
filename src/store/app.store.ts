import { AppState } from "@/types/appState";
import { indexedDBMiddleware } from "../middleware/indexdb.middleware";
import { create } from "zustand";

const useAppStore = create<AppState>(
  indexedDBMiddleware(
    (set) => ({
      theme: "system",
      alert: false,
      lockScreen: false,
      modal: false,
      setTheme: (theme) => set({ theme }),
      setAlert: (alert) => set({ alert }),
      setLockScreen: (lockScreen) => set({ lockScreen }),
      setModal: (modal) => set({ modal }),
    }),
    "app-state",
    ["alert", "lockScreen", "modal"]
  )
);

export default useAppStore;
