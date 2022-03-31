/**
 * Bài Tập 5
 */
 document.getElementById("btn_lastChan").addEventListener("click", function () {
    /**
     * B1: Cho người dùng nhập số cần tìm => number
     * B2: Thêm số vào danh sách để tạo thành 1 mảng => listNumber
     * B3: Khởi tạo biến soChan = 0 
     * => Để tìm các số chẳn ở trong mảng
     * B4: Kiểm tra vòng lặp 1
     * => Nếu là số chẳn thì sẽ gán giá trị vào biến soChan
     * => Còn không là số chẳn sẽ không gán
     * B5: Khởi tạo biến demChan
     * => Để xác định vị trí của soChan cuối cùng trong mảng (vị trí bắt đầu là từ 0)
     * => Nếu trong mảng không có soChan nào thì sẽ trả về -1
     * B6: In ra kết quả thông báo
     */
    var soChan = -1;
    
    for (var i = 1; i < listNumber.length; i++) {
        if (listNumber[i] % 2 === 0) {
            soChan = listNumber[i];
            break;
        }
    }
    var hienTBSoChan = "Số chẵn ở vị trí cuối cùng là: " + soChan;
    document.getElementById("notifi_question").style.fontSize = "30px";
    document.getElementById("notifi_question").style.paddingLeft = "20px";
    document.getElementById("notifi_question").style.backgroundColor = "aqua";
    document.getElementById("notifi_question").style.color = "white";
    document.getElementById("notifi_question").innerHTML = hienTBSoChan;
});