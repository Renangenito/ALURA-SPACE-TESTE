import React from 'react';
import Styles from './Tags.module.scss';
import photos from '../Gallery/photos.json'

export default function Tags({tags, filter, setItems}) {
  return (
    <div className={Styles.tags}>
      <p className={Styles.tags__p}>Filter by tags:</p>
      <ul className={Styles.tags__lista}>
        {tags.map((tag) => {
          return(
            <li key={tag} onClick={() => filter(tag)}>{tag}</li>
          )
        })}
        <li onClick={() => setItems(photos)}>All</li>
      </ul>
    </div>
  )
}
