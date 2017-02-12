const html = require('choo/html')
const moment = require('moment')

module.exports = (update) => {
  return html`
    <div class="row center-xs">
      <div class="col-xs-3">
        <h1 class="tc avenir">Enter Monthly Spotify Listens on ${moment().format('L')}</h1>
      </div>
    </div>
  `
}
