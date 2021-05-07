

export default function HomePage(props) {
    return (
        <div className="index-container">
            <h1>Home</h1>
            <div className="index-para-container">

                <div className="imageandpara">
                    <div className="paragraph">
                        <p>Isabel 8 is a band that has been around for about a decade and a half. It has been described as fusion of classic rock with modern and techno influences. Like a glass ball it warps our sense of reality and bends our vision of what is real.</p>
                        <img className="indeximages" src="./assets/glassball.jpg" alt="hand holding glass ball against sunset" />
                    </div>
                    <div className="paragraph">
                        <p>With Isabel 8's sound, be transported to a place that lets you feel like you're walking along a beach with a calm surf while simultaneously noticing multiple meteors above thrusting through the atmosphere and diving into the ocean.</p>
                        <img className="indeximages" src="./assets/bluehallway.jpg" alt="blue hallway with three people standing in it" />
                    </div>
                    <div className="paragraph">
                        <p>In addition to classic rock with modern and techno influences, Isabel 8 has a slight orhestral feel because of lead guitarist Bryce Chawsta's being adept at the violin and other classical instruments. Bryce was classically trained before branching out into rock music.</p>
                        <img className="indeximages"src="./assets/fracturedglass.jpg" alt="fractured looking glass window overlooking distant mountain range" />
                    </div>
                </div>
            </div>
        </div>
    )
}