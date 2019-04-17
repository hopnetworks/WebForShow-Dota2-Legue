## 前端技术栈

Vue  (通过API连接后端)
#### 演示地址：

 [展示演示地址](https://hopnetworks.github.io/WebForShow-Dota2-Legue/dist/)
  [管理页演示地址]( https://hopnetworks.github.io/WebForShow-Dota2-Legue/dist/#/insertMatch)

## 项目运行

```
1、nodejs下调试运行环境
2、mongodb/redis/mysql( 开启状态)

```
### 主要展示页面

- 统计页：统计玩家在联赛中积分，记录，与主要比赛数据；
- 分析页：玩家，队伍每场比赛的详细数据
- 图表页：数据图表化显示
- 赛程页：玩家行程安排，各队伍赛程，积分

### 主要管理页面
- 管理员页面：区别于网站页面，负责赛程安排
- 添加比赛：裁判员获得比赛ID输入，使用API，后端将比赛存储在数据库中
- 安排赛程：安排队伍名称，安排比赛赛程
### NOSQL数据：
- 经API获取后台处理形成数据存储

|名称 |键|值|
|:-----|:-------:|:-----|
|比赛数据      |matchdata      |比赛队伍,选手表现数据，建筑物数据，一血时间等 
|选手数据     |playerdata       |积分，平均比赛KDA，比赛总金额经验等 
|队伍数据     |teamdata      |5名选手ID+N替补ID 
