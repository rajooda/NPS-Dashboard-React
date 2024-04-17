import React from 'react'

import { Helmet } from 'react-helmet'

import Stat from '../components/stat'
import FilterSelect from '../components/filter-select'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NPS Dashboard</title>
        <meta property="og:title" content="NPS Dashboard" />
      </Helmet>
      <div className="home-bannerarea">
        <div className="home-container1">
          <h1 className="home-text">NPS Survey Dashboard</h1>
        </div>
      </div>
      <div className="home-employee-jlnp-sarea">
        <h3 className="home-text1">Medians by Employee Job Level</h3>
        <div className="home-statscontainer">
          <Stat rootClassName="stat-root-class-name2" txtJL="All"></Stat>
          <Stat rootClassName="stat-root-class-name4" txtJL="JL: 1"></Stat>
          <Stat rootClassName="stat-root-class-name3" txtJL="JL:2"></Stat>
          <Stat rootClassName="stat-root-class-name5" txtJL="JL:3"></Stat>
          <Stat rootClassName="stat-root-class-name6" txtJL="JL:4"></Stat>
          <Stat rootClassName="stat-root-class-name7" txtJL="JL:5"></Stat>
          <Stat rootClassName="stat-root-class-name8" txtJL="JL:6"></Stat>
          <Stat rootClassName="stat-root-class-name9" txtJL="JL:7"></Stat>
          <Stat rootClassName="stat-root-class-name10" txtJL="JL5"></Stat>
        </div>
      </div>
      <div className="home-filterareacontainer">
        <h3 className="home-text2">Filters</h3>
        <div className="home-filterscontainer">
          <FilterSelect orgunit="Unit"></FilterSelect>
          <FilterSelect orgunit="PU"></FilterSelect>
          <FilterSelect orgunit="DU"></FilterSelect>
          <FilterSelect orgunit="Country"></FilterSelect>
          <FilterSelect orgunit="JL"></FilterSelect>
        </div>
      </div>
      <div className="home-tablechartarea">
        <div className="home-tablecontainer"></div>
        <div className="home-chartcontainer"></div>
      </div>
    </div>
  )
}

export default Home
