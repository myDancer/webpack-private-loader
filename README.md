# webpack-private-loader

## install in local

```bash
npm link

// in your usage project

npm link webpack-private-loader
```

## use

**webpack.config.js**

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["webpack-private-loader"],
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
};
```

**org file**

```js
let _a = 1;
```

**output file**

```js
let #a = 1;
```
