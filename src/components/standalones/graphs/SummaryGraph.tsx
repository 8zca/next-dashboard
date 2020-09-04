import React from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts, { EChartOption } from 'echarts/lib/echarts'
import './common'

type Props = {
  className?: string
}

const SummaryGraph: React.FC<Props> = ({ className }) => (
  <Wrapper className={className}>
    <ReactEchartsCore
      echarts={echarts}
      option={makeOption()}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: '280px' }}
      theme='dashboard_theme'
    />
  </Wrapper>
)

const makeOption = () => {
  const series: EChartOption.SeriesLine[] = [
    {
      data: [820, 1090, 1300, 720, 1290, 1030, 1320],
      type: 'line',
      areaStyle: {
        opacity: 0.08
      },
      lineStyle: {
        color: theme.colors.text.link,
        width: 3
      },
      symbolSize: 3,
      itemStyle: {
        color: theme.colors.text.link,
        borderColor: theme.colors.text.link
      },
      emphasis: {
        itemStyle: {
          borderWidth: 3
        }
      }
    }
  ]

  const label = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const option: EChartOption = {
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      data: label,
      boundaryGap: false,
      axisLabel: {
        // 最初と最後のラベル位置を調節
        formatter: (value: string, index: number) => {
          if (index === 0) return `{f|${value}}`
          if (index === label.length - 1) return `{l|${value}}`
          return value
        },
        rich: {
          f: { padding: [0, 0, 0, 24] },
          l: { padding: [0, 24, 0, 0] }
        },
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        inside: true,
        padding: [18, 0, 0, 0],
        formatter: (value: number) => (value === 0 ? '' : value)
      }
    },
    series
  }
  return option
}

export default SummaryGraph

const Wrapper = styled.div`
  width: 100%;
`
