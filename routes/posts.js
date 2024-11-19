import express from 'express'

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato tomando sol na janela", imagem: "https://placecats.com/random/300/200" },
    { id: 3, descricao: "Gatinho curioso explorando a caixa", imagem: "https://placecats.com/cute/300/150" },
    { id: 4, descricao: "Dois gatos brincando com um novelo de lã", imagem: "https://placecats.com/playful/300/200" },
    { id: 5, descricao: "Gata dormindo em uma cesta", imagem: "https://placecats.com/sleepy/300/150" },
    { id: 6, descricao: "Gato comendo ração", imagem: "https://placecats.com/hungry/300/200" }
]

function findPost(id) {
    return posts.find(element => element.id == id)
}

const router = express.Router()

router.get('/', (req, res) => {
    res.json(posts)
})

router.get('/:id', (req, res) => {
    res.json(findPost(req.params.id))
})

export default router