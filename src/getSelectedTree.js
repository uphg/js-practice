// 获取 tree 中选中数据对象所有父级
export function getSelectedTree(treeData, callback, subkey = 'children') {
  const stack = [[treeData, []]]
  
  while (stack.length) {
    const part = stack.pop()
    if (!part?.length) continue
    const [array, prevChecked] = part
    const level = prevChecked.length
    for (const item of array) {
      const checked = [...prevChecked]
      checked[level] = item
      if (callback(item)) {
        return checked
      } else if(item[subkey]?.length) {
        stack.push([item[subkey], checked])
      }
    }
  }

  return []
}