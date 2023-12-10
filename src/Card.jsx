import { useState, useEffect } from 'react'


const Card = ({game, setGame}) => {

  const [selectedURLIndex, setSelectedURLIndex] = useState()
  const [imageURL, setImageURL] = useState()
  const [imageName, setImageName] = useState()

  console.log(game)

  const urlList = {
    hinchcliffe: 'https://i.imgur.com/qdBr2FJm.jpg', /* hinchcliffe */
    redban: 'https://i.imgur.com/y0dA3t4m.jpg', /* redban */
    montgomery: 'https://i.imgur.com/JR2p474m.jpg', /* william montgomery */
    lucas: 'https://i.imgur.com/id1kXodm.png', /* david lucas */
    kim: 'https://i.imgur.com/BEv4fsQm.jpg', /* hans kim */
    kam: 'https://i.imgur.com/eX523lKm.jpg', /* kam petterson */
    lehrer: 'https://i.imgur.com/WBymrXam.jpg', /* michael lehrer */
    cordes:  'https://i.imgur.com/mJKPVWUm.jpg', /* heath cordes */
    flair: 'https://i.imgur.com/E0aAw9mm.jpg', /* rick flair */
    bowling: 'https://i.imgur.com/gft4O0Ym.jpg', /* tristan bowling */
    nathan: 'https://i.imgur.com/hiPj9aNm.jpg', /* jared nathan */
    tran: 'https://i.imgur.com/GKuvyiYm.jpg', /* nicole tran */
    philips: 'https://i.imgur.com/CmysDxPm.jpg', /* martin philips */
    hatchett: 'https://i.imgur.com/RKEEdW0m.jpg', /* malcolm hatchett */
    phil: 'https://i.imgur.com/g4DAZUDm.jpg', /* dr phil */
    macovsky: 'https://i.imgur.com/jVNxXPxm.jpg', /* ali macovsky */
    malmud: 'https://i.imgur.com/x8DWno7m.jpg', /* malmud */
    watkins: 'https://i.imgur.com/ZZ9zXIRm.jpg', /* jerimiah watkins */
    falcon: 'https://i.imgur.com/iHzbHDVm.jpg', /* gary falcon */
  }

  const urlArray = Object.values(urlList)

  const handleCardClick = (e) => {
    let comic = e.target.classList[1]
    let updatedGame = {...game}
    updatedGame.cardsPicked[comic] += 1
    updatedGame.score += 1
    if(updatedGame.highScore < updatedGame.score){
      updatedGame.highScore += 1
    }
    setGame(updatedGame)
  }

  // randomly select url index on dom render
  useEffect (() => 
    setSelectedURLIndex(
      Math.floor(Math.random() * urlArray.length)
    ),
    [game]
  )

  useEffect(() => {

    const findImageName = (url) => {
      for(const key in urlList){
        if(urlList[key] === url){
          return(key)
        }
      }
    }

    const fetchImage = async () => {

      try {
        let image = await fetch(
          urlArray[selectedURLIndex]
      )

      if (!image.ok) {
          throw new Error(`Failed to fetch image. Status: ${image.status}`);
        }

      let blob = await image.blob()

      let imagedata = URL.createObjectURL(blob)

      setImageURL(imagedata)
      setImageName(
        findImageName(urlArray[selectedURLIndex])
      )
      }
      catch (error) {
        console.error(error);
      }
  }

    if (selectedURLIndex !== undefined) {
      fetchImage();
    }
  },
  [selectedURLIndex]
  )

    return (
        <div className='card-container'>
            <img 
              className={`card ${imageName}`} 
              src={imageURL} 
              alt={imageName} 
              loading="lazy"
              onClick={(e) => handleCardClick(e)}
            />
        </div>
    )
}

export default Card;