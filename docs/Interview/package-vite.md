# Vite
20220217 铭科苑
## 简单聊聊webpack与vite的一些区别  
1. 工具本身定位不同webpack是底层的东西，vite则是更上层的工具。webpack是配置化，灵活度极高的工具，vite是开箱即用，使用更简单的工具
2. 原理不同webpack是bundle，自己实现了一套模块导入导出机制。vite是利用浏览器的esm能力，是bundless。
3. 优缺点vite开箱即用，更加简单，基于浏览器esm，使得hmr更加优秀 达到极速效果。webpack更加灵活，api以及插件生态更加丰富，高可定制，兼容更多浏览器，例如ie11。