# react-boilerplate

[React](https://facebook.github.io/react/)+[Webpack](http://webpack.github.io/)+[Babel](https://babeljs.io/) starter kit


### Install/Run Instructions

Clone the repo:

```
git clone https://github.com/JonDum/react-boilerplate.git
```

[Install yarn](https://yarnpkg.com/en/docs/install) if you do not have it yet.
Then run:

```
yarn
```

Run development server:

```
yarn start
```
or

```
yarn dev
```

Open the web browser to [`http://localhost:8080/`](http://localhost:8080/)

### Testing

To run unit tests:

```
yarn test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a `.eslintrc` config for eslint ready with React plugin.

To run linting, run:

```
yarn lint
```