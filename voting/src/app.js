import React from 'react';
import Logo from 'components/Logo';
import shuffle from 'util/shuffle';
import chunk from 'lodash/chunk';

function unwrap(r) {
    let re = /\.\/(.+?)\s*-(.+)/;
    return r.keys().map(filename => {
        let e = re.exec(filename);
        return {
            src: r(filename),
            author: e[1],
            name: e[2],
        }
    });
}

let logos = unwrap(require.context('!!file-loader?limit=9999999!../../logos', false, /\.(png|jpe?g|svg)$/));

logos = shuffle(logos);

window.logos = logos;

export default class App extends React.Component {
    render() {
        return (
		<app>
			{chunk(logos, 3).map((r,i) => (<div class='row' key={i}>
				{r.map(l => <Logo key={l.src} {...l}/>)}
			</div>)
			)}
		</app>
        )
    }
}
