import { useState, useEffect } from 'react'


const Card = () => {

    const [selectedURLIndex, setSelectedURLIndex] = useState()
    const [imageURL, setImageURL] = useState()

  const urlArray = [
    'https://i.imgur.com/qdBr2FJm.jpg', /* hinchcliffe */
    'https://i.imgur.com/y0dA3t4m.jpg', /* redban */
    'https://i.imgur.com/JR2p474m.jpg', /* william montgomery */
    'https://i.imgur.com/id1kXodm.png', /* david lucas */
    'https://i.imgur.com/BEv4fsQm.jpg', /* hans kim */
    'https://i.imgur.com/eX523lKm.jpg', /* kam petterson */
    'https://i.imgur.com/WBymrXam.jpg', /* michael lehrer */
    'https://i.imgur.com/mJKPVWUm.jpg', /* heath cordes */
    'https://i.imgur.com/E0aAw9mm.jpg', /* rick flair */
    'https://i.imgur.com/gft4O0Ym.jpg', /* tristan bowling */
    'https://i.imgur.com/hiPj9aNm.jpg', /* jared nathan */
    'https://i.imgur.com/GKuvyiYm.jpg', /* nicole tran */
    'https://i.imgur.com/CmysDxPm.jpg', /* martin philips */
    'https://i.imgur.com/RKEEdW0m.jpg', /* malcolm hatchett */
    'https://i.imgur.com/g4DAZUDm.jpg', /* dr phil */
    'https://i.imgur.com/jVNxXPxm.jpg', /* ali macovsky */
    'https://i.imgur.com/x8DWno7m.jpg', /* malmud */
    'https://i.imgur.com/ZZ9zXIRm.jpg', /* jerimiah watkins */
    'https://i.imgur.com/iHzbHDVm.jpg', /* gary falcon */
    'https://i.imgur.com/iHzbHDVm.jpg', /* gary falcon */
]

  useEffect (() => 
    setSelectedURLIndex(
      Math.floor(Math.random() * urlArray.length)
    ),
    []
  )

  useEffect(() => {

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
        <div>
            <img src={imageURL} alt="" className='card' loading="lazy"/>
        </div>
    )
}

export default Card;