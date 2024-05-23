/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRecommendation } from '@/lib/ai'
import { WeatherInfo } from '@/features/WeatherInfo'
import { useEffect, useState } from 'react'

interface RecommendationProps {
  data1: WeatherInfo
  data2: WeatherInfo
}

export const Recommendation = ({ data1, data2 }: RecommendationProps) => {
  const [recommendation, setRecommendation] = useState('')

  useEffect(() => {
    getRecommendation(data1, data2).then((choice) => {
      if (choice[0].message.content)
        setRecommendation(choice[0].message.content)
    })
  }, [data1, data2])

  return <div>We recommend: {recommendation}</div>
}
