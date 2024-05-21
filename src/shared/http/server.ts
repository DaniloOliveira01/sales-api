import express, { NextFunction, Request, Response, response } from "express"
import cors from "cors"
import routes from "./routes"
import AppError from "@shared/errors/AppError"
import "@shared/typeorm"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use(routes)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "Error",
      message: error.message
    })
  }

  return response.status(300).json({
    status: "Error",
    message: "Internal server error!"
  })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})