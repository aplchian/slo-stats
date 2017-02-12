const html = require('choo/html')
const moment = require('moment')

module.exports = () => {
    return html`
      <div>
        <link rel="stylesheet" href="./assets/tachyons.min.css">
        <link rel="stylesheet" href="./assets/flexboxgrid.min.css" type="text/css" >
        <link rel="stylesheet" href="./assets/styles.css" type="text/css" >
      </div>
    `
}
