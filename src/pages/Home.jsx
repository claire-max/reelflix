import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row title='UpComing' fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home