import troll from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="h-16 flex items-center text-white bg-gradient-to-r from-purple-800 to-fuchsia-600 p-5">
            <img src={troll} alt="troll face" className="h-full mr-1" />
            <h2 className="text-xl mr-auto">Meme Generator</h2>
            {/* <h4 className="text-sm font-medium">React Course - Project 3</h4> */}
        </header>
    )
}