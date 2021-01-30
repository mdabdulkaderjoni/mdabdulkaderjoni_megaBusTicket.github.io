//this function will work on onclick button press
function handlePriceChange(isIncrease, price) {

    const Count = getInputValue(price);

    let NewCount = Count;

    if (isIncrease == true) {
        NewCount = Count + 1;
    }
    if (isIncrease == false && Count > 0) {
        NewCount = Count - 1;
    }

    document.getElementById(price + '-count').value = NewCount;

    let Total = 0;
    if (price == 'firstClass') {
        Total = NewCount * 150;
    }
    if (price == 'economyClass') {
        Total = NewCount * 100;
    }
    document.getElementById('sub-total').innerText = Total;
    calculateTotal();

}
function calculateTotal() {

    const firstClassCount = getInputValue('firstClass');
    const economyClassCount = getInputValue('economyClass');
    //calculate subTotal price
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = totalPrice;
    //calculate vat 
    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat').innerText = vat;
    //calulate grandTotal price
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = grandTotal;

}
//taking id and converting into value
function getInputValue(price) {
    const Input = document.getElementById(price + '-count');
    const Count = parseInt(Input.value);
    return Count;

}

//checkout event for book now button
document.getElementById('book-now').addEventListener('click', function () {
    let firstClassCount = document.getElementById('firstClass-count').value;
    let economyClassCount = document.getElementById('economyClass-count').value;
    if (firstClassCount == 0 && economyClassCount == 0) {
        swal({
            title: "Error",
            text: "Please book your titcket",
            icon: "error",
            button: "Okay",

        });
    }
    //else {
    
        // swal({
        //     title: "Thank You",
        //     text: bookingInformation(),
        //     icon: "success",
        //     button: "Ok",

        // }); 
        else {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal({
                text: bookingInformation(),
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
        

        // document.getElementById('firstClass-count').value = '0';
        // document.getElementById('economyClass-count').value = '0';
        // document.getElementById('sub-total').innerText = '0';
        // document.getElementById('vat').innerText = '0';
        // document.getElementById('grand-total').innerText = '0';


    }

    // document.getElementById('firstClass-count').value = '0';
    //     document.getElementById('economyClass-count').value = '0';
    //     document.getElementById('sub-total').innerText = '0';
    //     document.getElementById('vat').innerText = '0';
    //     document.getElementById('grand-total').innerText = '0';

    // //this function will show booking information in alert 
    // function bookingInformation() {
    //     let firstClass='First Class ($150) - '+document.getElementById('firstClass-count').value+' Tickets',
    //     economyClass='Economy ($100) - '+document.getElementById('economyClass-count').value+' Tickets\n',
    //     sub='Subtotal - $ '+document.getElementById('sub-total').innerText,
    //     vat='Charge 10% VAT - $ '+document.getElementById('vat').innerText+'\n',
    //     grand='Total - $ '+document.getElementById('grand-total').innerText;
        
    //     let itemList = ["You have successfully  booked your ticket\n",firstClass,economyClass,sub,vat,grand];
    //     let newList =''
    //     for (let i = 0; i < itemList.length; i++) {
    //         newList += ' ' + itemList[i]+'\n';
    //     }
    //     return newList;
    // }

    

})

//this function will show booking information in alert 
function bookingInformation() {
    let firstClass='First Class ($150) - '+document.getElementById('firstClass-count').value+' Tickets',
    economyClass='Economy ($100) - '+document.getElementById('economyClass-count').value+' Tickets\n',
    sub='Subtotal - $ '+document.getElementById('sub-total').innerText,
    vat='Charge 10% VAT - $ '+document.getElementById('vat').innerText+'\n',
    grand='Total - $ '+document.getElementById('grand-total').innerText;
    
    let itemList = ["You have successfully  booked your ticket\n",firstClass,economyClass,sub,vat,grand];
    let newList =''
    for (let i = 0; i < itemList.length; i++) {
        newList += ' ' + itemList[i]+'\n';
    }
    document.getElementById('firstClass-count').value = '0';
        document.getElementById('economyClass-count').value = '0';
        document.getElementById('sub-total').innerText = '0';
        document.getElementById('vat').innerText = '0';
        document.getElementById('grand-total').innerText = '0';
    return newList;
}

