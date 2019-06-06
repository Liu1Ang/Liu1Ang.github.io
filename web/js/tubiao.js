var myChart = echarts.init(document.getElementById('main'));
option = {
	title: {
		text: 'Skills',
		subtext: '',
		x: 'center',
		textStyle: {
			fontSize: 30,
			color: '#fff'
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c}%"
	},
	legend: {
		x: 'center',
		y: 'bottom',
		data: ['JavaScript', 'css3', 'html5', 'jQuery', 'Bootstrap', 'Vue'],
		textStyle: {
			fontSize: 20,
			color: '#fff'
		}
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['pie', 'funnel']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	series: [{
		name: '',
		type: 'pie',
		radius: [20, 110],
		center: ['25%', '50%'],
		roseType: 'radius',
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: true
			}
		},
		lableLine: {
			normal: {
				show: false
			},
			emphasis: {
				show: true
			}
		},
		data: [{
				value: 65,
				name: 'JavaScript'
			},
			{
				value: 80,
				name: 'css3'
			},
			{
				value: 80,
				name: 'html5'
			},
			{
				value: 85,
				name: 'jQuery'
			},
			{
				value: 70,
				name: 'Bootstrap'
			},
			{
				value: 45,
				name: 'Vue'
			}
		],
		itemStyle: {
			normal: {
				label: {
					textStyle: {
						fontSize: 16
					}
				}
			}
		}
	}]
};
myChart.setOption(option);