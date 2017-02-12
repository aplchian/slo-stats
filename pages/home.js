const html = require('choo/html')
const moment = require('moment')
const { map } = require('ramda')
const { spotifyLineItem, Nav, SpotifyHeader,
        requireStyles, InputContainer, SpotifyTable } = require('../elements')




module.exports = function (state, prev, send) {

  const { monthlyListens } = state.spotify

  return html`

      <main class="vh-100">

          ${requireStyles()}
          ${Nav}
          ${SpotifyHeader}
          ${InputContainer(state,send)}
          ${SpotifyTable(monthlyListens)}

      </main>

  `

}
