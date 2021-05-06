import {useState, useEffect} from 'react'

export default function SongClips (props) {
const [songclips, setSongClips] = useState([])
useEffect(() => {
    fetch('http://localhost:7000/songclips')
    .then(response => response.json())
    .then(songlist => {
        setSongClips(songlist)
    })
}, [])    
        
            return (
                <div>
                <h1>Music</h1>
                <h3>Unmastered Song Clips from Upcoming Album tentatively titled "Fast Forward to the Future"</h3>
                <section className="musicClips">
                    {songclips.map((songclip) => (
                     <div>
                        <h4>{songclip.name}</h4>
                        <audio key={songclip.name} controls>
                        <source src={songclip.soundclip} type="audio/ogg" />
                        Your browser can not play audio files.
                    </audio> 
                    </div>          
                  )    
                    )}
                </section>
                </div>
            )
       

}