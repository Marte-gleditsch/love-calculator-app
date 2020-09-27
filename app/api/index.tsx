const baseUrl = 'https://love-calculator.p.rapidapi.com'
const endpoint = `${baseUrl}/getPercentage`

export type LoveCalculatorResponse = {
  fname: string
  sname: string
  percentage: string
  result: string
}

export async function checkForMatch(name1: string, name2: string): Promise<LoveCalculatorResponse | void> {
  try {
    let response = await fetch(`${endpoint}?fname=${name1}&sname=${name2}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': '169a33402dmshb557bfe16ebfb46p13c2f4jsn0dbad90ac226',
      },
    })
    let json = await response.json()
    return json
  } catch (error) {
    console.error(error)
  }
}
