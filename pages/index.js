import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import css from './movie.css'

class Ticket extends Component {
  static async getInitialProps ({ req }) {
    const response = await fetch('http://localhost:3000/seats')
    const seats = await response.json()
    return { seats }
  }
  static defaultProps = {
    seats: []
  }

  state = {
    seats: this.props.seats,
    subscribe: false,
    subscribed: false,
  }

  subscribe = () => {
    if (this.state.subscribe && !this.state.subscribed) {
      this.props.socket.on('reserve', this.handleSeat)
      this.setState({ subscribed: true })
    }
  }

  componentDidMount () {
    this.subscribe()
  }

  componentDidUpdate () {
    this.subscribe()
  }

  static getDerivedStateFromProps (props, state) {
    if (props.socket && !state.subscribe) return { subscribe: true }
    return null
  }

  componentWillUnmount () {
    this.props.socket.off('reserve', this.handleSeat)
  }

  handleSeat= seats => {
    let stateData = this.state.seats.concat();
    stateData[seats.itemY][seats.itemX] = 2;

    this.setState(state => {
      return {
        seats: stateData
      }
    })
  }

  handleClick = event => {

    event.preventDefault()

    const itemX = event.target.dataset.index;
    const itemY = event.target.parentNode.dataset.index;
    let seats = this.state.seats.concat();

    const seat = {
      dummy: new Date().getTime(),
      itemX,
      itemY,
    }
    console.log(seat);

    if(confirm(`${parseInt(seat.itemY) + 1}열 ${parseInt(seat.itemX) + 1}좌석을 예약하시겠습니까?`)){
      seats[itemY][itemX] = 2;
      this.setState(state => {
        return {
          seats,
        }
      })

      this.props.socket.emit('reserve', seat)
    }else{
      alert('취소되었습니다.');
    }
  }

  render () {
    return (
      <main>
        <div className={css.frontwrap}>
          <div className={css.front}>SCREEN</div>
        </div>
        <div className={css.seats}>
          {
            this.state.seats.map((itemY, index) => {
              if (itemY) {
                return <div key={index} className={css.line} data-index={index}>
                  <div className={css.seat}>{index + 1}</div>
                  {
                    itemY.map((itemX, index) => {
                      if (itemX === 1) {
                        return <div key={index} className={[css.seat, css.enable].join(' ')} data-index={index} onClick={this.handleClick}></div>
                      } else if (itemX === 2) {
                        return <div key={index} className={[css.seat, css.disable].join(' ')} ></div>
                      } else {
                        return <div key={index} className={css.seat}></div>
                      }
                    })
                  }
                </div>
              }
            })
          }
        </div>
      </main>
    )
  }
}

export default Ticket