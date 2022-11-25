function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://ztruyen.vn/danh-sach/truyen-moi", script: "gen2.js"},
        {title: "Truyện HOT", input: "https://ztruyen.vn/danh-sach/truyen-hot", script: "gen2.js"},
        {title: "Truyện Yêu thích", input: "https://ztruyen.vn/danh-sach/truyen-yeu-thich", script: "gen2.js"},
        {title: "Đã Hoàn Thành", input: "https://ztruyen.vn/danh-sach/truyen-full", script: "gen2.js"}
    ]);
}