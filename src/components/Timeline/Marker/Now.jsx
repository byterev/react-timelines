import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import Marker from '.'

class NowMarker extends PureComponent {
  render() {
    const { now, time, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>Agora</div>
          <strong>{moment().format('HH:mm DD MMM')}</strong>
        </div>
      </Marker>
    )
  }
}

NowMarker.propTypes = {
  time: PropTypes.shape({
    toX: PropTypes.func.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
}

export default NowMarker
