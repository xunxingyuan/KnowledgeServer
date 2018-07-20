const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'Gmail', // 注意，host修改为service
    port: 465, // 端口
    sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
    auth: {
        user: 'thundertroupe@gmail.com', // 邮箱和密码
        pass: 'SWAHAswaha415'
    }
});

const sendMail = function (address,id,name) {
    let content 
    if(id === 1){
        content =  '<p>尊敬的'+ name + ': 您已经成功报名了8月10日19:30，Fort Mason Center for Arts & Culture进行的剧场表演，请准时参加~</p>'+'<p>Thank you. You are succesfully registered for the performance on 19:30 10th August in Fort Mason Center for Arts & Culture. We look forward to seeing you there</p>' 
    }else if(id === 2){
        content = '<p>尊敬的'+ name + ': 您已经成功报名了8月14日19:30，Cubberley Community Center进行的剧场表演，请准时参加~</p>'+'<p>Thank you. You are succesfully registered for the performance on 19:30 14th August in Cubberley Community Center. We look forward to seeing you there</p>'  
    }else if(id === 3){
        content = '<p>尊敬的'+ name + ': 您已经成功报名了8月18日19:30，Jewish Community Center of the East Bay进行的剧场表演，请准时参加~</p>' +'<p>Thank you. You are succesfully registered for the performance on 19:30 18th August in Jewish Community Center of the East Bay. We look forward to seeing you there</p>'
    }

    let mailOptions = {
        from: '"thundertroupe" <thundertroupe@gmail.com>', // sender address
        to: address, // list of receivers
        subject: '雷音剧场表演通知', // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: content // html body
    };
    return transporter.sendMail(mailOptions)

    // return new Promise((resolve, reject) => {
    //     // send mail with defined transport object
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             reject(error)
    //         } else {
    //             resolve(true)
    //         }
    //         // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    //     });
    // })

}

module.exports = sendMail




