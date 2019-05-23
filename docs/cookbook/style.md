# 样式

区别于前述组件属性，对于所有组件，其位置、大小、背景等信息生而有之，所以，对于此种信息，我们称之为**样式**。

选中组件，点击组件配置区样式导航栏即可见样式面板。样式分为基础模式、高级模式、代码。

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557389175275.png)

## 基础模式

以下对每个样式作以详细说明。

**注意：每个样式配置项末尾的小锁图标代表是否启用该样式，锁打开即启用，锁闭即停用。**

### 位置

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557389689969.png)

介绍[组件操作](component.html#移动)时已说明过可以通过拖移组件可以来设置组件位置，其位置信息最终体现为样式中 *X* 和 *Y* 的取值，因此，通过修改 *X* 和 *Y* 的值同样可以达到改变组件位置的目的，其中 *X*、*Y* 分别为相对于父级组件（见[组件树](comtree.html)）左上角的水平距离和垂直距离。

### 大小

修改 **宽** 和 **高** 的值改变组件大小。

### 悬浮

勾选此项以后组件位置固定，不随页面一起滚动。

注意：编辑模式下，长页面的滚动并非真实滚动，所以看起来悬浮（fixed）组件仍然会随之滚动。如需查看实际效果，[暂存](./tips.html)页面以后，点击操作区右侧眼睛图标即可查看。

<p>
  <video controls name="media" style="max-width: 100%">
    <source src="https://imagecdn.ymm56.com/ymmfile/explore-biz/ymm_1526283558384.mp4" type="video/mp4">
  </video>
</p>

### 透明度

拖动进度条，可调整组件的透明度。

### 对齐

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557389942370.png)

对齐操作用来快速定位元素到特殊位置，包括水平居中、垂直居中、左对齐、右对齐、顶对齐、底对齐以及快速修改组件视觉层级。如果不清楚每个按钮的功能，将鼠标移动到图标之上，即可显示功能提示。

<p>
  <video controls name="media" style="max-width: 100%">
    <source src="https://imagecdn.ymm56.com/ymmfile/explore-biz/ymm_1526284469828.mp4" type="video/mp4">
  </video>
</p>

### 背景

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557390094339.png)

背景设置分为图片设置和颜色设置，两者可以共存，图片会覆盖在颜色之上。设置项如下：

- 【图片】 *输入* 背景图片地址 或 *上传* 本地图片。

- 【填充】 *选择* 背景图片的填充类型，填充类型决定了图片在背景内的显示方式。将鼠标放置在各个选项即可查看填充类型说明。

- 【颜色】 *选择* 或 *输入* 背景颜色。

<p>
  <video controls name="media" style="max-width: 100%">
    <source src="https://imagecdn.ymm56.com/ymmfile/explore-biz/ymm_1526286224251.mp4" type="video/mp4">
  </video>
</p>

### 边框

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557390278359.png)

- 【宽度】 *输入* 边框的线宽。

- 【样式】 *选择* 框线的类型，如实线、虚线、点划线等。

- 【颜色】 *选择* 或 *输入* 框线颜色。

- 【圆角】 *输入* 边框的圆角大小。

### 文字样式

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557390388344.png)

- 【字体】 *选择* 字体。

- 【对齐】 *选择* 文本对齐方式，指定文本在组件内的排布方式，如居中。需要区别于[对齐](#对齐)操作（对齐操作针对组件位置，而非文本对齐方式）。

- 【加粗】 *选择* 加粗程度。

- 【字号】 *输入* 字体大小。

- 【行高】 *输入* 一个文本行的高度，它决定行间距。

- 【颜色】 *选择* 或 *输入* 文本颜色。

### 边距

现行组件定位模式下，如无对边距的充分理解，不建议使用。如有需求，尽量采用修改组件大小或者位置来实现。

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557390589069.png)

- 【内边距】 *输入* 组件内容区到边框的距离

- 【外边距】 *输入* 组件外围的空白区域的大小

## 高级模式

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557391051615.png?x-oss-process=image/resize,p_80)

高级模式主要是对于基础模式的一个扩展，例如：组件溢出（overflow）、定位（position）、内外边距（padding、margin）等处理，具体的就不一一展开说明了。

## 代码

开发者福音，若熟悉css开发的小伙伴们，可使用**代码**模块直接对组件进行样式编写。

**注意：在编写完样式之后，需要点击保存按钮。**

![](https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1557391233627.png)

