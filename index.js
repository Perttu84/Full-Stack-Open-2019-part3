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

app.get('/api/persons/:id', (request, response, next) => {
	Person.findById(request.params.id)
	.then(person => {
		if (person) {
			response.json(person.toJSON())
		} else {
			response.status(404).end()
		}
	})
	.catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
	Person.findByIdAndRemove(request.params.id)
	.then(result => {
		response.status(204).end()
	})
	.catch(error => next(error))
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

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

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