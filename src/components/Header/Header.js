import React from 'react';
import style from './styles.css';

export default class Header extends React.Component {
    render() {
			return (
				<div class={style.header}>
					<div class={style.h1}>
						{this.props.text}
					</div>
				</div>
			)
    }

}