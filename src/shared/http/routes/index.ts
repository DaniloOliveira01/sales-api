import { Router } from "express"

const routes = Router()

routes.get("/", (req, res) => {
  return res.json({ nome: "test" })
})

export default routes