module.exports = app => {
    return class HomeController extends app.Controller {
        async applist() {
            const { ctx } = this;
            const applist = await ctx.service.my.getAppList();
            if (applist) {
                await ctx.render('applist.js', { store: { app: { ...applist } } });
            }
        }
    };
};