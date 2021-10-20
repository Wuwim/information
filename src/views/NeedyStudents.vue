<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">贫困生</span>
      </div>
    </div>

    <!-- <div class="error flex-row" v-show="isShowError">
      <img class="error_voice" src="../img/voice.png" alt="" />
      <span class="error_w">{{ errorText }}</span>
    </div> -->
    <div class="form-box">
      <!-- @submit="checkForm" -->
      <!-- <form action=""> -->
      <div class="form1-box">
        <!-- :class=" ? 'form1' : ''" -->
        <div>
          <!-- 性别 -->
          <div class="item_box flex-row">
            <div class="item_title">是否建档立卡贫困家庭学生</div>
            <div class="item_content">
              <input
                style="display: none"
                class="item_input"
                :class="arr[0].isOk ? 'error_color' : ''"
                type="text"
                placeholder="填写性别"
                v-model="arr[0].FileStudentsFromPoorFamilies"
              />
              <div class="flex-row">
                <div class="sex" :class="arr[0].isNo ? 'checkSex' : ''">否</div>
                <div class="sex" :class="arr[0].isYes ? 'checkSex' : ''">
                  是
                </div>
              </div>
            </div>
          </div>
          <div class="fgx"></div>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="btn_box">
        <!-- type="submit" -->
        <button class="btn">提交</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
export default {
  data() {
    return {
      arr: [
        {
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
          isYes: false,
        },
        {
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
          isYes: false,
        },
        {
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
          isYes: false,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    con() {},
    choseSex(item, index) {
      //选中性别
      console.log(this.gender[0]);
      console.log("item:" + item);
      console.log("index:" + index);
      // for (var i in this.gender[this.several - 1]) {
      //   if (i == index) {
      //     this.gender[this.several - 1][i].checked = true;
      //     // console.log(this.gender[this.several - 1][i].checked);
      //     this.allMessage[this.several - 1].peopleSex = item.gender;
      //     // console.log(this.allMessage[this.several - 1].peopleSex);
      //   } else {
      //     this.gender[this.several - 1][i].checked = false;
      //   }
      // }
    },

    checkForm() {
      console.log();

      //   console.log(values.健康状况);
      // for (var i in values) {
      //   console.log(values[i]);
      //   if (values[i] == "") {
      //     //   console.log("曾用名为空");
      //     Toast("表单未填写完整");
      //     break;
      //   }
      // }
      //   console.log("submit", values);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.css";
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
.scorll_box {
  width: auto;
  overflow: scroll;
  // align-items: flex-start;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.scorll {
  padding: 8px 0px 8px 15px;
}
.scorll_top {
  align-items: center;
  white-space: nowrap;
}
.scorll_title {
  width: 15px;
  height: 15px;
  color: #ffffff;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
}
.scorll_title_w {
  background: #50c8c1;
}
.scorll_title_w1 {
  background: #c2c2c2;
}
.scorll_body {
  margin-left: 3px;
  font-size: 15px;
}
.scorll_bottom {
  margin-top: 5px;
  width: auto;
  height: 2px;
  background: #4c96d9;
  border-radius: 2px;
}
.error {
  width: 375px;
  height: 30px;
  background: #fceded;
  opacity: 1;
  align-items: center;
}
.error_voice {
  margin-left: 15px;
  width: 10px;
  height: 9px;
}
.error_w {
  margin-left: 8px;
  font-size: 12px;
  color: #e63535;
}
.error_color {
  background: #fceded;
}
.form1-box {
  margin: auto;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
}
.form1_title {
  width: 345px;
  height: 42px;
  background: linear-gradient(180deg, #4c97d9 0%, #4cbfb8 100%);
  opacity: 1;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  font-size: 17px;
  line-height: 42px;
  color: #ffffff;
}
.form1 {
  width: 345px;
  background: #fceded;
  border: 1px solid #e63535;
  opacity: 1;
}
.item_box {
  padding: 18px 18px;
  align-items: center;
  justify-content: space-between;
}
.item_box1 {
  padding: 18px 18px;
}
.item_title {
  font-size: 15px;
  color: #4a4a4a;
}
.sex {
  font-size: 15px;
  padding: 4px 12px;
  opacity: 1;
  border: 2px solid #4c96d9;
  background: #ffffff;
  border-radius: 3px;
  color: #4c96d9;
  margin-left: 6px;
}
.checkSex {
  background: #4c96d9;
  color: #ffffff;
}
.optional {
  color: #4c99d8;
}
.item_content {
  font-size: 15px;
}
.item_input {
  padding: 0;
  width: 150px;
  border: none;
  text-align: right;
  // direction: rtl;
}
.item_input1 {
  margin-top: 20px;
  padding: 0;
  width: 100%;
  border: none;
  // direction: rtl;
}
input::-webkit-input-placeholder {
  color: #c8c8c8;
}
.fgx {
  margin: auto;
  width: 310px;
  height: 0px;
  border-top: 1px solid #ececec;
}
.homeAddress {
  margin-left: 18px;
  font-size: 15px;
  width: 310px;
  height: 50px;
  border: none;
  padding: 0;
}
textarea[class="homeAddress"]::-webkit-input-placeholder {
  font-size: 15px;
  text-align: left;
  color: #b3b3b3;
}

.btn_box {
  margin-top: 15px;
  width: 375px;
  height: 75px;
  background: #ffffff;
}
.btn {
  margin: 15px;
  width: 345px;
  height: 45px;
  border: none;
  background: linear-gradient(90deg, #4c95da 0%, #50cac1 100%);
  border-radius: 23px;
  font-size: 18px;
  color: #ffffff;
}
</style>
