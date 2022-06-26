
export async function getUrl(url) {
  let arr = [];
  try {
    const respons = await fetch(url).then(response => {
      return response.json()
    }).then(
      response => {
        arr = response.data.results
      }
    )
  } catch (error) {
    console.log('произошла ошибка', error)
    return false
  }
  return arr
}