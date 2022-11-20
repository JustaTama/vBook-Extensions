function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "https://sangtacviet.pro/?find=&minc=0&sort=update&tag=", script: "gen.js"},
        {title: "Truyện Đề Cử", input: "https://sangtacviet.pro/?find=&minc=0&sort=auto&tag=", script: "gen.js"},
        {title: "Truyện HOT", input: "https://sangtacviet.pro/?find=&minc=0&sort=bookmarked&tag=", script: "gen.js"},
        {title: "Đọc Nhiều", input: "https://sangtacviet.pro/?find=&minc=0&sort=view&tag=", script: "gen.js"},
        {title: "Top Tuần", input: "https://sangtacviet.pro/?find=&minc=0&sort=viewweek&tag=", script: "gen.js"},
        {title: "Top Ngày", input: "https://sangtacviet.pro/?find=&minc=0&sort=viewday&tag=", script: "gen.js"},
        {title: "Nhiều Follow", input: "https://sangtacviet.pro/?find=&minc=0&sort=following&tag=", script: "gen.js"},
        {title: "Nhiều Like", input: "https://sangtacviet.pro/?find=&minc=0&sort=like&tag=", script: "gen.js"},
        {title: "Huyền Huyễn", input: "https://sangtacviet.pro/?find=&minc=0&category=hh&step=5&tag=", script: "gen.js"},
        {title: "Đô Thị", input: "https://sangtacviet.pro/?find=&minc=0&category=dt&step=1&tag=", script: "gen.js"},
        {title: "Ngôn Tình", input: "https://sangtacviet.pro/?find=&minc=0&category=nt&step=5&tag=", script: "gen.js"},
        {title: "18+", input: "https://sangtacviet.pro/?find=&minc=0&tag=hen,", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://sangtacviet.pro/?find=&minc=0&step=3&tag=", script: "gen.js"},
    ]);
}