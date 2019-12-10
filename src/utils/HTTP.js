import 'whatwg-fetch'


export default class HTTP {
    static async request(method, url, data={}){
        if (method === 'GET'){
            // 处理参数
            let dataArr = [];
            Object.entries(data).forEach(([key, value]) => {
                dataArr.push(`${key}=${value}`);
            })
            let dataStringify = dataArr.join('&');
            
            let response = await window.fetch(`${url}?${dataStringify}`);
            response = await response.json();

            return response;
            // return this.isSuccess(response);

        }else if(method === 'POST'){
            let response = await window.fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            return response;
        }
    }

    // 判断响应结果是否成功
    // static isSuccess(res){
    //     if(res.status >= 200 && res.status < 300){
    //         return res;
    //     }else{
    //         this.requestExpection(res);
    //     }
    // };

    // 构建失败对象
    static requestExpection(res){
        throw new Error(res);
    };

    // get便捷方法
    static get(url, data){
        return this.request('GET', url, data);
    };

    // post便捷方法
    static post(url, data){
        return this.request('POST', url, data);
    }
}