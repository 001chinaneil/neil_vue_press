# React-Apollo

* 为什么要用？
* 亮点或优势是什么？
* 收益是什么？

[官链](https://apollographqlcn.github.io/react-docs-cn/)
## 第一部分：
1. Apollo是React、GraphQL的集成框架
2. GraphQL：
    2.1 模式是包含字段的对象类型的集合。  
    2.2  
    ```gql
    // 字段之间不用逗号分割
    "注释的格式xxxx"
    type SpaceCat {  
        name: String! // 代表字符串类型，不能为空
        age: Int  
        missions: [Mission] // 表示包含一个列表
    }
    ```
    2.3 Query类型是可以让GraphQL服务器可以识别的，可以知道检索的是什么，是顶级字段。  
    ```gql
    // 服务器gql写法 可以嵌套复用
    const typeDefs = gql`
    # write your schema definitions here
    type Query {
        spaceCats: [SpaceCat]
    }

    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions: [Mission]
    }

    type Mission {
        id: ID!
        name: String!
        description: String!
    }
    `
    ````
    2.4 graphql提供解析GraphQL查询的核心逻辑；@apollo/client包含构建客户端所需的一切，比如内存缓存、本地状态管理、错误处理。  
    2.5 通过包裹根组件，让所有组件都可以使用apollo/client  

    ```js
    ReactDOM.render(  
        <ApolloProvider client={client}>    
            <GlobalStyles />    
            <Pages />  
        </ApolloProvider>,  
        document.getElementById('root'),
    );
    ```

    2.6 客户端FE的gql写法：  
    ```js
    /** TRACKS query to retrieve all tracks */
    export const TRACKS = gql`
    query getTracks {
        tracksForHome {
        id
        title
        thumbnail
        length
        modulesCount
        author {
            name
            photo
        }
        }
    }
    `;
    ```

    2.7 在客户端是用@apollo/client中提供的useQuery执行查询  
    ```js
    // 在React的UI组件里面进行使用
    const { loading, error, data } = useQuery(TRACKS);
    ```

## 第二部分：
1. 解析器检索的数据可以来自各个地方：数据库、第三方API、webhook，它们之间可以任意混合。
2. 典型的N+1问题，相同的一个接口，调用N次来获取结果格式相同而内容不同的数据
3. 解析器的作用是为字段填充数据，它是一个函数，将数据转换成客户端需要的样子。
4. 解析器有4个参数：
```js
parent: 该字段父级解析器的返回值
args：对象，是所有GraphQL参数
context：所有解析器共享的对象
info：包含有关操作执行状态的信息
```
5. Apollo Server是模式Schema、解析器、数据源完美协调的地方

## 第三部分：
1. The `Query` type contains the entry points to our schema. In future courses, we'll take a look at 2 other possible entry points: `Mutation` and `Subscription`.
