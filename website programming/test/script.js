import data from "./Crossword 4.json" assert {type: 'json'};; 
import hints from "./cross4hints.json" assert {type: 'json'};; 
import holders from "./cross4Place.json" assert {type:'json'};;
import {main} from "./mainCode.js";
main(data,holders,hints)
