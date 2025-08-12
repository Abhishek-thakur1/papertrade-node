import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Server is up and running!' })
})

app.get('/api/test', (_req: Request, res: Response) => {
	res.json({
		success: true,
		data: {
			user: 'Test User',
			balance: 100000,
			positions: [],
		},
	})
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
