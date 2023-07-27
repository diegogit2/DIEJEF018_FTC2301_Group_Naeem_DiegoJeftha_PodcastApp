import React from "react"
import Loading from "./Loading"
import ShowDescription from "./ShowDescription"
import Carousel from "./Carousel"

export default function PodcastList() {

    const [shows, setShows] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [showPreview, setShowPreview] = React.useState(false)


    React.useEffect(() => {
        fetchShows()
    }, [])

    const fetchShows = async () => {
        const response = await fetch("https://podcast-api.netlify.app/shows")
        const data = await response.json()
        setShows(data)
        setIsLoading((prevIsLoading => !prevIsLoading))
    }

    function togglePreview(show) {
        setShowPreview(show)
    }

    function handleClose() {
        setShowPreview(null)
    }    

    return (
        <div>

            <div>
                <Carousel />
            </div>

            <h4 className="podcast-title">All Shows</h4>
            <div className="podcast-list">

                {!isLoading ? <Loading /> : (shows.map(show => (
                    <div key={show.id} className="show-item">
                        <img src={show.image} onClick={() => togglePreview(show)} />
                        <h6>{show.title}</h6>
                    </div>))
                )}

                {showPreview &&
                    (<ShowDescription
                        image={showPreview.image}
                        description={showPreview.description}
                        text={showPreview.description}
                        limit={200}
                        onClose={handleClose}
                    />)}

            </div>


        </div>



    )
}



