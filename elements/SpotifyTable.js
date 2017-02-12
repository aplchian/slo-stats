const html = require('choo/html')
const moment = require('moment')
const { map } = require('ramda')
const spotifyLineItem = require('./spotifyLineItem')

module.exports = (monthlyListens) => {
  return html`
    <div class="row center-xs mt5">
      <div class="col-xs-8 big-input">
        <ul class="pa0 mt4">
        ${map(spotifyLineItem,monthlyListens)}
        </ul>
      </div>
    </div>
  `
}
