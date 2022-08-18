import memesData from '../memesData'

export default function Meme() {

    // console.table(memesData.data.memes)

    const memeInfo = memesData.data.memes.map((meme) => {
        console.log(meme.url)
    })

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}