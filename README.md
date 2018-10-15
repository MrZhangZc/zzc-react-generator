# 基于windows 的 ZZC react webpack 项目 命令行生成器 V0.0.1

## 相关

``` bash
# 项目开发者
张智超(zzc-imau)

# 前提
进入npm全局安装目录新建 zzc-react.cmd

@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\zzc-react\bin\zzc-react" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\zzc-react\bin\zzc-react" %*
)

#使用
zzc-react init [projectName] 创建项目
zzc-react -v 查看版本
zzc-react -help 查看帮助
