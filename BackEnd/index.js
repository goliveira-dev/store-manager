const fs = require('fs/promises')
const path = require('path')
const express = require('express');
const cors = require('cors');
const { log } = require('console');
const app = express();

app.use(express.json())
app.use(cors());

app.get('/', async (req, res) => {
  return res.status(200).json('Conectado com o servidor')
})

// Endpoint que busca por todos os produtos produtos cadastrados
app.get('/products', async (req, res) => {
  try {
    const FileContent = await fs.readFile(path.resolve(__dirname, './products.json'), 'utf-8')
    const data = JSON.parse(FileContent)
    return res.status(200).json(data)
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`)
  }
})

// Endpoint que cadastra novos produtos
app.post('/products', async (req, res) => {
  try {
    const FileContent = await fs.readFile(path.resolve(__dirname, './products.json'), 'utf-8')
    const data = JSON.parse(FileContent)
    const body = req.body
    const getNewid = data.length + 1
    const newProduct = {
      id: getNewid,
      name: body.name,
      price: body.price,
    }
    data.push(newProduct)
    await fs.writeFile(path.resolve(__dirname, 'products.json'), JSON.stringify(data, null, 2), 'utf-8');
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`)
  }
})

app.listen(3001, () => console.log('Servidor rodando na porta 3001'))

