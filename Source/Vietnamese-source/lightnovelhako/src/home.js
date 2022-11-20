function execute() {
    return Response.success([
        {
            title: "Mới Cập Nhật",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=capnhat"
        },
        {
            title: "Truyện Mới",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=truyenmoi"
        },
        {
            title: "Theo Dõi Nhiều",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=theodoi"
        },
        {
            title: "Top Toàn Thời Gian",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=top"
        },
        {
            title: "Top Tháng",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=topthang"
        },
        {
            title: "Đã Hoàn Thành",
            script: "gen.js",
            input: "https://docln.net/danh-sach?truyendich=1&sangtac=1&convert=1&hoanthanh=1&sapxep=capnhat"
        },
    ]);
}
