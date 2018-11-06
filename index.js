// usage:
//
// var sheriff = emojiSheriff('🍨')
// ~ or ~
// var sheriff = emojiSheriff({body: '🍨', leftHand: '👇'})
module.exports = function emojiSheriff(bodyEmoji) {
  var opts

  if (typeof bodyEmoji == 'object') {
    opts = bodyEmoji
    bodyEmoji = undefined
  }

  if (!opts) {
    opts = {}
  }

  if (!bodyEmoji && !opts.body) {
    throw new Error('emoji-sheriff requires a body character')
  }

  var leftHand = opts.hands || opts.leftHand || '👇'
  var rightHand = opts.hands || opts.rightHand || leftHand
  var leftFoot = opts.feet || opts.leftFoot || '👢'
  var rightFoot = opts.feet || opts.rightFoot || leftFoot
  var face = opts.face || '🤠'
  var body = opts.body || bodyEmoji

  var template = `     f
   o o o
  o  o  o
  l o o r
   o   o
  o     o
  d     b`

  return template.replace('f', face)
                 .replace(/o/g, body)
                 .replace('l', leftHand)
                 .replace('r', rightHand)
                 .replace('d', leftFoot)
                 .replace('b', rightFoot)
}
