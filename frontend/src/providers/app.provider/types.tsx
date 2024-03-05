import { Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "~/types";

export interface AppProviderProps {
  children: ReactNode;
}

export interface RoundData {
  name : string;
  points: number;
  multiplier: number;
}
export interface Game { 
  round : number; 
  lastRoundData : RoundData[]
  points : number;
  player : User;
  _id : string;
}

export interface AppState {
  langs: Record<string, unknown>;
  preferences: Preferences;
  user: User | null;
  isAuthenticated: boolean;
  game : Game | null;
  newRoundResults : any;
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
