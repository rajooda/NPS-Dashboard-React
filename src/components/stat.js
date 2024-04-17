import React from 'react'

import PropTypes from 'prop-types'

import './stat.css'

const Stat = (props) => {
  return (
    <div className={`stat-stat ${props.rootClassName} `}>
      <span className="medianValueClass">{props.txtMedian}</span>
      <span className="jlTextClass">{props.txtJL}</span>
    </div>
  )
}

Stat.defaultProps = {
  txtJL: 'JL: All',
  rootClassName: '',
  txtMedian: '50',
}

Stat.propTypes = {
  txtJL: PropTypes.string,
  rootClassName: PropTypes.string,
  txtMedian: PropTypes.string,
}

export default Stat
