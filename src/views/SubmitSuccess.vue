<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" @click="goback" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">个人联系信息</span>
      </div>
    </div>
    <div class="block2 flex-col">
      <img class="block2_1" src="../img/complete.png" alt="" />
      <span class="block2_2">信息提交成功</span>
      <span class="block2_3">*若填写有误请回首页修改*</span>
      <div class="block2_4" @click="goIndex">返回首页</div>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      isshowxxdz: false,
      phone: "", //手机号
      shortPhone: "", //手机短号
      email: "", //邮箱
      qqNum: "", //qq号
      wxNum: "", //微信号
      postalAddress: "", //通讯地址
      addressDetail: "", //详细地址
      postalCode: "", //邮政编码
      showArea: false, //通讯地址显示
      areaList,
    };
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goIndex() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.css";
.content {
  height: 100vh;
}
.block1 {
  width: 100%;
  height: 90px;
  background: #ffffff;
  align-items: center;
}
.goback-box {
  width: 20%;
  padding-top: 26px;
}
.block1-w-box {
  width: 60%;
  text-align: center;
  padding-top: 26px;
}
.goback {
  margin-left: 16px;
  width: 10px;
  height: 18px;
}
.block1-w {
  font-size: 17px;
  font-weight: 500;
}
.block2 {
  height: 100%;
  align-items: center;
}
.block2_1 {
  margin-top: 82px;
  width: 95px;
  height: 95px;
}
.block2_2 {
  margin-top: 38px;
  font-size: 19px;
}
.block2_3 {
  margin-top: 15px;
  font-size: 16px;
  color: #c8c8c8;
}
.block2_4 {
  margin-top: 45px;
  width: 255px;
  height: 45px;
  background: linear-gradient(90deg, #4c95da 0%, #50cac1 100%);
  opacity: 1;
  border-radius: 23px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 45px;
}
</style>
