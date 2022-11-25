function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://mangabit.top", script: "gen1.js"},
        {title: "Top All", input: "https://mangabit.top/xep-hang/top-all", script: "gen.js"},
        {title: "Top Tháng", input: "https://mangabit.top/xep-hang/top-tuan", script: "gen.js"},
        {title: "Top Ngày", input: "https://mangabit.top/xep-hang/top-ngay", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://mangabit.top/truyen-full", script: "gen.js"},

    ]);
}