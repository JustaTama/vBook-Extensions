function execute() {
    return Response.success([
        {title: "Truyện Mới Cập Nhật", input: "https://isach.info/most_reading.php?sort=last_update_date", script: "top.js"},
        {title: "Truyện Được Đọc Nhiều", input: "https://isach.info/most_reading.php?sort=page_view", script: "top.js"},
    ]);
}