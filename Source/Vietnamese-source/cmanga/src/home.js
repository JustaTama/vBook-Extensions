function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "new", script: "gen.js" },
        { title: "VIP Truyện Siêu Hay", input: "Truyện siêu hay", script: "source.js" },
        { title: "Chuyển Sinh", input: "Chuyển Sinh", script: "source.js" },
        { title: "Xuyên Không", input: "Xuyên Không", script: "source.js" },
    ]);
}