import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "~/types";

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppState {
  langs: Record<string, unknown>;
  preferences: Preferences;
  user: User | null;
  isAuthenticated: boolean;
}

export interface AppContextProps {
  appState: AppState;
  setAppState: Dispatch<SetStateAction<AppState>>;
  updatePreferences: (newPreferences: Preferences) => void;
}

export interface Preferences {
  lang: string;
  theme: "light" | "dark";
}
