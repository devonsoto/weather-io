export const verticalLinePlugin = {
  id: 'verticalLinePlugin',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeDraw: (chart: any) => {
    const ctx = chart.ctx
    const xAxis = chart.scales['x']
    const yAxis = chart.scales['y']

    const intervals = chart.options.plugins.verticalLinePlugin.intervals || []
    const lineColor =
      chart.options.plugins.verticalLinePlugin.lineColor || 'rgba(0, 0, 0, 0.8)'
    const lineWidth = chart.options.plugins.verticalLinePlugin.lineWidth || 2
    const lineDash = chart.options.plugins.verticalLinePlugin.lineDash || [5, 5]

    // Loop through the defined intervals and draw the vertical lines
    intervals.forEach(
      ({ interval }: { interval: { start: string; end: string } }) => {
        const startPixel = xAxis.getPixelForValue(interval.start)
        const endPixel = xAxis.getPixelForValue(interval.end)

        // Draw start line
        ctx.save()
        ctx.beginPath()
        ctx.setLineDash(lineDash)
        ctx.moveTo(startPixel, yAxis.top)
        ctx.lineTo(startPixel, yAxis.bottom)
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth
        ctx.stroke()
        ctx.closePath()

        // Draw end line
        ctx.beginPath()
        ctx.moveTo(endPixel, yAxis.top)
        ctx.lineTo(endPixel, yAxis.bottom)
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
      }
    )
  },
}
