import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthGuard from "./Guard/AuthGuard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import { store } from "./Store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
