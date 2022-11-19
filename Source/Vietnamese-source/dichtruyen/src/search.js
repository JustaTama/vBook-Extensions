function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://dichtruyentranh.com/tim-kiem/page-" + page + "/?keyword=" + key).html()
	var books =  doc.select(".mcol_ct > .mcol_pos")
	var listBook = []

	books.forEach(book => listBook.push({
		name: book.select(".tss_e a").attr("title"),
		link: book.select(".tss_e a").attr("href"),
		cover: book.select(".img_load .img_link").attr("data-bg"),
		description: book.select(".ct_info span").text(),
		host: "https://dichtruyentranh.com"
	}))

	if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();

	return Response.success(listBook,next)
    
}
//https://dichtruyentranh.com/truyen/17460-dau-phai-tai-tui-muon-gia-gai