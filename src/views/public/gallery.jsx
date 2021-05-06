import PicCard from '../../components/PicCard'
export default function Gallery(props) {
    const pics = [
        {
            url: "/assets/rockin-out1.jpg",
            alt: "Isabel 8 first concert as headlining act",
            caption: "Isabel 8's First Concert As Headlining Act"

        },
        {
            url: "/assets/rockin-out2.jpg",
            alt: "Isabel 8 performing a ballad in Luxemburg Germany April twenty-fourth 2015",
            caption: "During a Ballad at a Concert in Luxemburg, Germany, April 24, 2015"
        },
        {
            url: "/assets/rockin-out3.jpg",
            alt: "Isabel 8 backed up by a full orchestra in London England May fifteenth 2020",
            caption: "Isabel 8 Backed by a Full Orchestra in London, England, May 15, 2020"
        },
        {
            url: "/assets/rockin-out4.jpg",
            alt: "closeup of frontman Rocky Whiteside for Isabel 8 in Washington D.C., July 4, 2019",
            caption: "Frontman Rocky Whiteside in Washington D.C., July 4, 2019"
        },
        {
            url: "/assets/rockin-out5.png",
            alt: "closeup of founder bassist Jordan Burke in Salt Lake City Utah September sixth 2018 ",
            caption: "Band's Founder Bassist Jordan Burke in Salt Lake City, UT, September 6, 2018"
        },
        {
            url: "/assets/rockin-out6.jpg",
            alt: "profile of founder bassist Jordan Burke in Salt Lake City Utah September sixth 2018",
            caption: "Band's Founder Bassist Jordan Burke in Salt Lake City, UT, September 6, 2018"
        },
        {
            url: "/assets/rockin-out7.png",
            alt: "closeup of drummer Theodore Miner in Pasadena, California October thirteenth 2017",
            caption: "Drummer Theodore Miner in Pasadena, CA October 13, 2017"
        },
        {
            url: "/assets/rockin-out8.jpg",
            alt: "keyboardist Saya Mento in studio in Hollywood California circa 2016",
            caption: "Keyboardist Saya Mento in Studio in Hollywood, CA, circa 2016"
        },
        {
            url: "/assets/rockin-out9.jpg",
            alt: "Isabel 8's tour bus leaving a town in the midwestern United States",
            caption: "Isabel 8's Tour Bus Leaving a Town in the Midwestern United States"
        },
        {
            url: "/assets/rockin-out10.jpg",
            alt: "Fans of Isabel 8 at a concert in Shanghai China August twenty-third 2017",
            caption: "Fans at a Concert in Shanghai, China, August 23, 2017"
        },
        {
            url: "/assets/rockin-out11.jpg",
            alt: "Isabel 8 concert in Paris France June eighteenth 2018",
            caption: "Performing in Paris, France, June 18, 2018"
        },
        {
            url: "/assets/rockin-out12.jpg",
            alt: "Isabel 8 in front of a sold-out crowd in Houston Texas June third 2020",
            caption: "With a Sold-out Crowd in Houston, Texas, June 3, 2020"
        },
    ]
    return (
        <div>
            <h1>Gallery</h1>
            <section className="picGallery">
                {pics.map((pic) =>
                    <PicCard pic = {pic}/>
                )}
            </section>
        </div>
    )
}

// export default GalleryDisplay;
