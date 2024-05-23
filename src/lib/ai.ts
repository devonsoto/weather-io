import OpenAI from 'openai'
import { WeatherInfo } from '@/features/WeatherInfo'
const key = import.meta.env.VITE_OPENAI_API_KEY
const client = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRecommendation = async (
  data1: WeatherInfo,
  data2: WeatherInfo
) => {
  const prompt = `
    Based on the following weather data, recommend if the user should reschedule their outdoor meetup:
    Dataset 1:
    - Conditions: ${data1.conditions}
    - Temperature: ${data1.temp}°C
    - Windspeed: ${data1.windspeed} km/h
    - Precipitation: ${data1.precip} mm

    Dataset 2:
    - Conditions: ${data2.conditions}
    - Temperature: ${data2.temp}°C
    - Windspeed: ${data2.windspeed} km/h
    - Precipitation: ${data2.precip} mm

    Provide a decision and reasoning in one sentence.
  `

  const completion = await client.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful recommending me if I should reschedule my meetup that is outside with a dataset.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 150,
    model: 'gpt-3.5-turbo-16k-0613',
    temperature: 0.7,
  })

  return completion.choices
}
