const Service = require('egg').Service;


module.exports = class MyService extends Service {
    async getAppList() {
        const { ctx } = this;
        const result = await ctx.curl('https://data2.workec.com/app/list', {
            method: 'GET',
            headers: {
                'Cookie': ctx.header.cookie
            },
            dataType: 'text'
        });
        if (result.status == 302) {
            ctx.redirect(result.headers.location);
        } else if (result.status == 200) {
            let data = result.data;
            try {
                data = JSON.parse(data);
            } catch (e) {
                return null;
            }
            if (!data.code || data.code != 200) {
                return null;
            }
            return data.data;
        } else {
            return null;
        }
    }
}