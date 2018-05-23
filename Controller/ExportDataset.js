class ExportDataset
{
	constructor(object, column){
		this.object = object;
		this.column = column;
	}
	downloadCSV(object, column)
	{
		
		var data = object.toArray();
		var csv = column  + '\n';
		data.forEach(function(row) {
						csv += row.join(',');
						csv += "\n";
				});
		var downloadLink = document.createElement("a");
		var blob = new Blob(["\ufeff", csv]);
		var url = URL.createObjectURL(blob);
		downloadLink.href = url;
		downloadLink.download = "DataCsv.csv";  //Name the file here
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}
	downloadJSON(object, column)
	{
		
		var data = object.toJSON();
		var csv = column  + '\n';
		var downloadLink = document.createElement("a");
		var blob = new Blob(["\ufeff", data]);
		var url = URL.createObjectURL(blob);
		downloadLink.href = url;
		downloadLink.download = "DataJson.json";  //Name the file here
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}

}
