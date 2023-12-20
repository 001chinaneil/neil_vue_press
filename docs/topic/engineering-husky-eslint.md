# husky自动代码格式化和自动代码检查

## 安装过程
1. Git + Husky + Lint-staged + Prettier + Eslint
2. 基本思路：
    a. 利用Husky进行git操作的监听钩子  
    b. 利用Prettier进行代码格式化  
    c. 利用Eslint对不规范代码进行修复  
    d. Eslint修复不了的，给出git提示  
3. 相关配置文件
    a. .prettierrc 官链：https://prettier.io/docs/en/options.html  
    b. .eslintrc 配置ruls规则 中文官链：https://zh-hans.eslint.org/

4. 工作模式
```js
当我们进行一次git提交时 => 
触发husky配置的pre-commit钩子 => 
执行npm run lint-staged命令 => 
触发lint-staged对暂存区的文件进行格式化（使用package.json中配置的lint-staged任务） => 
使用eslint 进行格式化
```

4. 结论：
    a. Prettier只是对代码进行格式化的，不对代码质量进行检测，支持各种语言  
    b. Eslint既可以对代码进行格式化，也可以对代码质量进行检测，但是仅支持Javascript  

    c. .editorconfig针对代码格式进行规范 官链：https://editorconfig.org/  

    d. React@17之后，因为React有了react/jsx-runtime，会自动解析jsx，所以不需要再手动引入React了；在.eslintrc文件里面的extends里面加上"plugin:react/  jsx-runtime"，就不会引起Eslint的报错了。
    

疑问：
1. VsCode的setting和代码文件里面的Prettier\Eslint的优先级
    结论：规则先合并，遇到冲突按如下优先级进行执行，.prettier > .editorconfig > vscode setting
2. 有哪些成熟的eslint配置方案呢？

参链：
    https://juejin.cn/post/7156893291726782500 
    https://juejin.cn/post/7085534305249656862 husky 高版本之后

## 心得体会
1. 不同版本的lint-staged需要不同版本的Node，高版本的依赖需要高版本的Node主持，高版本的Node需要高版本的硬件支持。