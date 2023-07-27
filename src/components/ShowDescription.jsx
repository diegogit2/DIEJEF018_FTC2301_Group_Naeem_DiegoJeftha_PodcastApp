import React from "react"

export default function ShowDescription( showId ) {

    const [isExpanded, setIsExpaned] = React.useState(false)
    
    const readMore = showId.text.length > showId.limit ? `${showId.text.slice(0, showId.limit)}...` : showId.text

    function toggleReadMore() {
        setIsExpaned((prevIsExpanded) => !prevIsExpanded)
    }

    return (
        <div className="show-preview">

            <div className="show-content">

                <img className="preview-image" src={showId.image} alt={showId.title} />

                <p className="preview-description">{isExpanded ? showId.text : readMore}</p>

                <div className="bottom-buttons">
                    {!showId.isExpanded && (
                        <button className="preview-read-more" onClick={toggleReadMore}>
                            Read More
                        </button>
                    )}

                    <button onClick={showId.onClose} className="preview-close" >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}