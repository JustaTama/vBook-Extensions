function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "truyen-moi", script: "gen.js"},
        {title: "Truyện HOT", input: "truyen-hot", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "truyen-full", script: "gen.js"}
    ]);
}