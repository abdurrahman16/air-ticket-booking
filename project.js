//first class flight

document.getElementById('firstClass-Increase').addEventListener('click', function(){
    
    firstClassBill(true);
    
    });


    document.getElementById('firstClass-decrease').addEventListener('click', function(){ 
        
        firstClassBill(false);  
         
        });


// economy class flight

document.getElementById('economyClass-Increase').addEventListener('click', function(){

    ecoClassBill (true);

});


document.getElementById('economyClass-decrease').addEventListener('click', function(){

    ecoClassBill (false);

});

// bill for economy class

       function ecoClassBill (IsIncrease){
        const ecoClassInput = document.getElementById('economyClass-count');
     const ecoCount = parseInt(ecoClassInput.value);

        let ecoClassNewCount = ecoCount;
        if (IsIncrease == true){
            ecoClassNewCount = ecoCount + 1;
        }
        if (IsIncrease == false && ecoClassNewCount>0){
            ecoClassNewCount = ecoCount - 1;
        }
      
        ecoClassInput.value = ecoClassNewCount;
     var ecoTotal = ecoClassNewCount * 100; 
     SubBill ();

       }

       // // bill for first class

       function firstClassBill (IsIncrease){
        const firstClassInput = document.getElementById('firstClass-count');
        const fCount = parseInt(firstClassInput.value);

        let fClassNewCount = fCount;
        if (IsIncrease == true){
            fClassNewCount = fCount + 1;
        }
        if (IsIncrease == false && fClassNewCount>0){
            fClassNewCount = fCount - 1;
        }
      
        firstClassInput.value = fClassNewCount;
        var fTotal = fClassNewCount * 150;
        SubBill ();

       }
       
       // sub total
       
       
        function SubBill (){

            const ecoClassInput = document.getElementById('economyClass-count');
            const ecoCount = parseInt(ecoClassInput.value);

            const firstClassInput = document.getElementById('firstClass-count');
            const fCount = parseInt(firstClassInput.value);

            const finalCost = fCount*150 + ecoCount*100;
            var subTotals = parseInt(finalCost);

             // Sub total

            document.getElementById('sub-Total').innerText = '$'+ subTotals;
            // Vat total
            var vatCount = Math.round(subTotals*0.1);
            document.getElementById('vat').innerText = '$'+vatCount;

            // final bill
            var totalBills = vatCount + subTotals;
            document.getElementById('finalCharge').innerText ='$'+totalBills;


        }


