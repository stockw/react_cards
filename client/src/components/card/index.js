import React from 'react'
import Image from '../image'
import CardBody from '../card_body'
import Button from '../button'
import './index.css'


const Card = (props) => {
  // props.obj = {img: title: }
  console.log(props);

  let {img, title, text, url} = props.obj;

  console.log(props.obj);
  return (
    <div className='card-container'>
        <Image img={img} />
        <CardBody title={title} text={text} />
        <Button url={url} />
    </div>
  )
}

export default Card