import React, { useEffect, useContext } from "react";
import { Context } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ContainerNarrow } from "./styles";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import LandingPage from "./pages/landing_page";
import SupportPage from "./pages/support_page";
import SurveyPage from "./pages/survey_page";
import InsturctionsPage from "./pages/instructions_page";
import HealthyHacks from "./pages/healthy_hacks_page";
import EmergencyPage from "./pages/emergency_page";
import { en } from "./data";

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (/^en\b/.test(window.navigator.language)) {
      dispatch({ type: "SET_DATA", payload: { data: en, language: "en" } });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <ContainerNarrow>
        <BrowserRouter>
          <Navigation />

          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>

            <Route path="/survey">
              <SurveyPage />
            </Route>

            <Route path="/healthy-hacks">
              <HealthyHacks />
            </Route>

            <Route path="/support">
              <SupportPage />
            </Route>

            <Route path="/instructions">
              <InsturctionsPage />
            </Route>

            <Route path="/emergency">
              <EmergencyPage />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>
      </ContainerNarrow>
    </div>
  );
}

export default App;
