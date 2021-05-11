export default function SongClip({ songclip }) {
    return (
        <div>
            <p> </p>
            <img src={songclip.image} />
            <h4>{songclip.name}</h4>
            <audio key={songclip.name} controls>
                <source src={songclip.soundclip} type="audio/ogg" />
                        Your browser can not play audio files.
            </audio>
        </div>
    )
}