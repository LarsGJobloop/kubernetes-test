import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LayoutBase } from "./layouts/LayoutBase/LayoutBase";
import { LandingPage } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
