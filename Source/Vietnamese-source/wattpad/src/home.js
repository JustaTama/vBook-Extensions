function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", script: "gen.js", input: "https://www.wattpad.com/api/v3/stories?filter=new"}
    ]);
}
