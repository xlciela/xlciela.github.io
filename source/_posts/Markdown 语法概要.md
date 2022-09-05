---
title: Markdown 语法概要
tags: 
  - Markdown
categories:
  - 笔记
date: 2020-07-21 2:19:00
cover: 
---


# Markdown 语法概要

## Title



```markdown
# h1
## h1
### h3
### h4
##### h5
```

## Text-display

```markdown
*斜体* 
**粗体**
~~删除线~~
<u>下划线</u>
--- 这是分割线---
```

## 列表

- 无序列表

  ```markdown
  ul:
  - li
  - li
  - li
  ------------
  ul:
  * li
  * li
  * li
  ```
  
- 有序列表

  ```markdown
  ol:
  1. li1
  2. li2
  3. li3
  ```
  
- 多层级列表

  ```markdown
  - li
    + subli
    + subli
    + subli
  - li
    + subli
      * ssli
      * ssli
      * ssli
    + subli
  ```

## 插入图片

```markdown
![Pic name](Pic link)  
```

##  插入表格

```markdown
|title|title1|title2|title3|
|:---|:---:|:---:|---:|
|a| b | c| d |
```

## Quote

```markdown
>引用内容
-----
嵌套引用:
>引用内容
>>引用内容
```

## 代码块

```markdown
​``` 
blockquotes
​```
```

## 链接

```markdown
[link name](link)
```

## 转义

```markdown
\
```

## Advanced

### 页内跳转

```markdown
[Line](#A)

<a name="A"></a>
```

### 图片排版

```html
/* 居中 */
<center>
<img src="https://i.pximg.net/img-master/img/2020/07/20/01/32/39/83090929_p0_master1200.jpg">
</center>
/* 并排显示，三张为例 */
<figure class="third">
    <img src="">
    <img src="">
    <img src="">
</figure>
```

