
class BaseChart {
	constructor() {
	}
	createChart(area, settings) {
		new Chart(area, settings);
	}
}

class ChartFactory {
	constructor() {
	}
	selectChart(area, data, label, type) {
		if (type == 'bar') {
			return new BarChart(area, data, label);
		}
		else if (type == 'pie') {
			return new PieChart(area, data, label);
		}
		else if (type == 'doughnut') {
			return new DoughnutChart(area, data, label);
		}
		else if (type == 'line') {
			return new LineChart(area, data, label);
		}
		
		
	}
}
class BarChart extends BaseChart {
	constructor(area, data, label) {
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.settings = {
			type:'bar',
			data: {
				labels: this.label,
				datasets: [{
					data: this.data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)'
					],
					borderWidth: 1,
					hoverBorderWidth:3,
					hoverBorderColor: 'black'
					}]
				},
					options:{
						title:
						{
							display:true,
							text: 'Bar Chart',
							fontSize:30
						},
						legend:
						{
							display:true,
							position:'bottom',
							labels:
							{
								fontColor:'green'
							}
						},
						layout:
						{
							padding:
							{
								left:50,
								right:50,
								bottom:0,
								top:0
							}
						},
						tooltips:
						{
							enabled:true
						}	
					}
					};
	}
	plotChart() {
		console.log(this.settings);
		console.log(this.data);
		console.log('area', this.area);
		super.createChart(this.area, this.settings);
	}
}
class PieChart extends BaseChart {
	constructor(area, data, label) {
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.settings = {
			type:'pie',
			data: {
				labels: this.label,
				datasets: [{
					data: this.data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)'
					],
					borderWidth: 1,
					hoverBorderWidth:3,
					hoverBorderColor: 'black'
					}]
				},
					options:{
						title:
						{
							display:true,
							text: 'Pie Chart',
							fontSize:30
						},
						legend:
						{
							display:true,
							position:'bottom',
							labels:
							{
								fontColor:'green'
							}
						},
						layout:
						{
							padding:
							{
								left:50,
								right:50,
								bottom:0,
								top:0
							}
						},
						tooltips:
						{
							enabled:true
						}	
					}
					};
	}
	plotChart() {
		console.log(this.settings);
		console.log(this.data);
		console.log('area', this.area);
		super.createChart(this.area, this.settings);
	}
}
class DoughnutChart extends BaseChart {
	constructor(area, data, label) {
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.settings = {
			type:'doughnut',
			data: {
				labels: this.label,
				datasets: [{
					data: this.data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)'
					],
					borderWidth: 1,
					hoverBorderWidth:3,
					hoverBorderColor: 'black'
					}]
				},
					options:{
						title:
						{
							display:true,
							text: 'Doughnut Chart',
							fontSize:30
						},
						legend:
						{
							display:true,
							position:'bottom',
							labels:
							{
								fontColor:'green'
							}
						},
						layout:
						{
							padding:
							{
								left:50,
								right:50,
								bottom:0,
								top:0
							}
						},
						tooltips:
						{
							enabled:true
						}	
					}
					};
	}
	plotChart() {
		console.log(this.settings);
		console.log(this.data);
		console.log('area', this.area);
		super.createChart(this.area, this.settings);
	}
}
class LineChart extends BaseChart {
	constructor(area, data, label) {
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.settings = {
			type:'line',
			data: {
			labels: this.label,
			datasets: [{
			
			data: data,
			
			borderWidth: 2,
			borderColor : 'black',
			hoverBorderWidth:3,
			hoverBorderColor: 'black',
			fill:false
			}]
			},
			options:{
			
			title:{
			display:true,
			text: 'Line Chart',
			fontSize:30
			},
			legend:{
			display:true,
			position:'bottom',
			labels:{
			fontColor:'green'
			}
			},
			layout:{
			padding:{
			left:50,
			right:50,
			bottom:0,
			top:0
			}
			},
			tooltips:{
			enabled:true
			}
			}
			};
	}
	plotChart() {
		console.log(this.settings);
		console.log(this.data);
		console.log('area', this.area);
		super.createChart(this.area, this.settings);
	}
}
class DataCheck{
	constructor(col, localFobj){
		this.col = col;
		this.localFobj = localFobj;
	}
	data(col,localFobj)
	{
			var data = [];
			//var col = localFobj.listColumns();
			var dist=[];
			
			//console.log("selectedcolumn" + selectedcolumn);
			for(var i = 0; i< col.length;i ++)
		    {
			 dist.push(localFobj.distinct(col[i]));
			 //console.log(" column count"+localFobj.distinct(col[i]).count());
			 
			}
			//console.log("distlenght"+dist.length);
			for(var i =0; i<dist.length;i++)
			{
				selectedcolumn=[];
				var test = dist[i];
				var arrtest =dist[i].toArray();
				//console.log("arr"+arrtest.length);
				//console.log(arrtest);
				for(var j=0;j<arrtest.length;j++)
				{
					data[j] = localFobj.where(row=>row.get(col[i])==arrtest[j]).count();
					//console.log("aa-data"+data[j]);
					selectedcolumn[j] = arrtest[j];
				}
				
			}
			return data;
	}
}