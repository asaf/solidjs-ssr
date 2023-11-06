import { hydrate } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";

hydrate(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document
);
