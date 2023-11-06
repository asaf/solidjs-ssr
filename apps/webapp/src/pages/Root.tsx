import { NavLink, Outlet } from "@solidjs/router";
import { Suspense } from "solid-js";

export default () => {
  return (
    <>
      <header>
        <h1>Solid JS</h1>
        <h3>with Routing and SSR using Stackblitz Web Containers</h3>
      </header>
      <nav>
        <NavLink href="/" end>
          Home!
        </NavLink>
        {" | "}
        <NavLink href="foo">Foo</NavLink>
        {" | "}
        <NavLink href="bar">Bar</NavLink>
        {" | "}
        <NavLink href="baz">Baz</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  );
};
