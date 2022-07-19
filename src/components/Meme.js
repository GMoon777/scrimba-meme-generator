import React from "react";
import MemeDownloader from "../utils/MemeDownloader";

export default function Meme() {

    const exportRef = React.useRef();
    const [allMemeImages, setAllMemeImages] = React.useState([]);
    const [meme, setMeme] = React.useState({
        randomImage: "https://i.imgur.com/V3xzHRk.jpg",
        topText: "after party at the pipe and slippers?",
        bottomText: "absofuckinglutely",
    });

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        console.log(randomNumber);
        let url = allMemeImages[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <div className="main">
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    className="form--input"
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="bottomText"
                    className="form--input"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className="form--button" onClick={getMemeImage}>
                    Generate New Meme Image 🖼
                </button>
            </div>

            <div className="meme" ref={exportRef}>
                <img src={meme.randomImage} className="meme--image"
                    alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button className="downloadButton" onClick={() => MemeDownloader(exportRef,meme.topText)}>
                DOWNLOAD AND UNLEASH!
            </button>
        </div>
    );
}
