const conf = require('../../conf/conf')
const qiniu = require('qiniu')
const mac = new qiniu.auth.digest.Mac(conf.qiniu.accessKey, conf.qiniu.secretKey)

//自定义凭证有效期（示例2小时，expires单位为秒，为上传凭证的有效时间）
let options = {
    scope: 'putaowebs',
    expires: 120
};
let putPolicy = new qiniu.rs.PutPolicy(options);
let uploadToken = putPolicy.uploadToken(mac);

