/**
 * Bài Tập 4
 */
 document.getElementById("btn_minDuong").addEventListener("click", function () {
    /**
    * B1: Cho người dùng nhập số cần tìm => number
    * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
    * B3: Khởi tạo biến soMinDuong = listNumber[0]
    * B4: Kiểm tra vòng lặp
    * => Số nào có giá trị nhỏ hơn giá trị của biến soMinDuong thì ta gán giá trị của số đó cho biến soMinDuong
    * B6: In ra kết quả thông báo
    */
    var soMinDuong = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] < soMinDuong) {
            // Tìm số nguyên dương nhỏ nhất trong các số nguyên dương
            soMinDuong = listNumber[i];
        }
    }
    var hienTBMinDuong = ("Số dương nhỏ nhất là: " + soMinDuong);
    document.getElementById("notifi_question").style.fontSize = "30px";
    document.getElementById("notifi_question").style.paddingLeft = "20px";
    document.getElementById("notifi_question").style.backgroundColor = "orange";
    document.getElementById("notifi_question").style.color = "white";
    document.getElementById("notifi_question").innerHTML = hienTBMinDuong;
});