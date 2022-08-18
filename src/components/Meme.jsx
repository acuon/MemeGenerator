import memesData from "../memesData";

export default function Meme() {
  // console.table(memesData.data.memes)

  function getMemeInfo() {
    const memesArray = memesData.data.memes;
    const getRandomIndex = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[getRandomIndex].url
    console.log(memeUrl);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeInfo} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
