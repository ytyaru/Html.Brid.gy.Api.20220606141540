window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    // https://qiita.com/legokichi/items/801e88462eb5c84af97d
    document.getElementById(`request`).addEventListener('click', async(event)=>{
        const url = 'https://brid.gy/mastodon/start'
        const params = {feature: 'listen,publish', instance: 'https://mstdn.jp/', callback: location.href}
        //const body = JSON.stringify(params),
        const body = Object.keys(params).reduce((o,key)=>(o.set(key, params[key]), o), new FormData());
        const datas = {
            method: 'POST',
            headers: {'Accept': 'application/json'},
            body: body,
//            redirect: 'follow',
        }
        console.log(url)
        console.log(params)
        console.log(datas)
        const res = await fetch(url, datas)
        console.log(res)
        const html = await res.text()
        console.log(html)
        //window.location.href = url
    })
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

