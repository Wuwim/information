<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback_box">
        <img class="goback" src="../img/goback.png" alt="" @click="goback" />
      </div>
      <div class="block1_w_box">
        <span class="block1_w">个人联系信息</span>
      </div>
    </div>
    <div class="form_box">
      <van-form @submit="onSubmit" error-message-align="right">
        <div class="form1_box">
          <div class="form1">
            <!-- 注册钉钉的手机号 -->
            <van-field
              v-model="phone"
              name="注册钉钉的手机号"
              label="注册钉钉的手机号"
              placeholder="填写注册钉钉的手机号"
              input-align="right"
              :rules="[
                { required: true, message: '请填写注册钉钉的手机号' },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '请填写正确的手机号',
                },
              ]"
            />
            <!-- 短号 -->
            <div class="xuantian1">(选填)</div>
            <van-field
              v-model="shortPhone"
              name="短号"
              label="短号"
              placeholder="填写你的短号"
              input-align="right"
            >
            </van-field>

            <!-- Email -->
            <van-field
              v-model="email"
              name="Email"
              label="Email"
              placeholder="填写你的Email"
              input-align="right"
              :rules="[
                { required: true, message: '请填写Email' },
                {
                  pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
                  message: '请填写正确的Email',
                },
              ]"
            />
            <!-- QQ号 -->
            <van-field
              v-model="qqNum"
              name="QQ号"
              label="QQ号"
              placeholder="填写你的QQ号"
              input-align="right"
              :rules="[
                { required: true, message: '请填写QQ号' },
                {
                  pattern: /^[1-9][0-9]{4,10}/,
                  message: '请填写正确的QQ号',
                },
              ]"
            />
            <!-- 微信号 -->
            <van-field
              v-model="wxNum"
              name="微信号"
              label="微信号"
              placeholder="填写你的微信号"
              input-align="right"
              :rules="[{ required: true, message: '请填写微信号' }]"
            />
            <!-- 通讯地址 -->
            <van-field
              readonly
              clickable
              name="通讯地址"
              :value="postalAddress"
              label="通讯地址"
              placeholder="选择省市区 >"
              @click="showArea = true"
              input-align="right"
              :rules="[{ required: true, message: '选择省市区' }]"
            />
            <!-- <textarea
              name="通讯地址"
              type="text"
              class="postalAddress"
              placeholder="
              详细地址至街道门牌、楼层房间等
              详细地址至街道门牌、楼层房间等"
              v-model="addressDetail"
              @mouseleave="addressDetailed"
            /> -->
            <!-- <span v-show="isshowxxdz" class="isxxdz">请填写详细地址</span> -->
            <van-field
              v-model="addressDetail"
              name="详细地址"
              type="textarea"
              placeholder="详细地址至街道门牌、楼层房间等
详细地址至街道门牌、楼层房间等"
              autosize
              :rules="[{ required: true, message: '请填写详细地址' }]"
            />
            <van-popup v-model="showArea" position="bottom">
              <van-area
                type="submit"
                :area-list="areaList"
                @confirm="onpostalAddress"
                @cancel="showArea = false"
              />
            </van-popup>
            <!-- 邮政编码 -->
            <div class="xuantian2">(选填)</div>
            <van-field
              v-model="postalCode"
              name="邮政编码"
              label="邮政编码"
              placeholder="填写邮政编码"
              input-align="right"
            />
          </div>
        </div>
        <div class="form4">
          <van-button class="form4_btn" round block native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      isshowxxdz: false,
      // pattern: /^1[3-9]\d{9}$/,
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
      this.$router.push({
        path: "/",
      });
    },
    onpostalAddress(values) {
      //出生地
      this.postalAddress = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    addressDetailed() {
      console.log(this.addressDetail);
      if (this.addressDetail == "") {
        this.isshowxxdz = true;
      } else {
        this.isshowxxdz = false;
      }
    },
    onSubmit(values) {
      
      let data = JSON.parse(sessionStorage.getItem("data"));
      console.log(data)
      data.[1]=false;
      console.log(data)
      sessionStorage.setItem("data", JSON.stringify(data));
      console.log("submit", values);
      this.$router.push({
        path: "/submitSuccess",
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
.goback_box {
  width: 20%;
  padding-top: 26px;
}
.block1_w_box {
  width: 60%;
  text-align: center;
  padding-top: 26px;
}
.goback {
  margin-left: 16px;
  width: 10px;
  height: 18px;
}
.block1_w {
  font-size: 17px;
  font-weight: 500;
}
.form1_box {
  margin: 15px auto 0;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
}
.form1 {
  width: 96%;
  margin-left: 2%;
}
.xuantian1 {
  z-index: 999;
  width: 60px;
  height: 0;
  position: relative;
  top: 16px;
  left: 50px;
  font-size: 15px;
  color: #4c99d8;
}
.xuantian2 {
  z-index: 999;
  width: 60px;
  height: 0;
  position: relative;
  top: 16px;
  left: 76px;
  font-size: 15px;
  color: #4c99d8;
}
.postalAddress {
  font-size: 16px;
  width: 100%;
  border: none;
  height: 60px;
}
.isxxdz {
  margin-left: 70px;
  color: #ee0a24;
  font-size: 12px;
}
textarea[class="postalAddress"]::-webkit-input-placeholder {
  font-size: 15px;
  text-align: left;
  color: #b3b3b3;
}

.form4 {
  position: absolute;
  bottom: -0px;
  width: 375px;
  height: 75px;
  background: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form4_btn {
  width: 345px;
  height: 45px;
  background: linear-gradient(90deg, #4c95da 0%, #4fc9c0 100%);
  font-size: 18px;
  color: #ffffff;
}
::v-deep .van-field__label {
  width: auto;
}
::v-deep .van-cell {
  font-size: 15px;
  padding: 16px 12px;
}
</style>
