import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Grid = ({ layout, scrollTo, time, grid }) => {

  let format = false;
  if (layout === 'all') format = 'DD/MMM/YYYY';
  else if (layout === '8h') format = 'DD/MMM/YYYY HH';

  return (
    <div className="rt-grid">
      {grid.map(({ id, start, end }) => (
        <div key={id} className={`rt-grid__cell ${moment(scrollTo).format(format) === moment(start).format(format) ? 'rt-grid_selected' : ''}`} style={time.toStyleLeftAndWidth(start, end)} />
      ))}
    </div>

  )
}

Grid.propTypes = {
  time: PropTypes.shape({
    toStyleLeftAndWidth: PropTypes.func,
  }).isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.instanceOf(Date).isRequired,
      end: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
}

export default Grid
