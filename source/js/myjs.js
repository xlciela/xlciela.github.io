// 侧栏分类卡片隐藏

var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
var item = document.getElementsByClassName("card-category-list-item");
function toggle(t) {
    var display = t.parentElement.nextSibling.style.display;
    if (display == "none") {
        t.parentElement.nextSibling.style.display = "block";
        t.parentElement.nextSibling.style.height = "100%";
        t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
    }
}

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
    card_category_list[i].previousSibling.innerHTML +=
        '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" οnclick="toggle(this)"></i>';
}

// 轮播图功能

(function () {
  function Slider(option) {
    this.wrap = option.wrap;
    this.imgList = option.imgList;
    this.imgNum = this.imgList.length;
    this.width = option.width || $(this.wrap).width();
    this.height = option.height || $(this.wrap).height();
    this.isAuto = option.isAuto || true;
    this.moveTime = option.moveTime;
    this.direction = option.direction || "right";
    this.btnWidth = option.btnWidth;
    this.btnHeight = option.btnHeight;
    this.spanWidth = option.spanWidth;
    this.spanHeight = option.spanHeight;
    this.spanColor = option.spanColor;
    this.activeSpanColor = option.activeSpanColor;
    this.btnBackgroundColor = option.btnBackgroundColor;
    this.spanRadius = option.spanRadius;
    this.spanMargin = option.spanMargin;
    this.flag = false;
    this.nowIndex = 0;
    this.createDom();
    this.initStyle();
    this.bindEvent();
    if (this.isAuto === true) {
      this.autoMove();
    }
  }

  Slider.prototype.createDom = function () {
    var oUl = $('<ul class="imgList"></ul>');
    var Spot = $('<div class="spot"></div>');
    this.imgList.forEach(function (item) {
      var oLi =
        '<li><a  href=" ' +
        item.a +
        'target="_blank" "><img src=" ' +
        item.img +
        ' "></a></li>';
      oUl.append(oLi);
      var span = "<span></span>";
      Spot.append(span);
    });
    var leftBtn = $(
      '<div class="left-btn"><i class="fas fa-angle-left"></i></div>'
    );
    var rightBtn = $(
      '<div class="right-btn"><i class="fas fa-angle-right"></i></div>'
    );
    this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
  };
  Slider.prototype.initStyle = function () {
    $("*", this.wrap).css({ margin: 0, padding: 0, listStyle: "none" });
    $(this.wrap).css({ overflow: "hidden", position: "relative" });
    $(".imgList", this.wrap).css({
      width: this.width,
      height: this.height,
      position: "relative",
    });
    $(".imgList li", this.wrap)
      .css({
        width: this.width,
        height: this.height,
        position: "absolute",
        left: 0,
        top: 0,
        display: "none",
      })
      .eq(this.nowIndex)
      .css({ display: "block" });
    $(".imgList li a, .imgList li a img", this.wrap).css({
      display: "inline-block",
      width: this.width,
      height: this.height,
    });
    $(".left-btn, .right-btn", this.wrap).css({
      width: this.btnWidth,
      height: this.btnHeight,
      backgroundColor: this.btnBackgroundColor,
      color: "#fff",
      textAlign: "center",
      lineHeight: this.btnHeight + "px",
      position: "absolute",
      top: "50%",
      marginTop: -this.btnHeight / 2,
      cursor: "pointer",
    });
    $(".right-btn", this.wrap).css({ right: 0 });
    $(".spot", this.wrap).css({
      height: this.spanHeight + this.spanMargin * 2,
      position: "absolute",
      left: "50%",
      marginLeft: (-this.imgNum * (this.spanWidth + this.spanMargin * 2)) / 2,
      bottom: 10,
    });
    $(".spot span", this.wrap)
      .css({
        display: "inline-block",
        width: this.spanWidth,
        height: this.spanHeight,
        margin: this.spanMargin,
        backgroundColor: this.spanColor,
        borderRadius: this.spanRadius,
        cursor: "pointer",
      })
      .eq(this.nowIndex)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.bindEvent = function () {
    var self = this;
    $(".left-btn", this.wrap).click(function () {
      self.move("prev");
    });
    $(".right-btn", this.wrap).click(function () {
      self.move("next");
    });
    $(".spot span").click(function (e) {
      self.move($(this).index());
    });
    $(this.wrap).mouseenter(function () {
      clearInterval(self.time);
    });
  };
  Slider.prototype.move = function (dir) {
    if (this.flag) {
      return false;
    }
    this.flag = true;
    switch (dir) {
      case "prev":
        if (this.nowIndex === 0) {
          this.nowIndex = this.imgNum - 1;
        } else {
          this.nowIndex--;
        }
        break;
      case "next":
        if (this.nowIndex === this.imgNum - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
        break;
      default:
        this.nowIndex = dir;
        break;
    }
    var self = this;
    $(".imgList li", this.wrap)
      .fadeOut()
      .eq(this.nowIndex)
      .fadeIn(function () {
        self.flag = false;
      });
    $(".spot  span", this.wrap)
      .css({ backgroundColor: this.spanColor })
      .eq(this.nowIndex % this.imgNum)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.autoMove = function () {
    var self = this;
    this.time = setInterval(function () {
      if (this.direction == "left") {
        $(".left-btn", this.wrap).trigger("click");
      } else {
        $(".right-btn", this.wrap).trigger("click");
      }
    }, self.moveTime);
  };
  $.fn.extend({
    slider: function (option) {
      option.wrap = this;
      new Slider(option);
    },
  });
})();

/*
<div class="demo"></div>
<script>
    function tt(){
        $('.demo').slider({
    imgList: [
        {
            img: 'https://cdn.jsdelivr.net/gh/blogimg/picbed@master/2020/04/13/2a877ea5da1292c817cbc2a254c01c31.png',
            a: '跳转url地址',
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/blogimg/picbed@master/2020/04/13/5005109d1aa2ffd28984c2b02b8cbfbe.png',
            a: '跳转url地址',
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/blogimg/picbed@master/2020/04/13/163a2ade4361d1ed705ed523091af67e.png',
            a: '跳转url地址',
        }
    ], //图片的列表，a属性里面存放的是网络地址，img存放的是图片地址
    width: "100%", //图片的宽
    height: 500, //图片的高
    isAuto: false, //是否自动轮播
    moveTime: 3000, //运动时间
    direction: 'right', //轮播的方向
    btnWidth: 30, //按钮的宽
    btnHeight: 30, //按钮的高
    spanWidth: 10, //span按钮的宽
    spanHeight: 10, //span按钮的高
    spanColor: '#fff', //span按钮的颜色
    activeSpanColor: 'red', //选中的span颜色
    btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
    spanRadius: '50%', //span按钮的圆角程度
    spanMargin: 3, //span之间的距离
})
    }
    window.addEventListener('DOMContentLoaded',tt)
</script>
*/
