import { useState, useEffect } from 'react'
import SongClip from '../../components/SongClip'

export default function SongClips(props) {
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
                    <SongClip songclip = {songclip}/>
                ))}
            </section>
        </div>
    )


}