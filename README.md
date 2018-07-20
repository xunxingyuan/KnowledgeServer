# KnowledgeServer
KnowledgeServer

### 介绍
传播知识，让知识变现

### todo list
- [ ] 用户模块
    - [x] 用户登录
    - [x] 用户注册
    - [x] 用户信息查询
    - [ ] 用户信息修改
- [ ] 经验知识模块
    - [x] 新建经验知识
    - [ ] 修改经验知识
    - [ ] 经验知识状态管理
    - [ ] 经验知识分组
    - [ ] 知识积分购买
- [ ] 公共模块
    - [ ] 全部知识检索
    - [ ] 分类检索
    - [ ] 关注检索
    - [ ] 猜你喜欢
- [ ] 积分系统
    - [ ] 积分获取
    - [ ] 积分兑现
- [ ] 关注系统
    - [ ] 关注用户
    - [ ] 关注分组
      
    
### 配置文件 conf/conf.js

```
module.exports={
  mongodb:{
    path: 'mongodb',
    auth:{
      user: 'username',
      password: 'password'
    }
  }
}
```
