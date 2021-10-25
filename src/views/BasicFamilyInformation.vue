<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" @click="goback" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w" @click="con">家庭基础信息</span>
      </div>
    </div>
    <div class="error flex-row" v-show="isShowError">
      <img class="error_voice" src="../img/voice.png" alt="" />
      <span class="error_w">{{ errorText }}</span>
    </div>
    <div class="form-box">
      <!-- @submit="checkForm" -->
      <!-- <form action="" onsubmit="return checkForm"> -->
      <div class="form1-box">
        <div :class="isErrorjtdh ? 'form1' : ''">
          <!-- 家庭电话 -->
          <div class="item_box flex-row">
            <div class="item_title">家庭电话</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorjtdh ? 'error_color' : ''"
                type="text"
                placeholder="填写家庭电话"
                v-model="homePhone"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorjtdz ? 'form1' : ''">
          <!-- 家庭地址 -->
          <div class="item_box flex-row">
            <div class="item_title">家庭地址</div>
            <div class="item_content">
              <input
                readonly="readonly"
                class="item_input"
                :class="isErrorjtdz ? 'error_color' : ''"
                type="text"
                placeholder="选择省市区 >"
                v-model="homeAddress"
                @click="showArea = true"
              />
            </div>
            <van-popup v-model="showArea" position="bottom">
              <van-area
                type="submit"
                :area-list="areaList"
                @confirm="onpostalAddress"
                @cancel="showArea = false"
              />
            </van-popup>
          </div>
          <textarea
            name="通讯地址"
            type="text"
            :class="isErrorjtdz ? 'error_color' : ''"
            class="homeAddress"
            placeholder="详细地址至街道门牌、楼层房间等
详细地址至街道门牌、楼层房间等"
            v-model="addressDetail"
          />
          <!-- @mouseleave="addressDetailed" -->
          <div class="fgx"></div>
        </div>

        <div class="">
          <!-- 邮政编码 -->
          <div class="item_box flex-row">
            <div class="item_title">
              邮政编码<span class="optional"> (选填)</span>
            </div>
            <div class="item_content">
              <input
                class="item_input"
                type="text"
                placeholder="填写邮政编码"
                v-model="postalCode"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorjhr ? 'form1' : ''">
          <!-- 紧急联系人(监护人) -->
          <div class="item_box flex-row">
            <div class="item_title">紧急联系人(监护人)</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorjhr ? 'error_color' : ''"
                type="text"
                placeholder="填写联系人姓名"
                v-model="emergencyContact"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorjhr1 ? 'form1' : ''">
          <!-- 紧急联系人电话 -->
          <div class="item_box flex-row">
            <div class="item_title">紧急联系人电话</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorjhr1 ? 'error_color' : ''"
                type="text"
                placeholder="填写联系人电话"
                v-model="EmergencyContactNumber"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 提交按钮 -->
      <div class="btn_box">
        <!-- @click="checkForm" -->
        <button class="btn" type="bottom" @click="checkForm">提交</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
// import { Toast } from "vant";
export default {
  data() {
    return {
      isShowError: false,
      isErrorjtdh: false,
      isErrorjtdz: false,
      isErrorjhr: false,
      isErrorjhr1: false,
      errorText: "",
      homePhone: "",
      homeAddress: "",
      addressDetail: "",
      postalCode: "",
      emergencyContact: "",
      EmergencyContactNumber: "",
      showArea: false,
      areaList,
    };
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    con() {
      console.log(this.homePhone);
    },
    onpostalAddress(values) {
      //出生地
      this.homeAddress = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },

    checkForm() {
      console.log();
      if (this.homePhone == "") {
        this.errorText = "手机号不能为空";
        this.isShowError = true;
        this.isErrorjtdh = true;
        return;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.homePhone)) {
        this.errorText = "手机号码有误，请重新输入";
        this.isShowError = true;
        this.isErrorjtdh = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorjtdh = false;
      }

      if (this.homeAddress == "") {
        this.errorText = "家庭地址不能为空";
        this.isShowError = true;
        this.isErrorjtdz = true;
        return;
      } else if (this.addressDetail.length < 10) {
        this.errorText = "地址写的详细一点！";
        this.isShowError = true;
        this.isErrorjtdz = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorjtdz = false;
      }
      if (this.emergencyContact == "") {
        this.errorText = "紧急联系人(监护人)不能为空";
        this.isShowError = true;
        this.isErrorjhr = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorjhr = false;
      }
      if (this.EmergencyContactNumber == "") {
        this.errorText = "紧急联系人电话不能为空";
        this.isShowError = true;
        this.isErrorjhr1 = true;
        return;
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.EmergencyContactNumber)) {
        this.errorText = "手机号码有误，请重新输入";
        this.isShowError = true;
        this.isErrorjhr1 = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorjhr1 = false;
      }

      sessionStorage.setItem("BasicFamilyInformation", true);

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
  margin: 15px auto 0;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
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
.item_title {
  width: 130px;
  font-size: 15px;
  color: #4a4a4a;
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
  resize: none;
}
textarea[class="homeAddress"]::-webkit-input-placeholder {
  font-size: 15px;
  text-align: left;
  color: #b3b3b3;
}

.btn_box {
  margin-top: 150px;
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
