function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters =  doc.select(".table-content .chapter a")
    //return Response.success(chapters)
    var listChapter =  []

    for(var i=chapters.size()-1;i>=0; i--){
        listChapter.push({
            name: chapters.get(i).text(),
            url: chapters.get(i).attr("href"),
            host: "https://dichtruyentranh.com"
        })
    }

    return Response.success(listChapter)
}
///https://dichtruyentranh.com/truyen/18099-cong-chua-be-bong/c638429-chap-82/?t=1640002443
///https://dichtruyentranh.com/truyen/18099-cong-chua-be-bong/c638429-chap-82/?t=1639999850
