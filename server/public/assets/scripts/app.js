YUI().use('datatable', 'datatype-number', 'io', 'json-parse', function(Y){
 	var url = '/data';
 	var callback = {
 		method: 'GET',
 		on: {
 			success: function(x, res){
 				var wolves = [];
 				wolves = Y.JSON.parse(res.responseText);

        		var table = new Y.DataTable({
					data: wolves,
					columns: [ 
						{ key: "PLAYER", label: "Player Name", allowHTML: true, sortable: true } , 
						{ key: "GP" , label: "GP" , sortable: true } , 
						{ key: "GS" , label: "GS" , sortable: true } ,
						{ key: "MIN" , label: "MIN" , sortable: true } ,
						{ key: "PPG" , label: "PPG" , sortable: true } ,
						{ key: "OFFR" , label: "OFFR" , sortable: true } ,
						{ key: "DEFR" , label: "DEFR" , sortable: true } ,
						{ key: "RPG" , label: "RPG" , sortable: true } ,
						{ key: "APG" , label: "APG" , sortable: true } ,
						{ key: "SPG" , label: "SPG" , sortable: true } ,
						{ key: "BPG" , label: "BPG" , sortable: true } ,
						{ key: "TPG" , label: "TPG" , sortable: true } ,
						{ key: "FPG" , label: "FPG" , sortable: true } ,
						{ key: "A/TO" , label: "A/TO" , sortable: true } ,
						{ key: "PER" , label: "PER" , sortable: true } ,
					],
					caption: "Player Statistics as of March 4th, 2016"
				});
				table.render('#output');
			} // end Success
		} //end ON
 	}; // end callback
 	Y.io(url,callback);
   	
	// date formatter example - needs 'datatype-number' dependency
	function formatDate(cell){
		return Y.DataType.Date.format(cell.value, { format: '%x' });
	}
	// currency formatter
	function formatCurrency(cell){
		var format = {
			prefix: "$",
			thousandsSeparator: ",",
			decimalSeparator: ".",
			decimalPlaces: 2
		}
		return Y.DataType.Number.format(cell.value , format);
	}
});


