import theme from '@/styles/theme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

echarts.registerTheme('dashboard_theme', {
  grid: {
    containLabel: false,
    top: 32,
    left: 50,
    right: 20,
    bottom: 20
  },
  legend: {
    textStyle: {
      fontSize: 12
    }
  },
  tooltip: {
    extraCssText: `text-align: left; padding: 12px; line-height: 1.8; box-shadow: 0px 2px 8px ${theme.colors.graph.tooltipShadow}`,
    backgroundColor: theme.colors.text.contrast,
    textStyle: {
      color: theme.colors.text.primary,
      fontSize: 12
    }
  },
  textStyle: {
    fontSize: 12
  },
  categoryAxis: {
    nameLocation: 'middle',
    nameTextStyle: {
      fontSize: 9,
      color: theme.colors.text.tertiary
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 10
    },
    axisTick: {
      show: false,
      alignWithLabel: true
    }
  },
  valueAxis: {
    nameLocation: 'middle',
    nameTextStyle: {
      fontSize: 9,
      color: theme.colors.text.tertiary,
      align: 'center'
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      fontSize: 10,
      color: theme.colors.text.tertiary
    },
    axisTick: {
      show: false
    }
  }
})
