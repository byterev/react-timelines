import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import Marker from '.'

class NowMarker extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      now: moment().locale('pt')
    }
  }

  currentDate = () => {
    const { time } = this.props

    this.setState({
      now: moment().locale('pt'),
      position: time.toX(moment().locale('pt').toDate())
    })
  }

  componentDidMount() {
    this.currentDate()
  }

  render() {
    const { time, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(this.state.now)} visible={visible}>
        <div>
          <div>Agora</div>
          <strong>{this.state.now.format('HH[h]mm DD MMM')}</strong>
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
