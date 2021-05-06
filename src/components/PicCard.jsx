export default function PicCard({pic}){
    return (
        <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={pic.url} alt={pic.alt} />
                            </div>
                            <div className="flip-card-back">
                                <p>{pic.caption}</p>
                            </div>
                        </div>
                    </div>
    )
}