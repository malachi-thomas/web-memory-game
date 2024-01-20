
import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => Bun.file("../frontend/src/index.html"))
  .get("/static/styles.css", () => Bun.file("../frontend/src/styles.css"))
  .get("/static/htmx.js", () => Bun.file("../frontend/src/htmx.js"))
  .get("/assets/Kalam-Light.ttf", () => Bun.file("../frontend/assets/Kalam-Light.ttf"))
  .get("/assets/Kalam-Regular.ttf", () => Bun.file("../frontend/assets/Kalam-Regular.ttf"))
  .get("/assets/Kalam-Bold.ttf", () => Bun.file("../frontend/assets/Kalam-Bold.ttf"))
  .get("/static/htmx.js", () => Bun.file("../frontend/src/htmx.js"))
  .listen(3000)



