function myCalculation() {
   
    var q1 = document.getElementById("quantity1").value;
    var p1 = document.getElementById("myTable").rows[1].cells.namedItem("price1").innerHTML;
    var a1 = document.getElementById("amount1").innerHTML = q1 * p1;

    var q2 = document.getElementById("quantity2").value;
    var p2 = document.getElementById("myTable").rows[2].cells.namedItem("price2").innerHTML;
    var a2 = document.getElementById("amount2").innerHTML = q2 * p2;

    var q3 = document.getElementById("quantity3").value;
    var p3 = document.getElementById("myTable").rows[3].cells.namedItem("price3").innerHTML;
    var a3 = document.getElementById("amount3").innerHTML = q3 * p3;
   
    var s = document.getElementById("sum").innerHTML = a1 + a2 + a3;

    let discount
    if(s>=1000){
        discount=s*(10/100)
    }
    else if(s>=500 || s<1000){
        discount=s*(5/100)
    }
    var t=document.getElementById("discount").innerHTML = discount;
    var f=document.getElementById("final").innerHTML = s-discount;
}

window.onload=function(){
    document.getElementById("download")
    .addEventListener("click",()=>{
        const invoice=this.document.getElementById("invoice");
        html2pdf().from(invoice).save();
    })
}