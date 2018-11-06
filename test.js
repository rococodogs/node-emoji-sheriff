var s = require('./')
var test = require('tape')
var bodyCount = 12

test('builds a body from a passed emoji', function (t) {
  var body = '🍨'
  var sheriff = s(body)

  t.plan(1)

  t.equal(sheriff.match(new RegExp(body, 'g')).length, bodyCount)
})

test('takes options', function (t) {
  var opts = {
    leftHand: '👋',
    rightHand: '🤞',
    leftFoot: '🐾',
    rightFoot: '🚗',
    face: '😎',
    body: '☕️'
  }
  var sheriff = s(opts)

  t.plan(6)

  t.equal(sheriff.match(new RegExp(opts.leftHand, 'g')).length, 1)
  t.equal(sheriff.match(new RegExp(opts.rightHand, 'g')).length, 1)
  t.equal(sheriff.match(new RegExp(opts.leftFoot, 'g')).length, 1)
  t.equal(sheriff.match(new RegExp(opts.rightFoot, 'g')).length, 1)
  t.equal(sheriff.match(new RegExp(opts.face, 'g')).length, 1)
  t.equal(sheriff.match(new RegExp(opts.body, 'g')).length, bodyCount)
})

test('generic feet/hands', function (t) {
  var opts = {
    body: '☕️',
    hands: '👋',
    feet: '👡'
  }

  var sheriff = s(opts)

  t.plan(2)
  t.equal(sheriff.match(new RegExp(opts.hands, 'g')).length, 2)
  t.equal(sheriff.match(new RegExp(opts.feet, 'g')).length, 2)
})

test('throws when no emoji is passed', function (t) {
  t.plan(2)

  t.throws(function () { s() })
  t.throws(function () { s({hands: '👋'}) })
})
