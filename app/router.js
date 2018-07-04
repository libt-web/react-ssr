
module.exports = app => {
  app.redirect('/', '/my/applist', 302);
  app.get('/my/applist(/.+)?',app.controller.my.applist);
};
