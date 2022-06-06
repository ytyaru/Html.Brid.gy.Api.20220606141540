window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    document.getElementById(`#request`).addEventListener('click', async(event)=>{
        const url = 'https://brid.gy/mastodon/start'
        const params = {feature: 'listen,publish', instance: 'mstdn.jp', callback: location.href}
        const datas = {
            method: 'POST',
            headers = {
                'Accept': 'text/html',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: JSON.stringify(params),
        }
        cosole.log(url)
        cosole.log(datas)
        const res = await fetch(url, datas)
        console.log(res)
        const html = await res.text()
        console.log(html)
    })
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

