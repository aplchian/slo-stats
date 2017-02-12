const html = require('choo/html')

module.exports = () => {
  return html`
    <nav class="row">
      <div class="col-lg-3 bg-green tc white pa4 ttu avenir pointer">
        Spotify
      </div>
      <div class="col-lg-9"></div>
    </nav>
  `
}
