function debounce(fn, wait, immediate = false) {
  let timerId, result

  return function() {
    const args = arguments
    const context = this
    if (timerId) {
      window.clearTimeout(timerId)
    } else if (immediate) {
      result = fn.apply(context.args)
    }
    timerId = setTimeout(() => {
      if (!immediate) result = fn.apply(context, args)
      timerId = null
    }, wait)
    return result
  }
}