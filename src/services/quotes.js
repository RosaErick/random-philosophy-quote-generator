const getQuote = async () => {
  const resp = await fetch(process.env.REACT_APP_API)
  const body = await resp.json()

  const index = Math.floor(Math.random() * body.length) - 1
  const quoteObject = body[index]
  const quote = `${quoteObject.quote} - ${quoteObject.source}`
  
  return quote
}

export { getQuote }