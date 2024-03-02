import { Home } from "./pages";
import { AppProvider, NotificationsProvider, ThemeProvider } from "./providers";
import { ReactQueryProvider } from "./providers/react-query.provider";

function App() {
  return (
    <ReactQueryProvider>
      <AppProvider>
        <ThemeProvider>
          <NotificationsProvider>
            <Home />
          </NotificationsProvider>
        </ThemeProvider>
      </AppProvider>
    </ReactQueryProvider>
  );
}

export default App;
