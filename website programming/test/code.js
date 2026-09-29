import data from "./cross4hints.json" assert {type: 'json'};; 
var puzzelTable = document.getElementById("hintsTable");
var puzzelData = data;
            for ( var i = 0; i < puzzelData.length ; i++ ) {
                var row = puzzelTable.insertRow(-1);
                var rowData = puzzelData[i];
                for(var j = 0 ; j < rowData.length ; j++){
                    var cell = row.insertCell(-1);
                    if(rowData[j] != 0){
                        var txtID = String('txt' + '_' + i + '_' + j);
                        cell.innerHTML = rowData[j]
                    }else{
                        cell.style.backgroundColor  = "black";
                    }
                }
            }