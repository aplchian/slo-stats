const html = require('choo/html')
const moment = require('moment')


module.exports = ({date,count}) => {
  return html`
    <li class="row">
      <div class="box bg-white col-xs pa0">
        <div class="box pa2 green">
          ${moment(date).format('L')}
        </div>
      </div>
      <div class="box bg-green col-xs bt b--white pa0">
        <div class="box pa2 white">
          ${count}
        </div>
      </div>
    </li>
  `
}
