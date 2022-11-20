function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "null", script: "gen.js"},
        {title: "Truyện Dịch", input: "1", script: "gen.js"},
        {title: "Truyện Convert", input: "2", script: "gen.js"},
        {title: "Raw En", input: "3", script: "gen.js"}
    ]);
}