function myFunc(){ //myFunc() is a function that dynamically adds rows in a table

    var array1,tab,tr,td,tn,row,col; //variables declared
	
	array1=[["X","A","B","C","D"],[0,0,1,2,3],[1,4,5,6,7],[2,8,9,10,11],[3,12,13,14,15],[4,16,17,18,19],[5,20,21,22,23],[6,24,25,26,27],[7,28,29,30,31],[8,32,33,34,35]];//array1[] initialized with array values  
	
    tab=document.getElementById("dynamic-table"); //tab object has table html element with id name dynamic-table 
        
    for(row=0;row<array1.length;row++){ //for loop iterates row until the length of the array
	
    tr=document.createElement('tr'); //table row object tr is created
	
    for(col=0;col<array1[row].length;col++){ //for loop iterates col with row count until the length of the array
		
	td=document.createElement('td'); //td object variable of table element is created    
	tn=document.createTextNode(array1[row][col]); //tn object created having array1[] row and col elements 
	td.appendChild(tn); //td object of table element associated with appendChild built-in method holds tn object parameter
	tr.appendChild(td); //tr object of table element associated with appendChild built-in method holds td object parameter
		
    }
	
	tab.appendChild(tr); //tab object of table element associated with appendChild built-in method holds tr object parameter
	
    }
}