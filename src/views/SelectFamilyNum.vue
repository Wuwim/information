<template>
  <div class="content">
    <div class="block1">
      <!-- <img style="width: 375px" src="../img/bj2.png" alt="" /> -->
      <div class="title flex-row">
        <div class="title-goback">
          <img class="goback" src="../img/goback1.png" alt="" />
        </div>
        <div class="title-w-box">
          <span class="title-w">家庭成员</span>
        </div>
      </div>
      <div class="block1-body">
        <div class="block1-w flex-col">
          <span class="block1-w1">请确定</span>
          <span class="block1-w2">你的户口本上的总人数</span>
          <div class="block1-w3"></div>
          <span class="block1-w4">*请核对后再选择*</span>
        </div>
      </div>
    </div>
    <div class="block2">
      <van-picker
        title="标题"
        :columns="columns"
        item-height="55px"
        visible-item-count="5"
        @change="onChange"
      />
      <div class="form4">
        <van-button class="form4-btn">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
export default {
  data() {
    return {
      num: "",
      columns: [
        "1人",
        "2人",
        "3人",
        "4人",
        "5人",
        "6人",
        "7人",
        "8人",
        "9人",
        "10人",
      ],
    };
  },
  mounted() {},
  methods: {
    onChange(picker, value, index) {
      this.num = index + 1;
      console.log(this.num);
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";
.content {
  height: 100vh;
}
.block1 {
  width: 375px;
  height: 278px;
  background: linear-gradient(90deg, #4c96da 0%, #50c9c2 100%);
  border-radius: 0px 0px 50px 0px;
}
.title {
  margin-top: 55px;
  width: 100%;
}
.title-goback {
  width: 20%;
}
.goback {
  margin-left: 15px;
  width: 10px;
  height: 18px;
}
.title-w-box {
  width: 60%;
  text-align: center;
}
.title-w {
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
}
.block1-body {
  width: 100%;
  height: 195px;
  background: url(../img/bj2.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.block1-w {
  margin-left: 25px;
}
.block1-w1 {
  margin-top: 26px;
  font-size: 15px;
  color: #ffffff;
}
.block1-w2 {
  margin-top: 6px;
  font-size: 17px;
  color: #ffffff;
}
.block1-w3 {
  margin-top: 14px;
  width: 16px;
  height: 0px;
  border-top: 1px solid #ffffff;
}
.block1-w4 {
  margin-top: 14px;
  font-size: 13px;
  color: #b7fffa;
}
.block2 {
  position: absolute;
  top: 210px;
  left: 15px;
  width: 345px;
  /* height: 425px; */
}
.form4 {
  padding-top: 60px;
  height: 75px;
  background: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.form4-btn {
  width: 255px;
  height: 45px;
  background: linear-gradient(90deg, #4c95da 0%, #4fc9c0 100%);
  font-size: 18px;
  color: #ffffff;
}
/* ::v-deep .van-picker__toolbar {
  display: none;
} */
</style>
