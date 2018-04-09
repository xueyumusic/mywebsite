import React from 'react'
import Button from '../components/Button/Button'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>MyHome</h1>
        <p>Xueyu Home</p>
        <Button text='click me!' />
      </div>
    )
  }
}
