import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import createClasses from '../../utils/classes'

const buildDataAttributes = (attributes = {}) => {
  const value = {}
  Object.keys(attributes).forEach(name => {
    value[`data-${name}`] = attributes[name]
  })
  return value
}

const handleTooltip = (id, e) => {
  const tooltip = document.getElementById(id);
  let x = e.clientX;
  let y = e.clientY;

  tooltip.style.left = x + 'px';
  tooltip.style.top = (y - 6) + 'px';
}

const Basic = ({ title, id, percentage, start, end, style, classes, dataSet, tooltip }) => (
  <div onMouseMove={(e) => handleTooltip(id, e)} className={createClasses('rt-element', classes)} style={style} {...buildDataAttributes(dataSet)}>
    <div className="rt-element__content" aria-hidden="true">
      <div className="rt-element__title">{title}</div>
    </div>
    { percentage !== null &&
      <div className="rt-element-percentange" style={{ width: percentage + '%' }} aria-hidden="true"></div>
    }
    <div id={id} className="rt-element__tooltip">
      {tooltip ? (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: tooltip.split('\n').join('<br>') }} />
      ) : (
          <div>
            <div className="title">{title}</div>
            <div className="details">
              <span className="details-title">Ínicio:</span> <span className="details-data">{moment(start).format('HH:mm DD MMM')}</span>
            </div>
            <div className="details">
              <span className="details-title">Fim:</span> <span className="details-data">{moment(end).format('HH:mm DD MMM')}</span>
            </div>
          </div>
        )}
    </div>
  </div>
)

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  tooltip: PropTypes.string,
}

export default Basic
