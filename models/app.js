const moment = require('moment')
const PouchDB = require('pouchdb')
const db = new PouchDB('slo-stats')
const { assoc } = require('ramda')

module.exports = {
  state: {
    /* initial values of state inside the model */
    // title: 'Set the title'
    spotify: {
      monthlyListens: [
        {
          date: moment().unix(),
          count: 120
        },
        {
          date: moment().unix(),
          count: 122
        }
      ]
    },
    newSpotifyItem: {
      date: moment().unix(),
      count: 0
    },
    count: 1212
  },
  reducers: {
    handleChange(state, value) {
      return { count: value }
    }
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: function (state, data, send, done) {
      // do stuff
    }
    */

  },
  subscriptions: {
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    checkStuff: function (send, done) {
      setInterval(function () {
        send('update', data, function (err) {
          if (err) return done(err)
        })
      }, 1000)
    }
    */
  }
}
