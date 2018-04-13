import React from 'react';
import style from './styles.css';
import Trigger from '../Trigger/Trigger'

export default class Header extends React.Component {
    render() {
			return (
				<div className={style.header}>
					<div className={style.h1}>
						{this.props.text}
					</div>

					<div className={style.menu}>
						<ul>
            <Trigger
              action={['hover']}
              popup={<div>popupmenu</div>}
              popupAlign={{
                points: ['tc', 'bc'],
                offset: [ 0, 5],

              }}
              getPopupContainer={undefined && getPopupContainer}
            >
              <li>核心技术</li>
            </Trigger>

            <Trigger
              action={['hover']}
              popup={<div>popupmenu</div>}
              popupAlign={{
                points: ['tc', 'bc'],
                offset: [ 0, 5],

              }}
              getPopupContainer={undefined && getPopupContainer}
            >
              <li>产品</li>
            </Trigger>

            <Trigger
              action={['hover']}
              popup={<div>popupmenu</div>}
              popupAlign={{
                points: ['tc', 'bc'],
                offset: [ 0, 5],

              }}
              getPopupContainer={undefined && getPopupContainer}
            >
              <li>产品博客</li>
            </Trigger>

            <Trigger
              action={['hover']}
              popup={<div>popupmenu</div>}
              popupAlign={{
                points: ['tc', 'bc'],
                offset: [ 0, 5],

              }}
              getPopupContainer={undefined && getPopupContainer}
            >
              <li>关于</li>
            </Trigger>
						</ul>
					</div>
				</div>
			)
    }

}