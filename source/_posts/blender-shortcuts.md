---
title: Blender Shortcut Manual
tags: [Blender,3D Art]
categories:
  - Study
date: 2020-02-01 16:15:54
cover: https://download.blender.org/branding/blender_logo_socket.png
---

-----
# BLENDER 2.8 常用快捷键总结

## Modeling
**界面/视图/图层操作**:
---
* <font color=" #dd0000 ">`T`</font>: 工具列表
* <font color=" #dd0000 ">`N`</font>: 右侧明细


|top     | back     | front | back     | right  | left      |
| :----: | :------: | :----:| :------: | :----: | :-------: |
| 7      | ctrl + 7 | 1     | ctrl + 1 | 3      | ctrl + 3  |

* <font color=" #dd0000 ">`5`</font>: 切换正交/透视
* <font color=" #dd0000 ">`[2,4,6,8]`</font>: 旋转视图
* <font color=" #dd0000 ">`Shift + 7`</font>: 切换至以当前选中激活面的法线方向为视线方向的视图
* <font color=" #dd0000 ">`M`</font>: 移动对象到指定collection
* <font color=" #dd0000 ">`[1,2,3,...]`</font> ( object mode) : 查看指定scene collection内容
  * <font color=" #dd0000 ">`Shift + [1,2,3,...]`</font>: 同时查看指定collection内容
  * <font color=" #dd0000 ">`H`</font>: 隐藏选定对象
  * <font color=" #dd0000 ">`Shift + H`</font>: 仅显示选定对象
  * <font color=" #dd0000 ">`Alt + H`</font>: 取消隐藏
  * 鼠标停留在场景集合窗口内，按<font color=" #dd0000 ">`Alt + H`</font>: 显示所有scence collection内容
  * <font color=" #dd0000 ">`Ctrl + H`</font>: 控制需要显示的层级
  * <font color=" #dd0000 ">`[+/-]`</font>:  展开/收缩 场景集合文件目录
* <font color=" #dd0000 ">`/`</font>: 局部/全局切换
 * <font color=" #dd0000 ">`Z`</font>: 着色方式
* <font color=" #dd0000 ">`Shift + E + n`</font>: 边线折痕
  * <font color=" #dd0000 ">`Shift + E `</font>: Edge crease

**物体基本操作**:
---
* <font color=" #dd0000 ">`W`</font>:  [物体、点、线、面、...] 对应上下文菜单
* <font color=" #dd0000 ">`Shift + A`</font>:创建对象
* <font color=" #dd0000 ">F9</font>  :  微调参数
* <font color=" #dd0000 ">`Shift + D`</font>: 复制对象
    * <font color=" #dd0000 ">`Alt + D`</font>: 关联复制 (物体模式下)
* <font color=" #dd0000 ">`Ctrl + M`</font>: 按选定轴向**镜像**
* <font color=" #dd0000 ">`Ctrl + J`</font>: 合并对象
* <font color=" #dd0000 ">`P`</font>:分离对象
* <font color=" #dd0000 ">`Ctrl + P`</font>: 设置父级
 * <font color=" #dd0000 ">`Shift + S`</font>: 对齐
 * <font color=" #dd0000 ">`Shift + R`</font>  : Repeat previous step
 * <font color=" #dd0000 ">`G/R/S`</font>: 变换: [移动 / 旋转 / 缩放]
     *  <font color=" #dd0000 ">`G G`</font>:  滑移——受限制的移动线或面
        *  GG + C : 约束下滑移u
 * <font color=" #dd0000 ">`Alt + [G/R/...]`</font>: 复位变换
 * <font color=" #dd0000 ">`<`</font>: 修改变换坐标系
     *  <font color=" #dd0000 ">`+`</font>: 可以设置[点, 线, 面]的法向基准的坐标系作为变换坐标系
* <font color=" #dd0000 ">`>`</font>: 修改轴心点
* <font color=" #dd0000 ">`Alt + N`</font>: 法向菜单
* <font color=" #dd0000 ">`F2`</font>: 重命名
**选取操作:**
---
 * <font color=" #dd0000 ">`Ctrl + [+/-]`</font>: 扩展/缩小选区
 * <font color=" #dd0000 ">`Shift + S`</font>: 选择相似对象
 * <font color=" #dd0000 ">`Alt`</font>+Selecting: 循环选择
     * <font color=" #dd0000 ">`Ctrl + Alt `</font>+Selecting : 并排选择
 * <font color=" #dd0000 ">`B`</font>: 框选
 * <font color=" #dd0000 ">`C`</font>: 刷选
    * 按住中键可以减选
 * Select ion+<font color=" #dd0000 ">`L`</font>: 扩展选区至整个拓扑对象
 * <font color=" #dd0000 ">`Ctrl + I`</font> : 反选
 * 选择一个点，再 `ctrl` 选择另一个点：自动选择最短路径
 * 选择一个物体，double* <font color="dd0000"> `A`</font>: 以选中物体为激活对象的集合
