import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

export interface NotificationState {
  isOpen: boolean;
  severity: 'info' | 'success' | 'warning' | 'error';
  message: string;
};

const NOTIFICATIONS_INITIAL_STATE: NotificationState = {
  isOpen: false,
  severity: 'info',
  message: '',
};

// Initializing context with a default value and explicit type
const NotificationsContext = createContext<{
  notification: NotificationState;
  notify: (severity: NotificationState['severity'], message: string, manualDismiss?: boolean) => void;
  dismiss: () => void;
}>({
  notification: NOTIFICATIONS_INITIAL_STATE,
  notify: () => undefined,
  dismiss: () => undefined,
});

// Setting a helper function to use context
export const useNotifications = () => useContext(NotificationsContext);

interface NotificationsProviderProps {
  children: ReactNode;
}

export function NotificationsProvider({ children }: NotificationsProviderProps) {
  const [notification, setNotification] = useState<NotificationState>(NOTIFICATIONS_INITIAL_STATE);

  const dismiss = useCallback(() => setNotification(NOTIFICATIONS_INITIAL_STATE), []);

  const notify = useCallback((severity: NotificationState['severity'], message: string, manualDismiss = false) => {
    setNotification({ isOpen: true, severity, message });
    if (!manualDismiss) setTimeout(dismiss, 3000);
  }, []);

  return (
    <NotificationsContext.Provider value={{ notification, notify, dismiss }}>
      {children}
    </NotificationsContext.Provider>
  );
}
