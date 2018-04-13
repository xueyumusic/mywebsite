import React from 'react'
import Button from '../components/Button/Button'
//import Trigger from 'rc-trigger'
//import 'rc-trigger/assets/index.css'
import Trigger from '../components/Trigger/Trigger'
import '../components/Trigger/index.bss'

function getPopupContainer(trigger) {
  return trigger.parentNode;
}

const builtinPlacements = {
  left: {
    points: ['cr', 'cl'],
  },
  right: {
    points: ['cl', 'cr'],
  },
  top: {
    points: ['bc', 'tc'],
  },
  bottom: {
    points: ['tc', 'bc'],
  },
  topLeft: {
    points: ['bl', 'tl'],
  },
  topRight: {
    points: ['br', 'tr'],
  },
  bottomRight: {
    points: ['tr', 'br'],
  },
  bottomLeft: {
    points: ['tl', 'bl'],
  },
};

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>MyHome</h1>
        <p>Xueyu Home</p>
        <Button text='click me!' />

        <div style={{ margin:100, position: 'relative' }}>
        <Trigger
          action={['hover']}
          popup={<div>popupmenu</div>}
          popupAlign={{
            points: ['cl','cr'],
            offset: [ 5, 5],

          }}
          getPopupContainer={undefined && getPopupContainer}
          //popupPlacement={'right'}
          //builtinPlacements={builtinPlacements}
        >
          <a href='#'>hover me!!</a>

        </Trigger>
        </div>

      </div>
    )
  }
}
