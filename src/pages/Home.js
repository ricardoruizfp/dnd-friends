import React, { Component } from 'react'
import allContent from '../content'
import tiamat from '../assets/tiamat.jpg'
import './Home.css'

class Home extends Component {
  render() {
    const content = allContent.home;
    return (
      <div className='container'>
        <h1>The Tyranny of Dragons Homepage</h1>
        <div className='content'>
          <img className='tiamat-image' src={tiamat} alt='' />
          <div className='campaign-description'>
            <p>{content.campaignDescriptionP1}</p>
            <p>{content.campaignDescriptionP2}</p>
            <p>{content.campaignDescriptionP3}</p>
            <p>{content.campaignDescriptionP4}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
