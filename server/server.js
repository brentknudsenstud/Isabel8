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
                {name: 'Morning Comes', soundclip: '/assets/morning-comes.ogg'},
                {name: 'Bending Time', soundclip: '/assets/bending-time.ogg'},
                {name: 'Crossover', soundclip: ''},
                {name: 'Pillars of Innocence', soundclip: '/assets/pillars-of-innocence.ogg'},
                {name: 'Phoenix Sunfire', soundclip: '/assets/phoenix-sunfire.ogg'},
                {name: 'Bottled Up Inside', soundclip: ''},
                {name: 'Rising Meteor', soundclip: ''},
                {name: 'Blue Rain', soundclip: '/assets/blue-rain.ogg'},
                {name: 'Expressionistic Reality', soundclip: ''},
                {name: 'Soaking Up the Thunder', soundclip: ''},
                {name: 'Chains of Liberty', soundclip: ''}
            ]
            response.send(songclips);
        })
        
        app.listen(port, () => {
            console.log(`Music app listening at http://localhost:${port}`)
          })