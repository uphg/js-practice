export function getTreeLevels(treeData, callback, childrenKey = 'children') {
  let values = []

  const stack = [[treeData, []]]
  while (stack.length) {
    const part = stack.pop()
    console.log('part')
    console.log(part)
    if (!part?.length) continue
    const [array, prevChecked] = part
    const checked = [...prevChecked]
    const level = checked.length
    for (const item of array) {
      console.log('item')
      console.log(item)
      console.log('checked')
      console.log(checked)
      checked[level] = item
      if (callback(item)) {
        return checked
      } else if(item[childrenKey]?.length) {
        stack.push([item[childrenKey], checked])
      }
    }
  }

  return []
}

