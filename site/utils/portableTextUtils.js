import htm from 'htm'
import vhtml from 'vhtml'
import {toHTML} from '@portabletext/to-html'

const html = htm.bind(vhtml)

const myPortableTextComponents = {
  types: {
        madlibField: ({node}) => html`<span class="empty" id="${node._key}">${node.displayText}</span>`
      
            return h('span', node.displayText, {id: node._key, className: 'empty'})
        }
    }

}

console.log()

//---------------


const prepText = (data) => {
    // Takes the data from a specific Sanity document
    // and creates a new htmlText property to contain the HTML
    // This lets us keep the Portable Text data intact and still display HTML
    return {
        ...data,
        htmlText: toHTML(data, {components: myPortableTextComponents})
    }
}

// We only need to export prepText for our functions
module.exports = {prepText}
