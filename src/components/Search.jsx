import React from "react"
import Fuse from "fuse.js"

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState("") // Store users search input
    const [searchResults, setSearchResults] = React.useState([]); // Store results of search
    const [podcasts, setPodcasts] = React.useState([]); // Store podcast data
    const [fuse, setFuse] = React.useState(null); // Store initialized Fuse instance

    React.useEffect(() => {
        fetchPodcasts()
    }, [])

    const fetchPodcasts = async () => {
        try {
            const res = await fetch("https://podcast-api.netlify.app/shows");
            const data = await res.json();
            setPodcasts(data);
        } catch (error) {
            console.error("Error fetching podcasts:", error);
        }
    };

    React.useEffect(() => {
        if (podcasts.length > 0) {
            setFuse(new Fuse(podcasts, { keys: ["title"], includeScore: true, threshold: 0.4 }));

        }
    }, [podcasts])

    const handleInputChange = (event) => {  // Updates searchQuery state with users input
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {  // Checks if search query is empty, if it is,
        if (searchQuery.trim() === "") {  // sets the searchResults state to empty array
            setSearchResults([]);
        } else {                  // otherwise use the fuse instance to do the search and updates searchResult state 
            const results = fuse.search(searchQuery).map((result) => result.item);  //with the search results
            setSearchResults(results);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search for podcasts"
            />
            <button onClick={handleSearchClick} className="search-button">Search</button>

            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((podcast) => (
                        <div key={podcast.id} className="search-result-item">
                            <img src={podcast.image} alt={podcast.title} width="50" height="50" />
                            <span>{podcast.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
