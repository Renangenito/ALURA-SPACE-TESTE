import React from 'react'

export default function Icone({ icon, style }) {
  return (
    <li className={style.menu__item}>
      <img src={require(`../../assets/icones/${icon.path}`)} alt={icon.alt} />
      <a href="/">{icon.link}</a>
    </li>
  )
}
