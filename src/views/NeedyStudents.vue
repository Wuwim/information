<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" @click="goback" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">贫困生</span>
      </div>
    </div>

    <div class="error flex-row">
      <img class="error_voice" src="../img/voice1.png" alt="" />
      <span class="error_w">其中一项或一项以上必须选是，才能提交！</span>
    </div>
    <div class="form-box">
      <!-- @submit="checkForm" -->
      <!-- <form action=""> -->
      <div class="form1-box">
        <!-- :class=" ? 'form1' : ''" -->
        <div v-for="(item, index) in arr" :key="index">
          <!-- 性别 -->
          <div class="item_box flex-row">
            <div class="item_title">{{ item.title }}</div>
            <div class="item_content">
              <!-- @click="item.isNo=flase" -->
              <input
                style="display: none"
                class="item_input"
                type="text"
                placeholder="填写性别"
                v-model="item.FileStudentsFromPoorFamilies"
              />
              <div class="flex-row">
                <div
                  class="sex"
                  :class="!item.isNo ? 'checkSex' : ''"
                  @click="item.isNo = false"
                >
                  否
                </div>
                <div
                  class="sex"
                  :class="item.isNo ? 'checkSex' : ''"
                  @click="item.isNo = true"
                >
                  是
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col upload" v-show="item.isNo">
            <span class="upload_w">*证明材料（照片）</span>
            <van-uploader v-model="fileList[index]" :after-read="afterRead">
              <div class="upload_chose flex-row">
                <div class="upload_chose_icon">+</div>
                <div class="upload_chose_w">上传</div>
              </div>
            </van-uploader>
          </div>

          <div class="fgx" v-show="item.title != '是否低保边缘户'"></div>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="btn_box">
        <!-- type="submit" -->
        <button class="btn" @click="checkForm">提交</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      fileList: [[], [], [], [], [], [], []],
      arr: [
        {
          title: "是否建档立卡贫困家庭学生",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否最低生活保障家庭学生",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否特困供养学生",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否孤残学生",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否烈士子女",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否家庭经济困难残疾学生及残疾人子女",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
        {
          title: "是否低保边缘户",
          FileStudentsFromPoorFamilies: "",
          isOk: false,
          isNo: false,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.content);
      console.log(file);
    },

    checkForm() {
      var howadd = 0;
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].isNo == false) {
          howadd++;
          if (howadd == 7) {
            // console.log("请选择贫困原因" + "666");
            Toast("请选择贫困原因");
            return;
          }
        } else {
          if (this.fileList[i] == "") {
            Toast("请上传" + this.arr[i].title + "的证明");
            return;
          }
        }
      }
      sessionStorage.setItem("NeedyStudents", true);

      this.$router.push({
        path: "/SubmitSuccess",
      });
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
  background: #dcf2f0;
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
  color: #50c9c3;
}
.error_color {
  background: #fceded;
}
.form1-box {
  margin: 15px auto 0;
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
  padding: 14px 18px;
  align-items: center;
  justify-content: space-between;
}
.item_box1 {
  padding: 18px 18px;
}
.item_title {
  width: 60%;
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
.upload {
  margin-left: 18px;
  margin-bottom: 20px;
}
.upload_w {
  font-size: 15px;
  color: #c8c8c8;
  margin-bottom: 12px;
}
.upload_chose {
  width: 105px;
  height: 105px;
  background: #f1faff;
  border: 1px dashed #4c96d9;
  opacity: 1;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.upload_chose_icon {
  width: 16px;
  height: 16px;
  background: #4c96d9;
  border-radius: 50%;
  color: #ffffff;
  font-size: 15px;
}
.upload_chose_w {
  font-size: 12px;
  color: #4c96d9;
}
::v-deep .van-uploader__preview-image {
  width: 105px;
  height: 105px;
}
::v-deep .van-uploader__preview-delete {
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #c8c8c8;
}
::v-deep .van-uploader__preview-delete-icon {
  top: -4px;
  right: -4px;
  font-size: 25px;
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
  position: absolute;
  bottom: -0px;
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
