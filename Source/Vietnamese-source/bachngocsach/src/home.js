function execute() {
    return Response.success([
        { title: "Book", input: "https://bachngocsach.com/reader/recent", script: "tab.js" },
        { title: "Truyện Đề Cử", input: "https://bachngocsach.com/reader/recent-promote", script: "tab.js" },
        { title: "Truyện Dịch", input: "https://bachngocsach.com/reader/recent-bns", script: "tab.js" },
        { title: "Truyện Convert", input: "https://bachngocsach.com/reader/recent-cv", script: "tab.js" },
        { title: "Đã Hoàn Thành", input: "https://bachngocsach.com/reader/recent-hoanthanh", script: "tab.js" }
    ]);
}
