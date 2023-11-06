import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import { HydrationScript } from "solid-js/web";

const Root = lazy(() => import("./pages/Root"));
const Foo = lazy(() => import("./pages/Foo"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Counter</title>
        <HydrationScript />
        <script src="/src/entry-client.tsx" type="module" async />
      </head>
      <body>
        <div id="app">
          <Routes>
            <Route path="/" component={Root}>
              <Route
                path="/"
                element={
                  <main>
                    <h2>Home</h2>
                  </main>
                }
              />
              <Route path="foo" component={Foo} />
              <Route path="*all" component={NotFound} />
            </Route>
          </Routes>
        </div>
      </body>
    </html>
  );
};
