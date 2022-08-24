import React from 'react'

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // console.log(meme)

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  })

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

  // React.useEffect(() => {
  //   async function getMemes() {
  //     const res = await fetch("https://api.imgflip.com/get_memes")
  //     const data = await res.json()
  //     setAllMemes(data.data.memes)
  //   }
  //   getMemes()
  // }, [])



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
    const getRandomIndex = Math.floor(Math.random() * allMemes.length);
    console.log(allMemes[getRandomIndex].url)
    // console.log(allMemes)
    // const memeUrl = memesArray[getRandomIndex].url
    // console.log(memeUrl); if we use memeUrl variable directly into img src in return it'll we not render
    // after clicking button cuz react does't rerender so we need to use useStat hooks which set the stat
    // of component it is like varible within the function

    setMeme((prevMeme) => {
      console.log(prevMeme)
      return {
        ...prevMeme,
        randomImage: allMemes[getRandomIndex].url
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
