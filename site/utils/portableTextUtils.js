const {htm} = require('htm');
const {toHTML} =  require('@portabletext/to-html');

function h(type, props, ...children) {
  return { type, props, children };
}
const html = htm.bind(h);

console.log( html`<h1 id=hello>Hello world!</h1>` );

const myPortableTextComponents = {
  types: {
    madLibField: ({
      value
    }) => html`<span class="empty" id="${value._key}">${value.displayText}</span>`
  }
};
const prepText = data => {
  // Takes the data from a specific Sanity document
  // and creates a new htmlText property to contain the HTML
  // This lets us keep the Portable Text data intact and still display HTML

  return {
    ...data,
    htmlText: toHTML(data.text, {
      components: myPortableTextComponents
    })
  };
};

// We only need to export prepText for our functions

module.exports = {
  prepText
};