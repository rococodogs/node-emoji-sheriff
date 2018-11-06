node-emoji-sheriff
------------------

it's past its prime, but here's a module to construct an
emoji sheriff (or really whatever kind of string sheriff
you want, i guess).

## usage

```js
var sheriff = require('emoji-sheriff')
```

### `emojiSheriff(bodyEmoji)`

```js
console.log(sheriff('🍨'))
//      🤠
//   🍨 🍨 🍨
//  🍨  🍨  🍨
//  👇 🍨 🍨 👇
//   🍨   🍨
//  🍨     🍨
//  👢     👢
```

### `emojiSheriff(opts)`

opts can be:

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
