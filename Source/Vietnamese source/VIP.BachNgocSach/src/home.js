function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "story-newest", script: "gen.js"},
        {title: "Truyện Dịch", input: "1", script: "source.js"},
    ]);
}