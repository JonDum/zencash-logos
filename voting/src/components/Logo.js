
import React from 'react';


export default function Logo(props) {
	const {src, author, address, balance, name} = props;
	return <div class='logo col'>
		<div class='image'>
			<img src={src}/>
		</div>
		<div class='name'>{name}</div>
		<div class='author'>By @{author}</div>
		{address &&
			<div class='address'>{address}</div>
		}
		{balance &&
			<div class='balance'>{balance} ZEN</div>
		}
	</div>

}
