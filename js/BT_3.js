/**
 * Bài Tập 3
 */
 document.getElementById("btn_min").addEventListener("click", function () {
    /**
     * B1: Cho người dùng nhập số cần tìm => number
     * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
     * B3: Khởi tạo biến soMin = listNumber[0]
     * B4: Kiểm tra vòng lặp 
     * => Số nào có giá trị nhỏ hơn giá trị của biến soMin thì ta gán giá trị của số đó cho biến soMin
     * B5: In ra kết quả thông báo
     */
    var soMin = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (soMin > listNumber[i]) {
            // Nhỏ hơn thì gán, không nhỏ thì không gán
            soMin = listNumber[i];
        }
    }
    var hienTBMin = ("Số nhỏ nhất là: " + soMin);
    document.getElementById("notifi_question").style.fontSize = "30px";
    document.getElementById("notifi_question").style.paddingLeft = "20px";
    document.getElementById("notifi_question").style.backgroundColor = "blue";
    document.getElementById("notifi_question").style.color = "white";
    document.getElementById("notifi_question").innerHTML = hienTBMin;
});