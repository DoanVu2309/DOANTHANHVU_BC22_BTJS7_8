/**
 * Bài Tập 7
 */
document.getElementById("btn_sort").addEventListener("click", function () {
  /**
   * B1: Cho người dùng nhập số cần tìm => number
   * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
   * B3: Khởi tạo biến sortNumber = 0
   * => Để sắp xếp thứ tự ở trong mảng
   * B4: Kiểm tra vòng lặp
   * => Sắp xếp theo thứ tự từ bé đến lớn
   * B5: In ra kết quả thông báo
   */
  for (var i = 0; i < listNumber.length; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if(listNumber[i] > listNumber[j]){
        var sort = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = sort;
      }
    }
  }
  var hienTBSapXep = "Sắp xếp theo thứ tự tăng dần: " + listNumber;
  document.getElementById("notifi_question").style.fontSize = "30px";
  document.getElementById("notifi_question").style.paddingLeft = "20px";
  document.getElementById("notifi_question").style.backgroundColor = "gold";
  document.getElementById("notifi_question").style.color = "white";
  document.getElementById("notifi_question").innerHTML = hienTBSapXep;
});
