import Head from 'next/head';
import styles from '@styles/Home.module.css';
import BodyWrapper from '@components/layout/body_wrapper';
import CardList from '@components/cards/cardlist';

export default function Cards(){
  return(
    <BodyWrapper
        pageTitle = "Cards"
        tabTitle = "Cards">
        <CardList/>
      </BodyWrapper>  
  )
}