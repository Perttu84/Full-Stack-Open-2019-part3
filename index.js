require('dotenv').config()
const express = require('express')
const app= express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))
app.use(express.static('build'))

morgan.token('type', function (req, res) { return JSON.stringify(req.body) })

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
  	response.json(persons.map(person => person.toJSON()))
  })
})

app.get('/api/persons/:id', (request, response) => {
	Person.findById(request.params.id).then(person => {
		response.json(person.toJSON())
	})
})

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	persons = persons.filter(p => p.id !== id)

	response.status(204).end()
})

app.post('/api/persons', (request, response) => {
	const body = request.body

	if (!body.name) {
		return response.status(400).json({
			error: "name missing"
		})
	}

	if (!body.number) {
		return response.status(400).json({
			error: "number missing"
		})
	}

	const person = new Person({
		name: body.name,
		number: body.number,
	})
    console.log(person)
	person.save().then(savedPerson=> {
		response.json(savedPerson.toJSON())
	})
})

app.get('/info', (request, response) => {
  const numberOfPersons = persons.length
  const date = new Date()
  response.send(
  	`<div>Phonebook has info for ${numberOfPersons} people</div>
  	 <div>${date}</div>`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})