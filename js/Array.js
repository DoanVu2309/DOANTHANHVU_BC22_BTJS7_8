/**
 * Nhập Mảng
 * B1: Nhập các số cần tìm vào mảng
 */
 var listNumber = [];
 document.getElementById("btn_xuatArray").addEventListener("click", function () {
     var number = document.getElementById("txt_nhapArray").value * 1;
     listNumber.push(number);
     var hienTBMang = ("Số nhập vào là: " + listNumber);
     document.getElementById("notifi_array").style.fontSize = "30px";
     document.getElementById("notifi_array").style.paddingLeft = "20px";
     document.getElementById("notifi_array").style.backgroundColor = "black";
     document.getElementById("notifi_array").style.color = "white";
     document.getElementById("notifi_array").innerHTML = hienTBMang;
 });