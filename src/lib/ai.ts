import OpenAI from 'openai'

const client = new OpenAI()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRecommendation = async (data: any) => {
  const completion = await client.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful recommending me if I should reschedule my meetup that is outside with a dataset.',
      },
      {
        role: 'user',
        content: data,
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log('completion', completion)
  //   return completion.data.choices[0].message.content
}
