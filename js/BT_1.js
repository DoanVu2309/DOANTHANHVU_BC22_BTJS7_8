/**
 * Bài Tập 1
 */
document.getElementById("btn_total").addEventListener("click", function () {
  /**
   * B1: Cho người dùng nhập số cần tính => number
   * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
   * B3: Khởi tạo biến tongSoDuong = 0
   * B4: Kiểm tra vòng lặp
   * => số dương sẽ cộng vào (số dương > 0)
   * => số âm sẽ không cộng (số âm < 0)
   * B5: In ra kết quả thông báo
   */
  var tongSoDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tongSoDuong += listNumber[i];
    }
  }
  var hienTBTong = "Tổng số dương là: " + tongSoDuong;
  document.getElementById("notifi_question").style.fontSize = "30px";
  document.getElementById("notifi_question").style.paddingLeft = "20px";
  document.getElementById("notifi_question").style.backgroundColor = "red";
  document.getElementById("notifi_question").style.color = "white";
  document.getElementById("notifi_question").innerHTML = hienTBTong;
});
