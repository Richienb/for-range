# For Range [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/for-range/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/for-range)

Simplified syntax for a for loop.

[![NPM Badge](https://nodei.co/npm/for-range.png)](https://npmjs.com/package/for-range)

## Install

```sh
npm install for-range
```

## Usage

```js
const forRange = require("for-range");

forRange({ min: 2, max: 10, step: 2 }, (i) => {
    if (i === 4) return; // Skip for 4
    if (i === 8) return false; // Stop for loop at 8
    console.log(i);
});

// Native JS equaivent
for (let i = 2; i <= 10; i += 2) {
    if (i === 4) continue;
    if (i === 8) break;
    console.log(i);
}
```

## API

### forRange(options, callback)

#### options

Type: `object`

##### min

Type: `number`\
Default: `0`

The number to start the for loop at.

##### max

Type: `number`

The number to end the for loop at.

##### step

Type: `number`\
Default: `1`

The amount to add to the number each iteration

#### callback

Type: `function`

The callback to trigger for each iteration.
