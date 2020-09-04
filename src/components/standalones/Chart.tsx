import React from 'react'
import dynamic from 'next/dynamic'
import { Card } from '@/components/helpers'
import { SummaryGraph } from '@/components/standalones'
import theme from '@/styles/theme'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const chartOption = {
  options: {
    chart: {
      id: 'apexchart-example',
      toolbar: {
        show: false
      },
      width: '100%'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['1月', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      min: 0,
      max: 1500,
      tickAmount: 4,
      labels: {
        align: 'left',
        offsetX: 20,
        offsetY: 8,
        maxWidth: 8,
        formatter: (value: number) => (value === 0 ? '' : value)
      }
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    tooltip: {
      theme: 'light',
      x: {
        show: false
      },
      custom: (params: any) => {
        const { series, seriesIndex, dataPointIndex } = params
        return series[seriesIndex][dataPointIndex]
      }
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    fill: {
      colors: [theme.colors.graph.areaBg],
      type: 'solid'
    },
    colors: [theme.colors.text.link],
    markers: {
      colors: [theme.colors.text.contrast],
      strokeColors: [theme.colors.text.link],
      strokeWidth: 3
    }
  },
  series: [
    {
      name: 'series-1',
      data: [820, 1090, 1300, 720, 1290, 1030, 1320],
    }
  ]
}
const Chart: React.FC = () => (
  <>
    <p>チャート</p>
    <Card className='mgb48'>
      <p>echarts</p>
      <SummaryGraph className='mgb16' />
    </Card>
    <Card className='mgb48'>
      <p>apexcharts</p>
      <ApexChart options={chartOption.options} series={chartOption.series} type='area' height={300} />
    </Card>
  </>
)

export default Chart
