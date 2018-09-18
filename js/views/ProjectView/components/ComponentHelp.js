
export default class ComponentHelp {
  static createContentMap (content, className) {
    let listContent = {}
    if (content.constructor === Array) {
      listContent = content.map(list => {
        return (
          <li className={className} key={list}>{list}</li>
        )
      })
    } else {
      listContent = <p>{content}</p>
    }
  }

  static createLabelMap (label) {
    // checkout the label, some of the label is undefine so render a null obj.
    let listLabel = {}
    if (typeof label === 'undefined') {
      listLabel = null
    } else if (label.constructor === Array) {
      listLabel = label.map(each => {
        return (
          <li key={each}>{each}</li>
        )
      })
    } else {
      listLabel = <p>{label}</p>
    }
  }
}
