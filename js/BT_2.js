/**
 * Bài Tập 2
 */
 document.getElementById("btn_check").addEventListener("click", function () {
    /**
     * B1: Cho người dùng nhập số cần tìm => number
     * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
     * B3: Khởi tạo biến demSoDuong = 0
     * B4: Kiểm tra vòng lặp 
     * => số dương sẽ đếm vào (số dương > 0)
     * => số âm sẽ không đếm (số âm < 0)
     * B5: In ra kết quả thông báo
     */
    var demSoDuong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            demSoDuong++;
        }
    }
    var hienTBDem = ("Số lượng số dương là: " + demSoDuong);
    document.getElementById("notifi_question").style.fontSize = "30px";
    document.getElementById("notifi_question").style.paddingLeft = "20px";
    document.getElementById("notifi_question").style.backgroundColor = "green";
    document.getElementById("notifi_question").style.color = "white";
    document.getElementById("notifi_question").innerHTML = hienTBDem;
});