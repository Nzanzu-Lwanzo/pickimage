import "./assets/css/reset.css";
import "./assets/css/normalize.css";
import "./assets/css/theme.css";
import "./assets/css/global.css";
import Studio from "./components/studio";
import { StudioContextProvider } from "./lib/contexts/studio";

function App() {
  return (
    <StudioContextProvider>
      <Studio />
    </StudioContextProvider>
  );
}

export default App;
