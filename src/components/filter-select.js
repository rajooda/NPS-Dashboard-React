import React from 'react'

import PropTypes from 'prop-types'

import './filter-select.css'

const FilterSelect = (props) => {
  return (
    <div className="filter-select-container">
      <span className="filter-select-text">{props.orgunit}</span>
      <select className="filter-select-select">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  )
}

FilterSelect.defaultProps = {
  orgunit: 'Text',
}

FilterSelect.propTypes = {
  orgunit: PropTypes.string,
}

export default FilterSelect
