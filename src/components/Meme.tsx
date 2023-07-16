import { useState, useEffect } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/22bdq6.jpg",
    })

    const [allMemes, setAllMemes] = useState<any[]>([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event: any) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <main className="p-9">
            <div className="grid grid-rows-2 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Top text" className="h-9 font-karla border border-solid border-slate-300 rounded-md indent-1"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />

                <input
                    type="text"
                    placeholder="Bottom text" className="h-9 font-karla border border-solid border-slate-300 rounded-md indent-1"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />

                <button
                    className="h-10 col-span-2 font-karla bg-gradient-to-r from-purple-800 to-fuchsia-600 border-none text-white cursor-pointer"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="relative">
                <img src={meme.randomImage} className="max-w-full rouned-sm" />
                <h2 className="meme-text top-0">{meme.topText}</h2>
                <h2 className="meme-text bottom-0">{meme.bottomText}</h2>
            </div>
        </main>
    )
}