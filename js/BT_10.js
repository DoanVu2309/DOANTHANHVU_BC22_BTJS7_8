/**
 * Bài Tập 10
 */
 document
 .getElementById("btn_soSanh")
 .addEventListener("click", function () {
     /**
     * B1: Tìm số âm và số dương ở trong mảng
     * => Khởi tạo giá trị số dương => var demSoDuong = 0
     * => Khởi tạo giá trị số âm => var demSoAm = 0
     * B2: Đếm số lượng số âm và số dương ở trong mảng
     * => Nếu là số dương sẽ được đếm trong biến số dương => demSoDuong++
     * => Nếu là số âm sẽ được đếm trong biến số âm => demSoAm++
     * B3: Khởi tạo giá trị so sánh để gán giá trị
     * B4: So sánh số lượng số âm và số dương xem số nào nhiều hơn
     * => Nếu là số dương nhiều hơn số âm => Thông báo số dương nhiều hơn
     * => Nếu là số âm nhiều hơn số dương => Thông báo số âm nhiều hơn
     * B5: In ra thông báo
     */
     var demSoAm = 0;
     var demSoDuong = 0;
     var soSanhNum = 0;
     for (var i = 0; i < listNumber.length; i++) {
         if (listNumber[i] > 0) {
             demSoDuong++;
         }
         else {
             demSoAm++;
         }
     }
     
     if (demSoDuong > demSoAm) {
         soSanhNum = "Số dương nhiều hơn số âm";
     }
     else {
         soSanhNum = "Số âm nhiều hơn số dương";
     }
     var hienTBSoSanh = "Số lượng số dương là: " + demSoDuong + " - ";
     hienTBSoSanh += "Số lượng số âm là: " + demSoAm + " - ";
     hienTBSoSanh += soSanhNum;
     document.getElementById("notifi_question").style.fontSize = "30px";
     document.getElementById("notifi_question").style.paddingLeft = "20px";
     document.getElementById("notifi_question").style.backgroundColor = "salmon";
     document.getElementById("notifi_question").style.color = "white";
     document.getElementById("notifi_question").innerHTML = hienTBSoSanh;
 });