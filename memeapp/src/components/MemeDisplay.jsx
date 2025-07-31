
// import React, { useState, useEffect } from "react";

// // function to display the memes
// function MemeDisplay() {
//     const [meme, setMemes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');


//     // hook to fetch the memes from the API
//     useEffect(() => {
//         async function fetchMeme() {
//             try {
//                 const response = await fetch("https://meme-api.com/gimme/50");
//                 const data = await response.json();
//                 // json data

//                 console.log(data);
//                 setMemes(data.memes);
//                 setLoading(false);
//                 // set the loading to false when the data is fetched

//             } catch (error) {
//                 console.error("Error fetching memes:", error);
//             }
//         }
//         fetchMeme();
//     }, [])
//     // query

//     // if the data is not fetched then return the loading state
//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     // result of the data fetched from the API
//     return (



//         <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{meme.map((meme, index) => (
//             <div className="bg-white p-4 rounded-lg shadow-lg" key={index}>
//                 {/* params */}
//                 <h2 className="text-lg font-semibold mb-2">{meme.title}</h2>
//                 <img className="rounded-md w-full object-cover" src={meme.url} alt={meme.title} />
//             </div>))}
//         </div>
//     )

// }

// export default MemeDisplay;


// <div className="mb-4 flex justify-center">

// </div>


// here the data is fetched from the API and displayed
// importing the hooks and React state
import React, { useEffect, useState } from 'react';

function MemeDisplay() {
    // State variables to manage memes store in array
    const [memes, setMemes] = useState([]);

    //   loading state to show loading indicator
    const [loading, setLoading] = useState(true);

    // State for random meme
    const [randomMeme, setRandomMeme] = useState(null);

    // State for custom memes stored in an array
    const [customMemes, setCustomMemes] = useState([]);

    //   State for upload URL stored in a string
    const [uploadUrl, setUploadUrl] = useState('');

    //   State for comments stored in an object
    const [comments, setComments] = useState({});

    //   State for reactions stored in an object
    const [reaction, setReaction] = useState({});

    //   State for search term stored in a string
    const [searchTerm, setSearchTerm] = useState('');

    //   State for count to load more memes
    const [count, setCount] = useState(20);

    useEffect(() => {
        fetchMemes();
    }, [count]);

    // Function to fetch(read) memes from the API
    const fetchMemes = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://meme-api.com/gimme/${count}`);
            const data = await response.json();
            setMemes(data.memes);
        } catch (err) {
            console.error('Failed to fetch memes', err);
        } finally {
            setLoading(false);
        }
    };

// Function to get a random meme from the  combined list of memes and custom memes
    const getRandomMeme = () => {
        const allMemes = [...memes, ...customMemes];
        const random = allMemes[Math.floor(Math.random() * allMemes.length)];
        setRandomMeme(random);
    };

 // Function to handle uploading a custom meme
    const handleUpload = () => {
        if (uploadUrl.trim()) {
            const customMeme = {
                title: 'Custom Meme',
                url: uploadUrl
            };
            setCustomMemes(prev => [...prev, customMeme]);
            setUploadUrl('');
        }
    };
  // Function to add a comment to a meme
    const addComment = (url, text) => {
        setComments(prev => ({ ...prev, [url]: text }));
    };

 // Function to toggle reaction on a meme
    const toggleReaction = (url) => {
        setReaction(prev => ({ ...prev, [url]: !prev[url] }));
    };


    // Currently searchTerm filters automatically
    // This function can be used to trigger search explicitly if needed
    const handleSearch = () => {
        console.log('Searching memes for:', searchTerm);
    };
    const filteredMemes = [...customMemes, ...memes].filter(m =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


// Function to render(display) each meme card
    const renderMemeCard = (meme, index) => (

        <div className="bg-white p-4 rounded shadow-md" key={index}>
            {/* Displaying the meme title and image */}
            <h2 className="text-lg font-bold mb-2">{meme.title}</h2>
            <img src={meme.url} alt={meme.title} className="rounded w-full mb-2" />

            {/* Reaction and download button for each meme */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => toggleReaction(meme.url)}
                    className={`text-xl ${reaction[meme.url] ? 'text-red-500' : 'text-gray-400'}`}
                >
                    {reaction[meme.url] ? '❤️' : '🤍'}
                </button>

                {/* Download button */}
                <a
                    href={meme.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                >
                    Download
                </a>
            </div>

            {/* Adding comments */}
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-1 border rounded"
                    value={comments[meme.url] || ''}
                    onChange={(e) => addComment(meme.url, e.target.value)}
                />
                {comments[meme.url] && (
                    <p className="text-sm text-gray-600 mt-1">😁 {comments[meme.url]}</p>
                )}
            </div>
        </div>
    );









    
    // Main component return
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6"></h1>

            
                </>
            )}
        </div>
    );
}

export default MemeDisplay;
