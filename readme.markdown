node-emoji-sheriff
==================

[![Build Status](https://travis-ci.org/malantonio/node-emoji-sheriff.svg?branch=master)](https://travis-ci.org/malantonio/node-emoji-sheriff)

it's past its prime, but here's a module to construct an
emoji sheriff (or really whatever kind of string sheriff
you want, i guess).

## usage

```js
var sheriff = require('emoji-sheriff')
```

### `emojiSheriff(bodyEmoji)`

pass it an emoji and it builds a body.

```js
console.log(sheriff('🍨'))
//     🤠
//   🍨 🍨 🍨
//  🍨  🍨  🍨
//  👇 🍨 🍨 👇
//   🍨   🍨
//  🍨     🍨
//  👢     👢
```

### `emojiSheriff(opts)`

or pass it an object with the pieces spelled out. available options:

- `feet`
  - or `leftFoot`, `rightFoot`
- `hands`
  - or `leftHand`, `rightHand`
- `body`
- `face`

```js
var opts = {
  feet: '👡',
  hands: '👋',
  body: '☕️',
  face: '😎'
}

console.log(sheriff(opts))

//     😎
//   ☕️ ☕️ ☕️
//  ☕️  ☕️  ☕️
//  👋 ☕️ ☕️ 👋
//   ☕️   ☕️
//  ☕️     ☕️
//  👡     👡
```

## license

MIT
