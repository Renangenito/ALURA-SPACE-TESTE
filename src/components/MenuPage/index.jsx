import React from 'react'
import Styles from "./menuPage.module.scss";
import icons from './icons.json';
import Icon from '../../components/Icon';

export default function MenuPage() {
  return (
    <nav className={Styles.menu}>
      <ul className={Styles.menu__list}>
        {icons.map(icon => (<Icon key={icon.id} icon={icon} style={Styles} />))}
      </ul>
    </nav>
  )
}
