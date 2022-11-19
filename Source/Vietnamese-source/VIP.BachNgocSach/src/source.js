function execute(url, page) {
    const BNSmain = 'https://api.bachngocsach.com/api/story-by-source/'
    if (!page) page = '1';
    const json = Http.get(BNSmain+url).params({'per_page': 12,'page': page}).string()
    if (json){
        var data = JSON.parse(json);
        if (data['next_page_url']){
            var next = data['next_page_url'].split('=')[1];
        }else{var next = null;}
        var listStory = data.data;
        const list = [];
        for (var i = 0; i < listStory.length; i++) {
            var chap = listStory[i]
            list.push({
                name: chap['name'],
                link: chap['slug']+'/'+chap['id']+'.html',
                cover: chap['cover'],
                description: 'Chương '+chap['chapters_count'],
                host: "https://vip.bachngocsach.com/truyen/"
            })
        }
        return Response.success(list,next)
    }
    return null;
}
