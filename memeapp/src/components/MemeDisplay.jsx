import React, { useState, useEffect } from "react";

function MemeDisplay() {
    const [meme, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    // const[error,setError]=useState(null);


    useEffect(() => {
        async function fetchMeme() {
            try {

                const response = await fetch("https://meme-api.com/gimme/50");
                const data = await response.json();
                console.log(data);
                setMemes(data.memes);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching memes:", error);

            }
        }

        fetchMeme();

    }, [])
    // query

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{meme.map((meme, index) => (
            <div className="bg-white p-4 rounded-lg shadow-lg" key={index}>
                {/* params */}
                <h2 className="text-lg font-semibold mb-2">{meme.title}</h2>
                <img className="rounded-md w-full object-cover" src={meme.url} alt={meme.title} />
            </div>))}
        </div>
    )

}

export default MemeDisplay