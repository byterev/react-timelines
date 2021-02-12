import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Cell = ({ time, title, start, end }) => {
  let isWeekend = false;
  const mTime = moment(start);
  if (mTime.isoWeekday() === 6 || mTime.isoWeekday() === 7)
    isWeekend = true;

  return (
    <div className={`rt-timebar__cell ${isWeekend ? 'rt-timebar__cell-weekend' : ''}`} style={time.toStyleLeftAndWidth(start, end)}>
      {title}
    </div>
  )
}

Cell.propTypes = {
  time: PropTypes.shape({
    toStyleLeftAndWidth: PropTypes.func,
  }),
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
}

export default Cell
