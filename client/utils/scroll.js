export default {
  getAllSections(sections) {
    const items = []
    const length = sections.length
    for(var i = 0; i <= length - 1; i++) {
      const section = sections[i]
      var item = {}
      item.header = section.attributes['data-type-header'].value
      item.footer = section.attributes['data-type-footer'].value
      item.top = section.offsetTop
      item.bottom = section.offsetTop + section.offsetHeight
      items.push(item)
    }
    return items
  }
}
