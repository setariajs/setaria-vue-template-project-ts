# setaria-vue-component-library-ts - 乞丐版


## 本地启动

```cmd

yarn 

yarn dev

```


## 打包 

```cmd

yarn build

yarn build:dts

```

## 发布

```cmd

yarn build-verion

npm publish


```

## 项目名变更

1. 全局搜索 `setaria-vue-component-library-ts` 并做全局替换即可


## 新建组件

1. 在`packages`下新建对应的组件文件夹

2. 在`packages/index.ts`下增加组件引入

3. 在`docs/components/`下增加组件的文档说明

4. 在`docs/.vitepress/config/sidebar.ts`文件中增加文档的路径信息。

5. 启动浏览器，即可实时调试
