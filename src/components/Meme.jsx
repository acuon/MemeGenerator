import memesData from "../memesData";
import React from "react";

export default function Meme() {
  // console.table(memesData.data.memes)

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomTextL: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // console.log(meme)

  const [allMemeImage, setAllMemeImage] = React.useState(memesData);
  // console.log(allMemeImage);

  function getMemeInfo() {
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
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeInfo} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--img" src={meme.randomImage} />
    </main>
  );
}
