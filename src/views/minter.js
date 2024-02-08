import React from 'react'

import { Helmet } from 'react-helmet'

import './minter.css'

const Minter = (props) => {
  return (
    <div className="minter-container">
      <Helmet>
        <title>Minter - KirpillVsFood</title>
        <meta
          name="description"
          content="Thousands of Food and Kirpills NFTs compete in the $CHILL metaverse. Foods will be grilled,cooked,boiled and slurped to generate a tempting prize of $KCAL."
        />
        <meta property="og:title" content="Minter - KirpillVsFood" />
        <meta
          property="og:description"
          content="Thousands of Food and Kirpills NFTs compete in the $CHILL metaverse. Foods will be grilled,cooked,boiled and slurped to generate a tempting prize of $KCAL."
        />
      </Helmet>
    </div>
  )
}

export default Minter
