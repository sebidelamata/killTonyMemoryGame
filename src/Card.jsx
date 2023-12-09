import { useState, useEffect } from 'react'


const Card = () => {

    const [selectedURLIndex, setSelectedURLIndex] = useState()
    const [imageURL, setImageURL] = useState()

  const urlArray = [
    'https://i.imgur.com/qdBr2FJl.jpg', /* hinchcliffe */
    'https://i.imgur.com/y0dA3t4l.jpg', /* redban */
    'https://i.imgur.com/JR2p474l.jpg', /* william montgomery */
    'https://i.imgur.com/id1kXodl.png', /* david lucas */
    'https://i.imgur.com/BEv4fsQl.jpg', /* hans kim */
    'https://i.imgur.com/eX523lKl.jpg', /* kam petterson */
    'https://i.imgur.com/WBymrXal.jpg', /* michael lehrer */
    'https://i.imgur.com/mJKPVWUl.jpg', /* heath cordes */
    'https://i.imgur.com/E0aAw9ml.jpg', /* rick flair */
    'https://i.imgur.com/gft4O0Yl.jpg', /* tristan bowling */
    'https://i.imgur.com/hiPj9aNl.jpg', /* jared nathan */
    'https://i.imgur.com/GKuvyiYl.jpg', /* nicole tran */
    'https://i.imgur.com/CmysDxPl.jpg', /* martin philips */
    'https://i.imgur.com/RKEEdW0l.jpg', /* malcolm hatchett */
    'https://i.imgur.com/g4DAZUDl.jpg', /* dr phil */
    'https://i.imgur.com/jVNxXPxl.jpg', /* ali macovsky */
    'https://i.imgur.com/x8DWno7l.jpg', /* malmud */
    'https://i.imgur.com/ZZ9zXIRl.jpg', /* jerimiah watkins */
    'https://i.imgur.com/iHzbHDVl.jpg', /* gary falcon */
    'https://i.imgur.com/iHzbHDVl.jpg', /* gary falcon */
]

  useEffect (() => 
    setSelectedURLIndex(
      Math.floor(Math.random() * urlArray.length)
    ),
    []
  )

    const fetchImage = async () => {

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

    fetchImage()

    return (
        <div>
            <img src={imageURL} alt="" className='card' loading="lazy"/>
        </div>
    )
}

export default Card;