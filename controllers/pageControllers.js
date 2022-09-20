function getPage(req, res){
        res.render(req.url.substr(1, 20));

 }
 module.exports = { getPage };