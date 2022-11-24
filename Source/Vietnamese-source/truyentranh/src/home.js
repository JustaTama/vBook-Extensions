function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://truyentranh.net/comic", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyentranh.net/comic-latest", script: "gen.js"},
    ]);
}