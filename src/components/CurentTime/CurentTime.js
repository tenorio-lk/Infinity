import React, { Component } from 'react'
import { NavLink } from 'reactstrap'

class curentTime extends Component {
    state = { date: new Date() }

    componentDidMount() {
        this.TimerID = setInterval(() => this.updateTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.TimerID)
    }

    updateTime() {
        this.setState({ date: new Date() })
    }

    render() {
        return <NavLink active>{this.state.date.toLocaleTimeString()}</NavLink>
    }
}

export default curentTime