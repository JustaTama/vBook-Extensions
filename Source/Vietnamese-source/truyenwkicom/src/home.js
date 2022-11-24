function execute() {
    return Response.success([
        {title: "Home", input: "https://truyenwki.com/tim-kiem/?title=&status=all&time=update", script: "gen.js"},
        {title: "Trọng Sinh, Xuyên Không", input: "https://truyenwki.com/tim-kiem/?title=&cate%5B%5D=trongsinh&cate%5B%5D=xuyenkhong&status=all&time=update", script: "gen.js"},
        {title: "Đã Hoàn Thành", input: "https://truyenwki.com/tim-kiem/?title=&status=hoan_thanh&time=update", script: "gen.js"}
    ]);
}