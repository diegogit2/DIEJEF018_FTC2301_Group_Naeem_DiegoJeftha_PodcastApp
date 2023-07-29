import React from "react"
import Loading from "./Loading"
import ShowDescription from "./ShowDescription"
import Carousel from "./Carousel"
import ShowSeasonsModal from "./ShowSeasonsModal"

export default function PodcastList() {

    const [shows, setShows] = React.useState([]) // Stores list of shows
    const [isLoading, setIsLoading] = React.useState(true) // Indicates whether data is loading
    const [showPreview, setShowPreview] = React.useState(false) // Tracks the currently shown podcast preview
    const [seasonButton, setSeasonButton] = React.useState(null) // Holds the selected season ID for the dialog
    const [openDialog, setOpenDialog] = React.useState(false) // Tracks whether the dialog is open or not
    // const [sortOrder, setSortOrder] = React.useState()

    // Fetches the list of shows when the component mounts using useEffect
    React.useEffect(() => {
        fetchShows()
    }, [])

    const fetchShows = async () => {
        const response = await fetch("https://podcast-api.netlify.app/shows")
        const data = await response.json()
        setShows(data)
        setIsLoading((prevIsLoading => !prevIsLoading)) // Sets isLoading to false once data is fetched
    }


    // Function to toggle the display of the podcast preview
    function togglePreview(show) {
        setShowPreview(show)
    }

    // Function to close the podcast preview
    function handleClose() {
        setShowPreview(null)
    }    

    // Function to set the selected season ID and open the dialog
    function toggleSeasonId(item) {
        setSeasonButton(item)
        setOpenDialog(true)
    }

    function onCloseDialog() {
        // console.log("closing dialog")
        setOpenDialog(false)
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

                {/* Render the podcast preview if showPreview is not null */}
                {showPreview &&
                    (<ShowDescription
                        image={showPreview.image}
                        description={showPreview.description}
                        text={showPreview.description}
                        limit={200}
                        onClose={handleClose}
                        showSeasons={() => toggleSeasonId(showPreview.id)}
                    />)}

                        <ShowSeasonsModal 
                            seasonId={seasonButton}
                            openDialog={openDialog}
                            onClose={onCloseDialog} 
                        />
            </div>
        </div>

    )
}