**点线面、变换**:
---


|             | 点            | 线            | 面            |
| :---------  | :---------: | :-----------: | :-----------: |
| 选择         | ***1***       | ***2***       | ***3***       |
| 加/减选      | **Shift + 1** | **Shift + 2** | **Shift + 3** |
| 元素对应命令 | **Ctrl + V**  | **Ctrl + E**  | **Ctrl + F**  |

* <font color=" #dd0000 ">`X`</font>: delete
	* <font color=" #dd0000 ">`Ctrl + X`</font>: 融并选区
* <font color=" #dd0000 ">`Ctrl + B`</font>:  倒角 ( edge )
    * <font color=" #dd0000 ">`Shift + Ctrl + B`</font>:   Bevel ( vertex-only )
* <font color=" #dd0000 ">`Ctrl + R`</font>: 环切
* <font color=" #dd0000 ">`Alt + M`</font> : 焊接 ( merge )
* <font color=" #dd0000 ">`I`</font>: 内插面
* <font color=" #dd0000 ">`K`</font>: 裁剪?
* 连接之<font color=" #dd0000 ">`F`</font> & <font color=" #dd0000 ">`J`</font> :
	* <font color=" #dd0000 ">`F`</font>: 元连接  ( *导轨情景下可以按住 `F` 使其按方向顺次连接*
	* <font color=" #dd0000 ">`J` </font> : 二阶连接，在基础上进一步按选择方向连接
* <font color=" #dd0000 ">`S + [x, y, z] + 0`</font>: 元素沿选择轴向对齐
  * **对齐基准**的选择：按<font color=" #dd0000 ">`>`</font>选择对齐基准
* <font color=" #dd0000 ">`Alt + E`</font>: 按选定方式挤出(法向挤出, etc)
* <font color=" #dd0000 ">`Alt + S`</font>:  法向缩放
  * 按 `S` 开启均等缩放、按住 `Alt` 开启均等缩放
* <font color=" #dd0000 ">`Shift + Alt + S`</font>: 球形化
* <font color=" #dd0000 ">`O`</font> : 开启/关闭衰减编辑
* <font color=" #dd0000 ">`V`</font> : 断离
    * <font color=" #dd0000 ">`Alt + V`</font>: 撕开选中的点/线 并填充 3d
    * <font color=" #dd0000 ">`Alt + D`</font>: 断离并延长 2d
* <font color=" #dd0000 ">`Y`</font>:  从物体上拆分选中的元素
* <font color=" #dd0000 ">`Shift + V `</font>  :  沿网格滑移顶点
    * = `G G`
* <font color=" #dd0000 ">`Shift + Tab`</font>: 开关吸附工具
    * 按 <font color=" #dd0000 ">`Ctrl`</font>  :  暂时开关吸附工具
    * <font color=" #dd0000 ">`N`</font>  活动工具中开启 <font color=" #dd0000 ">`自动合并`</font>  则阀值内吸附的元素自动合并
* <font color=" #dd0000 ">`Shift + N`</font>: 重新计算法线

## Shading
---
* <font color=" #dd0000 ">`Shift + A`</font>: 新建
* <font color=" #dd0000 ">`Shift + D`</font>: 复制
* <font color=" #dd0000 ">`Shift + Right_click`</font>: 添加节点

## Camera setting & Rendering
---
* <font color=" #dd0000 ">`F12`</font>:  查看渲染结果
* <font color=" #dd0000 "><code>Shift + S </code></font>: save the rendering image
* <font color=" #dd0000 ">`0`</font>: (toogle) 在视图中查看相机看到的内容
* <font color=" #dd0000 "><code>Ctrl  + Shift + 0</code></font>: 于当前视图定位摄像机
* <font color=" #dd0000 "><code>Shift + `</code></font>: Navigation, 第一视角操作
* <font color=" #dd0000 "><code>Contrl + Shift + left-click</code></font>:preview the effect of the node
* <font color=" #dd0000 "><code>Contrl + G</code></font>: Build a group
* <font color=" #dd0000 "><code>Tab</code></font>: unfold the group


## Sculpting
---
* <font color=" #dd0000 ">`F`</font>:  调整画笔大小
*  <font color=" #dd0000 ">`Shift + F`</font>:  调整画笔强度