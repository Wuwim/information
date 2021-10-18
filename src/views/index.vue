<template>
  <div class="content">
    <div class="block1">
      <div class="block1-1 flex-row">
        <div class="block1-1-img">
          <img class="block1-1-img" src="../img/tx.png" alt="" />
        </div>
        <div class="block1-1-w flex-col">
          <div class="block1-1-w1">
            <span>南南子</span>
          </div>
          <div class="block1-1-w2">
            <span class="block1-1-w2-1">NO.2021010920</span>
          </div>
        </div>
        <div class="block1-1-img1">
          <img class="block1-1-img1-1" src="../img/girl.png" alt="" />
        </div>
      </div>
      <div class="block1-2 flex-col">
        <span class="block1-2-1">21移动1</span>
        <span class="block1-2-2">艺术与设计学院</span>
      </div>
    </div>
    <div class="block2 flex-row">
      <div class="block2-left flex-col">
        <img class="finish-x" src="../img/finish-x.png" alt="" />
        <img class="finish-x" src="../img/finish-x.png" alt="" />
        <img class="finish-x" src="../img/finish-x.png" alt="" />
        <img class="finish-x" src="../img/finish-x.png" alt="" />
        <img class="finish-x" src="../img/finish-x.png" alt="" />
        <img class="finish-x" src="../img/finish.png" alt="" />
      </div>
      <div class="block2-right flex-col">
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">基础信息</span>
            <span class="block2-right-w2">Basic information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn" @click="goBasicInformation()">
            填写
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">个人联系信息</span>
            <span class="block2-right-w2">Personal contact information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn">填写</button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">个人简历</span>
            <span class="block2-right-w2">Curriculum vitae</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn">填写</button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">家庭基础信息</span>
            <span class="block2-right-w2">Family basic information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn">填写</button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">家庭成员</span>
            <span class="block2-right-w2">Member of family</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn">填写</button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">贫困生</span>
            <span class="block2-right-w2">Poor students</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button class="block2-right-btn btywc">已完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    goBasicInformation() {
      this.$router.push({
        path: "002",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";
.block1 {
  width: 100vw;
  height: 278px;
  background: url(~@/img/bj1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.block1-1 {
  margin-top: 40px;
  margin-left: 24px;
  align-items: center;
}
.block1-1-img {
  width: 64px;
  height: 64px;
  border-radius: 20px;
}
.block1-1-w {
  margin-left: 14px;
  color: #ffffff;
}
.block1-1-w1 {
  font-size: 18px;
}
.block1-1-w2 {
  margin-top: 8px;
  font-size: 12px;
  border: 1px solid #ffffff;
  border-radius: 20px;
}
.block1-1-w2-1 {
  padding: 6px 8px;
}
.block1-1-img1 {
  margin-left: 130px;
}
.block1-1-img1-1 {
  width: 20px;
  height: 28px;
}
.block1-2 {
  margin-top: 40px;
  margin-left: 24px;
  color: #ffffff;
}
.block1-2-1 {
  font-size: 19px;
}
.block1-2-2 {
  margin-top: 8px;
  font-size: 16px;
}

.block2 {
  position: absolute;
  top: 220px;
  left: 15px;
  width: 346px;
  height: 436px;
  background: #ffffff;
  border-radius: 8px;
}
.block2-left {
  margin-top: 32px;
  margin-left: 18px;
}
.finish-x {
  margin-top: 2px;
  width: 24px;
}
.block2-right {
  margin-left: 16px;
  width: 78%;
}
.jbxx {
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.block2-right-w1 {
  font-weight: 500;
  font-size: 18px;
}
.block2-right-w2 {
  font-weight: 300;
  font-size: 14px;
  color: #c8c8c8;
}
.block2-right-btn {
  width: 70px;
  height: 28px;
  border-radius: 13px;
  color: #ffffff;
  font-size: 14px;
  border: none;
  background: #4c96da;
}
.btywc {
  background: #c8c8c8;
}
.btywc {
  background: #50c9c3;
}
</style>
