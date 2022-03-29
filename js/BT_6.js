/**
 * Bài Tập 6
 */
document.getElementById("btn_swap").addEventListener("click", function () {
  var number1 = document.getElementById("txtViTri1").value;
  number1 = parseInt(number1);
  var number2 = document.getElementById("txtViTri2").value;
  number2 = parseInt(number2);
  /**
   * B1: Tạo biến doiGT = 0 => Tạo biến rỗng để đổi giá trị
   * B2: Đổi giá trị với nhau sao cho 2 vị trí cần đổi phải khác vị trí của chúng lúc ban đầu
   * B3: In và xuất kết quả
   */
  var doiGT = listNumber[number1];
  listNumber[number1] = listNumber[number2];
  listNumber[number2] = doiGT;
  var hienTBDoiSo = "Mảng đã đổi: " + listNumber;
  document.getElementById("notifi_question").style.fontSize = "30px";
  document.getElementById("notifi_question").style.paddingLeft = "20px";
  document.getElementById("notifi_question").style.backgroundColor = "sienna";
  document.getElementById("notifi_question").style.color = "white";
  document.getElementById("notifi_question").innerHTML = hienTBDoiSo;
});
