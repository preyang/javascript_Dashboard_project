class SelectDataset
{
	
	constructor(arr,heading){
		this.ar = arr;
		this.heading = heading;
	}
	selectdataset(arr,heading)
	{
				var HTML = "<table class=bordered border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td><b>" + heading[k] + "</b></td>";
					}
					HTML += "</tr>";
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>";
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>";
					}
					HTML += "</table>";
				return HTML;
	}

	}
	class ColumnDataset extends SelectDataset
	{
	columnDataset(columns,heading)
	{
			var checkBox = "<table>";
					
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + heading[i] + " name=" + columns +" class=filled-in><label for="+heading[i]+">" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + heading[i] + " name=" + columns +" class=filled-in><label for="+heading[i]+">" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + heading[i] + " name=" + columns +" class=filled-in><label for="+heading[i]+">" + heading[i] + "</label></td>";
					}
			checkBox += "</table>";
			return checkBox;
	}
	}


 