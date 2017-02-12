const html = require('choo/html')


module.exports = ({count},send) => {

  return html`
    <div class="row center-xs big-input">
      <div class="col-xs-6 big-input">
        <input class="w-60 h-100 avenir f3 b-ns" value=${count} type="number" oninput=${update} />
        <button class="w-30 h-100 pa0 ma0 bg-transparent green bn">Save</button>
      </div>
    </div>
  `

  function update(e) {
    send('handleChange', e.target.value)
  }

}
