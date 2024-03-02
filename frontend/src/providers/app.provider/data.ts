import { AppState } from "./types";

export const APP_CONTEXT_STATE: AppState = {
    langs: {},
    user: null,
    isAuthenticated: false,
    preferences: {
      lang: "en",
      theme: "dark",
    },
  };
  
  
  