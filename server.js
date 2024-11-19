import express from 'express'
import postsRouter from './routes/posts.js'

const app = express();

app.use(express.json())
app.use('/posts', postsRouter)

app.listen(3000, () => {
    console.log("Servidor escutando...");
})