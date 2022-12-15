## 房屋租赁系统

## 技术选型

| 技术                   | 说明             | 官网                                                    |
| ---------------------- | ---------------- | ------------------------------------------------------- |
| React Hook             | 前端框架         | <https://react.docschina.org/docs/hooks-intro.html>       |
| React Router           | 路由框架         | <https://reactrouter.com/>                                |
| Redux                  | 全局状态管理框架 | <https://redux.js.org/>                                   |
| TypeScript             | JavaScript超集   | <https://www.typescriptlang.org/>                         |
| Ant Design             | 前端UI框架       | <https://ant.design/index-cn>                             |
| Nprogress              | 进度条控件       | <https://www.npmjs.com/package/nprogress>                 |
| Swiper                 | 轮播滑动插件     | <https://swiperjs.com/>                                   |
| Axios                  | 前端HTTP框架     | <https://www.axios.com/>                                  |
| React-Sticky           | 吸顶效果组件     | <https://www.npmjs.com/package/react-sticky>              |
| React-Custom-Scrollbar | 自定义滚动条     | <https://github.com/malte-wessel/react-custom-scrollbars> |

### 快速开始

启动前端项目

1. 执行 yarn install
2. 执行 yarn start

项目启动后默认打开: [localhost:3000](localhost:3000) 端口。 后端接口默认连接的是我个人服务器(可能有点慢)，如果使用了上面的Docker部署了开发环境，可在config-override.js中修改IP的地址为本地。

默认接口文档地址:  [http://rent-house.touchfish.top](http://rent-house.touchfish.top)

#### 项目二次开发

相关数据表及索引如下

数据库表:  rent-house/src/main/resources/db/rent-house.sql  

elasticsearch索引:  rent-house/src/main/resources/db/house_index__ik_mapping_suggestion.json   (elastic需要安装ik分词器)

redis: 需要安装并配置application-dev.yml中 redis相关信息即可

kafka: 需要安装并配置application-dev.yml中 kafka相关信息

zookeeper: kafka注册中心

kibana:  方便管理与查看elasticsearch（可以不安装）
