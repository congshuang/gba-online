//判断是否是手机号码

const isTel = (tel) => {
    debugger
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
  }
  const isCode = (code) => {

    if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)){
      return false;
    }
    return true;
  }



  export default {
    isTel,isCode
  }

