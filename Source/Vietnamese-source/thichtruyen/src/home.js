function execute() {
    return Response.success([
        {title: "Ngôn Tình", input: "https://thichtruyen.vn/danh-muc/truyen-ngon-tinh?tab=truyen-moi", script: "gen.js"},
        {title: "Truyện VOZ", input: "https://thichtruyen.vn/danh-muc/truyen-voz?tab=truyen-moi", script: "gen.js"},
        {title: "Xuyên Không", input: "https://thichtruyen.vn/danh-muc/xuyen-khong?tab=truyen-moi", script: "gen.js"},
        {title: "Kiếm Hiệp", input: "https://thichtruyen.vn/danh-muc/truyen-kiem-hiep?tab=truyen-moi", script: "gen.js"}
    ]);
}