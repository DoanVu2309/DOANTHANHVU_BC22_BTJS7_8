/**
 * Bài Tập 8
 */
function kiemTraSNT(number) {
  /**
   * Số nguyên tố sẽ không được nhỏ hơn 2
   * => Vì nhỏ hơn 2 thì sẽ không phải số nguyên tố
   * Số nguyên tố sẽ không chia hết cho 2
   * => Vì số nguyên tố sẽ không phải là tích của số khác
   */
  var kiemTra = true;
  if (number < 2) {
    kiemTra = false;
  } else if (number == 2) {
    kiemTra = true;
  } else if (number % 2 == 0) {
    kiemTra = false;
  } else {
    /**
     * Xem n có thuộc bội số của 2 và căn bậc n => Giá trị trả về chia cho chính,
     * vì bằng 0 nên đây không phải số nguyên tố
     */
    for (var i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i == 0) {
        kiemTra = false;
        break;
      }
    }
  }
  return kiemTra;
}
document.getElementById("btn_firstNT").addEventListener("click", function () {
  /**
   * B1: Cho người dùng nhập số cần tìm => number
   * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
   * B3: Khởi tạo biến soNT = 0
   * => Để tìm các số nguyên tố ở trong mảng
   * B4: Kiểm tra vòng lặp 1
   * => Nếu là số nguyên tố thì sẽ gán giá trị vào biến soNT
   * => Còn không là số nguyên tố sẽ không gán
   * B5: Khởi tạo biến demChan
   * => Để xác định vị trí của soNT đầu tiên trong mảng (vị trí bắt đầu là từ 0)
   * => Nếu trong mảng không có soNT nào thì sẽ trả về -1
   * B6: In ra kết quả thông báo
   */
  var soNT = -1;
  for (var i = 1; i < listNumber.length; i++) {
    if (kiemTraSNT(listNumber[i])) {
      soNT = listNumber[i];
    }
  }
  var hienTBSNT = "Số nguyên tố ở vị trí đầu tiên là: " + soNT;
  document.getElementById("notifi_question").style.fontSize = "30px";
  document.getElementById("notifi_question").style.paddingLeft = "20px";
  document.getElementById("notifi_question").style.backgroundColor = "navy";
  document.getElementById("notifi_question").style.color = "white";
  document.getElementById("notifi_question").innerHTML = hienTBSNT;
});
