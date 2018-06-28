const getLoggerParams = (params) => {
  if (Array.isArray(params) && params.length) {
    if (params[0] && typeof params[0] === 'string') {
      const title = params[0]
      if (title && params[1] && params[1].action) {
        const action = params[1].action
        const type = action.type || 'Undefined'
        const error = params[1].error
        return { title, type, action, error }
      }
    }
  }
  return { title: false, type: false, action: false, error: false }
}

export default (...params) => {
  const logger = console
  const { title, type, action, error } = getLoggerParams(params)
  if (title && type && action) {
    logger.group(`%c ${title}%c ${type} ✨✨✨`, 'color: gray; font-weight: lighter;', 'font-weight: bold;')
    logger.log('%c action    ', 'color: #03A9F4; font-weight: bold;', action)
    if (error) {
      logger.log('%c error     ', 'color: #F20404; font-weight: bold;', error)
    }
    logger.groupEnd()
  } else {
    logger.log(params)
  }
}
