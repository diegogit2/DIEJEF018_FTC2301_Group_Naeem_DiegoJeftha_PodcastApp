import React from "react"
import ShowDescription from "./ShowDescription"

export default function Carousel() {
    const [carousel, setCarousel] = React.useState([])
    const [selectedShow, setSelectedShow] = React.useState(false)

    const maxImages = 15;
    const displayedCarousel = carousel.slice(0, maxImages)


    React.useEffect(() => {
        fetchShows()
    }, [])   


    const fetchShows = async () => {
        const response = await fetch("https://podcast-api.netlify.app/shows")
        const data = await response.json()
        setCarousel(data)
    }

    function togglePreview(show) {
        setSelectedShow(show)
    }

    function handleClose() {
        setSelectedShow(null)
    }

    return (
        <div className="carousel-box">
            <h4></h4> {/* to be decided*/}

            {displayedCarousel.map(show => (
                <div key={show.id} className="carousel">
                    <img
                        src={show.image}
                        className="carousel-images"
                        alt={show.title}
                        onClick={() => togglePreview(show)}
                    />
                </div>))
            }

            {selectedShow && (
                <ShowDescription  
                image={selectedShow.image}
                description={selectedShow.description}
                text={selectedShow.description}
                limit={200}
                onClose={handleClose} />
            )}

        </div>
    )
}