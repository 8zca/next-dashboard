import React from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts, { EChartOption } from 'echarts/lib/echarts'
import './common'

const SummaryGraph: React.FC = () => (
  <Wrapper>
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
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {
        color: theme.colors.graph.areaBg
      },
      lineStyle: {
        width: 0
      },
      symbol: 'none'
    }
  ]
  const option: EChartOption = {
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: '売上（千円）',
      nameGap: 40
    },
    series
  }
  return option
}

export default SummaryGraph

const Wrapper = styled.div`
  width: 100%;
`
