import { Hello } from "hello";
import { onCleanup, onMount } from "solid-js";

export default () => {
  onMount(() => {
    console.log("foo:onmount");
  });

  onCleanup(() => {
    console.log("foo:oncleanup");
  });

  return (
    <main>
      <h2>Foo</h2>
      <Hello to="moo" />
    </main>
  );
};
