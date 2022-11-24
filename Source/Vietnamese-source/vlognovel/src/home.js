function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://vlognovel.com/the-loai/moi-cap-nhap", script: "gen.js"},
        {title: "Truyện HOT", input: "https://vlognovel.com/the-loai/dang-hot", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://vlognovel.com/the-loai/moi-cap-nhap?translator=&status=1&sort=", script: "gen.js"}
    ]);   
}