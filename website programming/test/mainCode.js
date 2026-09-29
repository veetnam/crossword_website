export function main(data,holders,hints){
    var repeat;
    var puzzelData = data;
        function start(){
            var puzzelTable = document.getElementById("puzzel");
            for ( var i = 0; i < puzzelData.length ; i++ ) {
                var row = puzzelTable.insertRow(-1);
                var rowData = puzzelData[i];
                for(var j = 0 ; j < rowData.length ; j++){
                    var cell = row.insertCell(-1);
                    if(rowData[j] != 0){
                        var txtID = String('txt' + '_' + i + '_' + j);
                        cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 
                        'id="' + txtID + '" ">';
                    }else{
                        cell.style.backgroundColor  = "black";
                    }
                }
            }
            for(var i = 0;i<holders.length;i++){
                document.getElementById(holders[i]).placeholder = i+1;}
                var puzzelTable = document.getElementById("hintsTable");
                var hintData = hints;
            for ( var i = 0; i < puzzelData.length ; i++ ) {
                var row = puzzelTable.insertRow(-1);
                var rowData = hintData[i];
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
        }   
        function textInputFocus(txtID123){
            currentTextInput = txtID123;
        }
        document.getElementById('check').addEventListener('click',()=>{
            repeat = setInterval(Check,100);
        })
        document.getElementById('checkOff').addEventListener('click',()=>{
            clearInterval(repeat);
            for ( var i = 0; i < puzzelData.length ; i++ ) {
                var rowData = puzzelData[i];
                for(var j = 0 ; j < rowData.length ; j++){
                    if(rowData[j] != 0){
                    document.getElementById('txt' + '_' + i + '_' + j).style.backgroundColor = 'white';
                    }
                }
            }
        })
        function Check(){
        for ( var i = 0; i < puzzelData.length ; i++ ) {
            var rowData = puzzelData[i];
            for(var j = 0 ; j < rowData.length ; j++){
                if(rowData[j] != 0){
                    var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
                    if(selectedInputTextElement.value != puzzelData[i][j]){
                        selectedInputTextElement.style.backgroundColor = 'red';
                        
                    }else{
                        selectedInputTextElement.style.backgroundColor = 'white';
                    }
                }
            }}}
        document.getElementById('clear').addEventListener('click',()=>{
        var puzzelTable = document.getElementById("puzzel");
        var puzzelData = data;
        for ( var i = 0; i < puzzelData.length ; i++ ) {
            var rowData = puzzelData[i];
            for(var j = 0 ; j < rowData.length ; j++){
                if(rowData[j] != 0){
                    document.getElementById('txt' + '_' + i + '_' + j).value = '';
                }
            }
        }   
    })
        start()    
    
}