import memesData from "../memesData";
import React from "react";

export default function Meme() {
  // console.table(memesData.data.memes)

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // console.log(meme)

  const [allMemeImage, setAllMemeImage] = React.useState(memesData);
  // console.log(allMemeImage);

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  function getMemeImage() {
    const memesArray = allMemeImage.data.memes;
    const getRandomIndex = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[getRandomIndex].url)
    console.log(memesArray)
    // const memeUrl = memesArray[getRandomIndex].url
    // console.log(memeUrl); if we use memeUrl variable directly into img src in return it'll we not render
    // after clicking button cuz react does't rerender so we need to use useStat hooks which set the stat
    // of component it is like varible within the function

    setMeme((prevMeme) => {
      // memesArray[getRandomIndex].url)
      console.log(prevMeme)
      return {
        ...prevMeme,
        randomImage: memesArray[getRandomIndex].url
      }
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
