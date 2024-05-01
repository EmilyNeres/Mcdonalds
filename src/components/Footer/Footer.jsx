import React from 'react'
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'
import logo from '../../assets/logo.png';
import * as S from './footer_style';

export default function Footer() {
  return (
    <>
      <S.ContainerFooter>
        <div>
           <S.ImgMac src={logo} alt='logo mec donalds'/>
           <p>© McDonald’s 2024</p>
        </div>

        <div>
           <img src={googleplay} alt='Icon google play'/>
           <img src={appstore} alt='Icon play store'/>
        </div>
      </S.ContainerFooter>
    </>
     )
    }