import { Router } from "@solidjs/router";
import { renderToStream, renderToString } from "solid-js/web";
import App from "./App";

export function render(res: { write: (v: string) => void }, url: string) {
  // TODO hot reload not working even with 1.8.5
  // https://github.com/solidjs/solid/issues/1917
  // renderToStream(() => (
  //   <Router url={url}>
  //     <App />
  //   </Router>
  // )).pipe(res);
  return renderToString(() => (
    <Router url={url} out={res}>
      <App />
    </Router>
  ));
}
