function execute(){
    return Response.success([
        { title: "Mới Cập Nhật", input: "latest", script: "genhome.js" }, 
        { title: "Truyện A-Z", input: "a-z", script: "genhome.js" }, 
        { title: "Truyện HOT", input: "hot", script: "genhome.js" },
        { title: "Xem Nhiều", input: "mostview", script: "genhome.js" }, 
        { title: "Đã Hoàn Thành", input: "full", script: "genhome.js" }
    ]);
}