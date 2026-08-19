import express from 'express'

const app = express()

// Our stored contact data list
let persons = [
  { "id": "1", "name": "Arto Hellas", "number": "040-123456" },
  { "id": "2", "name": "Ada Lovelace", "number": "39-44-5323523" },
  { "id": "3", "name": "Dan Abramov", "number": "12-43-234345" },
  { "id": "4", "name": "Mary Poppendieck", "number": "39-23-6423122" }
]

// Waiter 1: Home page order
app.get('/', (req, res) => {
  res.send('<h1>Hello World from Part 3 Backend!</h1>')
})

// Waiter 2: Raw data list order
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// Waiter 3: The Summary Info page order (Your logic lives here now!)
app.get('/info', (req, res) => {
  const totalEntries = persons.length
  const currentDate = new Date()

  // We use res.send() here because we are sending custom HTML text layout, not raw list data
  res.send(`
    <p>Phonebook has info for ${totalEntries} people</p>
    <p>${currentDate}</p>
  `)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Part 3 backend listening on port ${PORT}`)
})
