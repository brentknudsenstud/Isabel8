const express = require('express')
    const cors = require('cors')

        const app = express()
        app.use(cors())
        app.use(express.json());
        const port = 7000
        
        app.get('/', (request, res) => {
            res.send('Welcome to the Isabel 8 Official Band App!')
        });

        app.get('/songclips', (request, response) => {
            
            const songclips = [
                {name: 'Morning Comes', soundclip: '/assets/morning-comes.ogg', image: '/assets/morning-comes.jpg'},
                {name: 'Bending Time', soundclip: '/assets/bending-time.ogg', image: '/assets/bending-time.jpg'},
                {name: 'Crossover', soundclip: '/assets/crossover.ogg', image: '/assets/crossover.png' },
                {name: 'Pillars of Innocence', soundclip: '/assets/pillars-of-innocence.ogg', image: '/assets/pillars-of-innocence.jpg'},
                {name: 'Phoenix Sunfire', soundclip: '/assets/phoenix-sunfire.ogg', image: '/assets/phoenix-sunfire3.png'},
                {name: 'Bottled Up Inside', soundclip: '/assets/bottled-up-inside.ogg', image: '/assets/bottled-up-inside.jpg'},
                {name: 'Rising Meteor', soundclip: '/assets/rising-meteor.ogg', image: '/assets/rising-meteor.jpg'},
                {name: 'Blue Rain', soundclip: '/assets/blue-rain.ogg', image: '/assets/blue-rain.jpg'},
                {name: 'Expressionistic Reality', soundclip: '/assets/expressionistic-reality.ogg', image: '/assets/expressionistic-reality.jpg'},
                {name: 'Soaking Up the Thunder', soundclip: '/assets/soaking-up-the-thunder.ogg', image: '/assets/soaking-up-the-thunder.jpg'},
                {name: 'Chains of Liberty', soundclip: '/assets/chains-of-liberty.ogg', image: '/assets/chains-of-liberty3.jpg'}
            ]
            response.send(songclips);
        })
        
        app.listen(port, () => {
            console.log(`Music app listening at http://localhost:${port}`)
          })