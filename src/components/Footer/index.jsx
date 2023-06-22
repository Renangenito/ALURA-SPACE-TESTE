import React from 'react'
import Styles from './footer.module.scss';
import facebookImg from '../../assets/facebook.svg';
import twitterImg from '../../assets/twitter.svg';
import instagramImg from '../../assets/instagram.svg';

export default function Footer() {
  return (
    <footer>
      <ul className={Styles.list}>
        <li>
          <a href="/"><img src={facebookImg} alt="Facebook Icon"/></a>
        </li>
        <li>
        <a href="/"><img src={twitterImg} alt="Twitter Icon"/></a>
        </li>
        <li>
        <a href="/"><img src={instagramImg} alt="Instagram Icon"/></a>
        </li>
      </ul>
      <span>Desenvolvimento por Alura.</span>
    </footer>
  )
}