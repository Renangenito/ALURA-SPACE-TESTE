import React from 'react'
import open from '../../../../assets/open.png';
import favorite from '../../../../assets/favorito.png';

export default function Card({photo, styles}) {
  return (
    <li key={photo.id} className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={require(`../../../../assets/imagens/galeria/${photo.image}`)}
        alt={photo.title}
      />
        <p className={styles.gallery__description}>{photo.title}</p>
        <div>
          <p>{photo.credits}</p>
          <span>
            <img src={favorite} alt='Like Heart Icon' />
            <img src={open} alt='Open Modal Icon' />
          </span>
        </div>
    </li>
  )
}
