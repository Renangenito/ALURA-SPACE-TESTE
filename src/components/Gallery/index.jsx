import React, { useState } from 'react'
import Tags from '../Tags';
import Styles from './gallery.module.scss';
import photos from './photos';
import Cards from './Cards';

export default function Gallery() {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))]

  const photoFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    })
    setItems(newPhotos);
  };

  return (
    <section className={Styles.gallery}>
      <h2>Navigate the gallery</h2>
      <Tags tags={tags} filter={photoFilter} setItems={setItems}/>
      <Cards photos={items} styles={Styles}/>
    </section>
  )
}
