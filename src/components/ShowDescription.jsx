import React from "react"

export default function ShowDescription(show) {

    const [isExpanded, setIsExpaned] = React.useState(false)

    const readMore = show.text.length > show.limit ? `${show.text.slice(0, show.limit)}...` : show.text

    function toggleReadMore() {
        setIsExpaned((prevIsExpanded) => !prevIsExpanded)
    }

    return (
        <div className="show-preview">

            <div className="show-content">

                <img className="preview-image" src={show.image} alt={show.title} />

                <p className="preview-description">{isExpanded ? show.text : readMore}</p>

                <div className="bottom-buttons">
                    {!show.isExpanded && (
                        <button className="preview-read-more" onClick={toggleReadMore}>
                            Read More
                        </button>
                    )}

                    <button onClick={show.onClose} className="preview-close" >
                        Close
                    </button>

                    <button className="preview-watch">
                        Seasons
                    </button>
                </div>
            </div>

        </div>
    )
}