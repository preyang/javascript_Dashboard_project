class FilterByRow
{
	
	constructor()
	{
		
	}
	filterfunction(col,selectedcolumn,dfObj)
	{
	
		var flag =false;
		var check =false;
		var scolHTML = 'Select a Filter Condtion <br> <input  name ="fc" type="radio" id="greater"  value="greater" />';
		scolHTML+='<label  for="greater" style="padding-left:25px !important;  padding-right:20px">';
		scolHTML+='<span>Greater than equal to</span></label><input id="less" name ="fc" type="radio"  value="less"/>';
		scolHTML+='<label for="less"  style="padding-left:25px !important;  padding-right:20px">';
		scolHTML+='<span>Less than equal to</span></label><input id="equal" name ="fc" type="radio"  value="equal"/>';
		scolHTML+='<label for="equal"  style="padding-left:25px !important;  padding-right:20px">';
		scolHTML+='<span>Equal</span></label>';
		
		//var col = document.getElementsByName("columns");
		var string = [];
		for(var i= 0;i < col.length;i++)
		{
			if(col[i].checked)
			{
				string.push(col[i].id); 
			}
		}
		selectedcolumn = string;
		dfObj1 = dfObj.restructure(string);
		var header = dfObj1.listColumns();
		var arr = dfObj1.toArray();
		
		if(string.length>0){
		var valHTML = '';
		var catHTML = '';
		}
		else{
		var valHTML = '';
		var catHTML = '';
		document.getElementById("scol").innerHTML = "Please Select a column to apply row filter.";
		}
		var HTML = "<table class=bordered border=1 width=100%><tr>";
				for(var k=0; k<header.length; k++){
					HTML += "<td><b>" + header[k] + "</b></td>";
					if(header[k]==="")
					{
					var valHTML="";
					var catHTML="";
					}
					if(header[k]=="Residential_Units" || header[k]=="Residential_Rental_Units" || header[k]=="COC_Term"|| header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
					{	
						
						if(flag==false)
						{
							if(check==false)
							{
								valHTML+='Select Value <br> ';
								catHTML+='Select Category <br>'
							}
							for(var j =1; j<=5;j++)
							{
								valHTML+='<input id="'+j+'" name="stat" type="radio" value="'+j+'"  /><label for="'+j+'"  style="padding-left:25px !important;  padding-right:20px" ><span>'+j+'</span></label>';
								catHTML+='<input type=checkbox id="cat'+j+'" name="category" class=filled-in value='+j+'><label for="cat'+j+'" style="padding-left:25px !important;  padding-right:20px">'+j+'</label>';
							}
							if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
							{
								for(var m =1; m<=5;m++)
							{
								valHTML+='<input id="'+m*10+'" name="stat" type="radio" value="'+m*10+'"  /><label for="'+m*10+'"  style="padding-left:25px !important;  padding-right:20px" ><span>'+m*10+'</span></label>';
							   
							}
							}
						}
						flag=true;
						check=true;
					}

					if(header[k]=="Year_Built")
					{	
							
							if(flag==false)
							{
								valHTML+='Select Value <br> ';
								catHTML+='Select Category <br> '
								
							}
							valHTML+='<input id="1850" name="stat" type="radio" value="1850" /><label for="1850"  style="padding-left:25px !important;  padding-right:20px"><span>1850</span></label>';
							valHTML+='<input id="1900" name="stat" type="radio" value="1900"/><label for="1900"  style="padding-left:25px !important;  padding-right:20px"><span>1900</span></label>';
							valHTML+='<input id="1950" name="stat" type="radio" value="1950"/><label for="1950"  style="padding-left:25px !important;  padding-right:20px"><span>1950</span></label>';
							catHTML+='<input type=checkbox id="cat2000" name="category" class=filled-in value="2000"><label for="cat2000" style="padding-left:25px !important;  padding-right:20px">&gt2000</label>';
							catHTML+='<input type=checkbox id="cat1900" name="category" class=filled-in value="1900"><label for="cat1900" style="padding-left:25px !important;  padding-right:20px">&gt1900</label>';
							catHTML+='<input type=checkbox id="cat1850" name="category" class=filled-in value="1850"><label for="cat1850" style="padding-left:25px !important;  padding-right:20px">&gt1850</label>';

							check =true;
					}
					// this will run if no condition is true
					if(check==false)
					{
						var valHTML = '';
						flag=false;
						document.getElementById("scol").innerHTML = "No Row filter available for selected column.";
						document.getElementById("scat").innerHTML = "No Row filter available for selected column.";
					
					}
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
				
		//document.getElementById("outputDiv").innerHTML = HTML;
		
		if(check==true)
		{
		 document.getElementById("scol").innerHTML = scolHTML;
		}
		
		if(typeof valHTML != 'undefined')
		{
			
			document.getElementById("sval").innerHTML =valHTML;
			document.getElementById("scat").innerHTML =catHTML;
		}
		//filteredObj = dfObj1;
		return HTML;
	}
	filterrowobj()
	{
		filteredObj = dfObj1;
		return filteredObj;
	}
	
	filterfunctionrow(filteredObj)
	{
		localFobj = filteredObj;
		
		var header = localFobj.listColumns();
		
		var radio =document.getElementsByName('stat');
		var category = document.getElementsByName('category');
		var operation = document.getElementsByName('fc');
		for(var j=0;j<operation.length;j++)
		{
			if(operation[j].checked)
			{
				console.log("my"+operation[j].value);
				if(operation[j].value=='greater')
				{
					for (var i = 0; i < radio.length; i++)
					{
						if (radio[i].checked)
						{
							console.log("test"+radio[i].value);	
							if(radio[i].value==1 || radio[i].value==2 || radio[i].value==3 || radio[i].value==4 || radio[i].value==5 || radio[i].value==10 || radio[i].value==20 || radio[i].value==30 || radio[i].value==40 || radio[i].value==50)
							{
								console.log("abc");
								for(var k=0; k<header.length; k++)
								{
									if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
									{
										for(var k=0; k<header.length; k++)
										{
										if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
										localFobj=localFobj.filter(row => row.get(header[k]) >= parseInt(radio[i].value));
										}
										break;
									}
									
									else if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
									{
										console.log("greater than bru"+radio[i].value);
										console.log("type"+typeof radio[i].value);
										for(var k=0; k<header.length; k++)
										{
											if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
											localFobj=localFobj.filter(row => row.get(header[k]) >= parseInt(radio[i].value));
										}
										break;
									}

									else{}
								
								}
							}
							//year selected 
							else
							{
								localFobj=localFobj.filter(row => row.get('Year_Built') >= radio[i].value);
							}
							
							break;
						}
					}
				}
				
				if(operation[j].value=='less')
				{
					for (var i = 0; i < radio.length; i++)
					{
						if (radio[i].checked)
						{
							console.log("test"+radio[i].value);	
							if(radio[i].value==1 || radio[i].value==2 || radio[i].value==3 || radio[i].value==4 || radio[i].value==5 || radio[i].value==10 || radio[i].value==20 || radio[i].value==30 || radio[i].value==40 || radio[i].value==50)
							{
								for(var k=0; k<header.length; k++)
								{
									if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
									{
										for(var k=0; k<header.length; k++)
										{
										if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
										localFobj=localFobj.filter(row => row.get(header[k]) <= parseInt(radio[i].value));
										}
										break;
									}
									
									else if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
									{
										for(var k=0; k<header.length; k++)
										{
										if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
										localFobj=localFobj.filter(row => row.get(header[k]) <= parseInt(radio[i].value));
										}
										break;
									}
									else{}
								
								}
							}
							//year selected 
							else
							{
								localFobj=localFobj.filter(row => row.get('Year_Built') <= radio[i].value);
							}
							
							break;
						}
					}
				}
				
				
				if(operation[j].value=='equal')
				{
					for (var i = 0; i < radio.length; i++)
					{
						if (radio[i].checked)
						{
							console.log("test"+radio[i].value);	
							if(radio[i].value==1 || radio[i].value==2 || radio[i].value==3 || radio[i].value==4 || radio[i].value==5 || radio[i].value==10 || radio[i].value==20 || radio[i].value==30 || radio[i].value==40 || radio[i].value==50)
							{
								for(var k=0; k<header.length; k++)
								{
									if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
									{
										for(var k=0; k<header.length; k++)
										{
										if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
										localFobj=localFobj.filter(row => row.get(header[k]) == parseInt(radio[i].value));
										}
										break;
									}
									
									else if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
									{
										for(var k=0; k<header.length; k++)
										{
										if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
										localFobj=localFobj.filter(row => row.get(header[k]) == parseInt(radio[i].value));
										}
										break;
									}
									else{}
								
								}
							}
							//year selected 
							else
							{
								localFobj=localFobj.filter(row => row.get('Year_Built') == radio[i].value);
							}
							break;
						}
					}
				}
				break;
			}
		}
		var cbFlag =false;
		var stringFilter=[];
		var fobj=[];
		// checkbox
		for(var i=0;i<category.length;i++)
		{
			if(category[i].checked)
			{
			  console.log("test"+category[i].value);
			  if(category[i].value==1 || category[i].value==2 || category[i].value==3 || category[i].value==4 || category[i].value==5)
							{
								for(var k=0; k<header.length; k++)
								{
									if(header[k]=="Residential_Units" || header[k]=="COC_Term" || header[k]=="Residential_Rental_Units")
									{
										stringFilter.push("row => row.get("+header[k]+")== "+category[i].value);
										fobj.push(localFobj.filter(row => row.get(header[k]) == category[i].value));
										
										break;
									}
									
									else if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
									{
										console.log("check"+header[k]);
											
										stringFilter.push("row => row.get("+header[k]+")=="+category[i].value);
										localFobj=localFobj.filter(row => row.get(header[k]) == category[i].value);
										fobj.push(localFobj);
										
										
										
										break;
									}
									else{}
								
								}
							}
							//year selected 
							else
							{
								stringFilter.push("row => row.get('Year_Built')== "+category[i].value);
								fobj.push(localFobj.filter(row => row.get('Year_Built') == category[i].value));
							}
				cbFlag=true;			
			  
			}
			
			
		}
		
		if(cbFlag==true)
		{
			var fObjUnion;
		
			for(i=0; i<fobj.length; i++)
			{
				if(i==0)
				{
					fObjUnion=fobj[i];
				}
				else
				{
				fObjUnion=fObjUnion.union(fobj[i]);
				}
			}
			localFobj= fObjUnion;
		}
			console.log("out");
			var arr = localFobj.toArray();
		header = localFobj.listColumns();
		// draw again
		var HTML = "<table class=bordered border=1 width=100%><tr>";
				for(var k=0; k<header.length; k++){
					HTML += "<td><b>" + header[k] + "</b></td>";
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
		addStatisticsFunction(localFobj)
		{
			document.getElementById("sr").innerHTML = "";
			var header = localFobj.listColumns();
			var arr = localFobj.toArray();
			var count;
			var max;
			var min;
			
			for(var k=0; k<header.length; k++)
			{
				if(header[k]=="Year_Built")
				{
				 count = localFobj.count();
				 console.log("inside"+count);
				 var HTML = "<table class=bordered border=1 width=100%><tr>";
				 HTML += "<td><b>Count</b></td>";
				 HTML += "</tr>";
				 HTML +=  "<tr>";
				 HTML += "<td align=center>"+count+"</td>";
				 HTML +=  "</tr>";
				 HTML += "</table>";
				}
				else if(header[k]=="COC_Term")
				{
				 max = localFobj.stat.max('COC_Term');
				 min = localFobj.stat.min('COC_Term');
				 var HTML = "<table class=bordered border=1 width=100%><tr>";
				 HTML += "<td><b>Max</b></td><td><b>Min</b></td>";
				 HTML += "</tr>";
				 HTML +=  "<tr>";
				 HTML += "<td align=center>"+max+"</td><td align=center>"+min+"</td>";
				 HTML +=  "</tr>";
				 HTML += "</table>";
				}
				else if(header[k]=="Residential_Rental_Units")
				{
				 count = localFobj.count();
				 max = localFobj.stat.max('Residential_Rental_Units');
				 min = localFobj.stat.min('Residential_Rental_Units');
				 var HTML = "<table class=bordered border=1 width=100%><tr>";
				 HTML += "<td><b>Count</b></td><td><b>Max</b></td><td><b>Min</b></td>";
				 HTML += "</tr>";
				 HTML +=  "<tr>";
				 HTML += "<td align=center>"+count+"</td><td align=center>"+max+"</td><td align=center>"+min+"</td>";
				 HTML +=  "</tr>";
				 HTML += "</table>";
				}
				else if(header[k]=="Residential_Units")
				{
				 count = localFobj.count();
				 max = localFobj.stat.max('Residential_Units');
				 min = localFobj.stat.min('Residential_Units');
				 var HTML = "<table class=bordered border=1 width=100%><tr>";
				 HTML += "<td><b>Count</b></td><td><b>Max</b></td><td><b>Min</b></td>";
				 HTML += "</tr>";
				 HTML +=  "<tr>";
				 HTML += "<td align=center>"+count+"</td><td align=center>"+max+"</td><td align=center>"+min+"</td>";
				 HTML +=  "</tr>";
				 HTML += "</table>";
				}
				else if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
				{
				
				  for(var k=0; k<header.length; k++)
				  {
					if(header[k]=="1-BRUnits"|| header[k]=="2-BRUnits"|| header[k]=="3-BRUnits"|| header[k]=="4-BRUnits"|| header[k]=="5-BRUnits"|| header[k]=="6-BR+Units"|| header[k]=="TotalUnits")
				{					
				 count = localFobj.count();
				 max = localFobj.stat.max(header[k]);
				 min = localFobj.stat.min(header[k]);
				 HTML = "<table class=bordered border=1 width=100%><tr>";
				 HTML += "<td><b>Count</b></td><td><b>Max</b></td><td><b>Min</b></td>";
				 HTML += "</tr>";
				 HTML +=  "<tr>";
				 HTML += "<td align=center>"+count+"</td><td align=center>"+max+"</td><td align=center>"+min+"</td>";
				 HTML +=  "</tr>";
				 HTML += "</table>";
				 }
				 }
				
				}
				else
				{
				}
			}
				return HTML;
			
		}
		
		
}