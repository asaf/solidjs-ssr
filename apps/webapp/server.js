import express from "express";
import { createServer as createViteServer } from "vite";

async function createServer(root = process.cwd()) {
  const app = express();

  const server = await createViteServer({
    root,
    logLevel: "debug",
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  });

  // use vite's connect instance as middleware
  app.use(server.middlewares);

  app.use("/favicon.ico", (_, res) => res.status(204));

  app.use("*", async (req, res) => {
    try {
      const { render } = await server.ssrLoadModule("./src/entry-server.tsx");
      // const context = render(res, req.originalUrl)

      let html;
      try {
        html = render(res, req.originalUrl);
      } catch (err) {
        console.error(err);
      } finally {
        res.send(html);
      }
      // TODO HMR is doing troubles: https://github.com/solidjs/solid/issues/1917
      // render(res, req.originalUrl);

      // if (context.url) {
      //   res.status(302).redirect(context.url)
      // }
    } catch (e) {
      if (e.message !== "Rendering aborted") {
        server && server.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
      }
    }
  });

  return { app, server };
}

createServer().then(({ app }) =>
  app.listen(3009, () => {
    console.log("http://localhost:3009");
  })
);
