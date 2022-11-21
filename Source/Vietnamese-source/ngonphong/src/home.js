function execute() {
    return Response.success([
        {title: "Truyện HOT", input: "https://www.ngonphong.com/truyen-hot-nhat/", script: "gen.js"},
        {title: "Xem nhiều", input: "https://www.ngonphong.com/nhieu-xem-nhat/", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://www.ngonphong.com/tron-bo/", script: "gen.js"}
    ]);
}