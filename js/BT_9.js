/**
 * Bài Tập 9
 */
 var listNumberBT9 = [];
 document.getElementById("btn_Add").addEventListener("click", function () {
     /**
      * B1: Cho người dùng nhập số cần tìm => numberBT9
      * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumberBT9 để tạo thành 1 mảng thêm vào
      * B3: Vì là mảng số thực nên để định dạng số nhập vào là Float
      */
     var numberBT9 = document.getElementById("txt_addNum").value * 1;
     listNumberBT9.push(numberBT9);
     var hienThemVao = ("Số nhập thêm là: " + listNumberBT9);
     document.getElementById("notifi_array").style.display= "inline";
     document.getElementById("notifi_array_BT9").style.display= "inline";
     document.getElementById("notifi_array_BT9").style.fontSize = "30px";
     document.getElementById("notifi_array_BT9").style.paddingLeft = "20px";
     document.getElementById("notifi_array_BT9").style.marginLeft = "20px";
     document.getElementById("notifi_array_BT9").style.backgroundColor = "black";
     document.getElementById("notifi_array_BT9").style.color = "white";
     document.getElementById("notifi_array_BT9").innerHTML = hienThemVao;
 });
 document.getElementById("btn_Search").addEventListener("click", function () {
     /**
      * B1: Khỏi tạo danh sách mới để nối 2 mảng lại với nhau => listSo
      * B2: Thêm mảng số thực vào mảng ban đầu => bằng .concat
      * B3: Khởi tạo biến demSoNguyen = 0 
      * => Để tìm các số nguyên ở trong mảng listSo
      * B4: Kiểm tra vòng lặp 1
      * => Nếu là số nguyên thì sẽ được đếm
      * => Còn không là số nguyên thì sẽ bỏ qua không đếm
      * B5: Tìm được số nguyên sẽ thông báo số lượng
      * B6: In ra kết quả thông báo
      */
     var listSo = listNumber.concat(listNumberBT9);
     var demSoNguyen = 0;
     for (var i = 0; i < listSo.length; i++) {
         if (listSo[i] == parseInt(listSo[i])) {
             demSoNguyen++;
         }
     }
     var hienTBTimSN = ("Số lượng số nguyên là: " + demSoNguyen);
     document.getElementById("notifi_question").style.fontSize = "30px";
     document.getElementById("notifi_question").style.paddingLeft = "20px";
     document.getElementById("notifi_question").style.backgroundColor = "teal";
     document.getElementById("notifi_question").style.color = "white";
     document.getElementById("notifi_question").innerHTML = hienTBTimSN;
 });