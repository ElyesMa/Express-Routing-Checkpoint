const AuthAccess = (req, res, next) => {
    var Today=new Date()
    if (Today.getDay()==0 ||Today.getDay()==6 ||Today.getHours()<9 ||Today.getHours()>17) {
      return res.send("<script> alert('App is only available during working hours (Monday to Friday,  from 9 to 17) , go to rest.😀') ; window.location.href = '/HomePage'; </script>");
    }
    next();

  };

  module.exports = { AuthAccess };