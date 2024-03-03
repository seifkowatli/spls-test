import { Home } from "./pages";
import {
  AppProvider,
  EmotionCacheProvider,
  NotificationsProvider,
  ThemeProvider,
} from "./providers";
import { ReactQueryProvider } from "./providers/react-query.provider";

function App() {
  return (
    <ReactQueryProvider>
      <AppProvider>
        <ThemeProvider>
          <EmotionCacheProvider>
            <NotificationsProvider>
              <Home />
            </NotificationsProvider>
          </EmotionCacheProvider>
        </ThemeProvider>
      </AppProvider>
    </ReactQueryProvider>
  );
}

export default App;
