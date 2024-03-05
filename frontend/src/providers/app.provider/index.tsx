import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AppContextProps, AppProviderProps, AppState, Preferences } from "./types";
import { useLocalStorage } from "~/hooks";
import { APP_CONTEXT_STATE } from "./data";
import { GatewayKeys, StorageKeys } from "~/configs";
import useWebSocket from "~/hooks/utils/useWebSocket";


// initializing context
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// setting a helper function to use context
export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

export function AppProvider({
  children,
}: AppProviderProps) {
  const [appState, setAppState] = useState<AppState>(APP_CONTEXT_STATE);
  const [preferences, setPreferences] = useLocalStorage<Preferences>(StorageKeys.preferences, APP_CONTEXT_STATE.preferences);
  const {receivedData} = useWebSocket({eventsToListen : [GatewayKeys.game.gameCreated]})
  const {receivedData : nweRoundResults }= useWebSocket({eventsToListen : [GatewayKeys.round.roundResult]})

  useEffect(() => {
    setAppState((prevState) => ({
      ...prevState,
      game : receivedData,
    }));
  }, [receivedData])
  
  
  useEffect(() => {
    console.log('nweRoundResults' , nweRoundResults)
    setAppState((prevState) => ({
      ...prevState,
      game : nweRoundResults,
    }));
  }, [nweRoundResults])
  
  
  const updatePreferences = useCallback(
    (newPreferences: Preferences) => {
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        ...newPreferences,
      }));

      setAppState((prevState) => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          ...newPreferences,
        },
      }));
    },
    [setPreferences, setAppState, preferences]
  );

  const contextValue: AppContextProps = {
    appState,
    setAppState,
    updatePreferences,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export * from './data'
export * from './types'
