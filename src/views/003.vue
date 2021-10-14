<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../assets/img/goback.png" alt="" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">个人联系信息</span>
      </div>
    </div>
    <div class="form-box">
      <van-form @submit="onSubmit">
        <div class="form1-box">
          <div class="form1">
            <!-- 注册钉钉的手机号 -->
            <van-field
              v-model="phone"
              name="注册钉钉的手机号"
              label="注册钉钉的手机号"
              placeholder="填写注册钉钉的手机号"
              input-align="right"
              :rules="[{ required: true, message: '请填写注册钉钉的手机号' }]"
            />
            <!-- 短号 -->
            <van-field
              v-model="shortPhone"
              name="短号"
              label="短号"
              placeholder="填写你的短号"
              input-align="right"
              :rules="[{ required: true, message: '请填写短号' }]"
            />
            <!-- Email -->
            <van-field
              v-model="shortPhone"
              name="Email"
              label="Email"
              placeholder="填写你的Email"
              input-align="right"
              :rules="[{ required: true, message: '请填写Email' }]"
            />
            <!-- QQ号 -->
            <van-field
              v-model="shortPhone"
              name="QQ号"
              label="QQ号"
              placeholder="填写你的QQ号"
              input-align="right"
              :rules="[{ required: true, message: '请填写QQ号' }]"
            />
            <!-- 微信号 -->
            <van-field
              v-model="shortPhone"
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
              name="出生地"
              :value="postalAddress"
              label="通讯地址"
              placeholder="选择省市区 >"
              @click="showArea = true"
              input-align="right"
              :rules="[{ required: true, message: '选择省市区' }]"
            />
            <textarea
              type="text"
              class="postalAddress"
              placeholder="详细地址至街道门牌、楼层房间等
              详细地址至街道门牌、楼层房间等"
              placeholder-class="placeholder-class"
            />
            <van-popup v-model="showArea" position="bottom">
              <van-area
                :area-list="areaList"
                @confirm="onpostalAddress"
                @cancel="showArea = false"
              />
            </van-popup>
            <!-- 微信号 -->
            <van-field
              v-model="shortPhone"
              name="邮政编码"
              label="邮政编码"
              placeholder="填写邮政编码"
              input-align="right"
              :rules="[{ required: true, message: '请填写邮政编码' }]"
            />
          </div>
        </div>
        <div class="form4">
          <van-button class="form4-btn" round block native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { Toast } from "vant";
export default {
  data() {
    return {
      pattern: /^\s*$/g,
      pattern1: /\d{6}/,
      phone: "", //手机号
      shortPhone: "", //手机短号
      email: "", //邮箱
      qqNum: "", //qq号
      wxNum: "", //微信号
      postalAddress: "", //通讯地址
      postalCode: "", //邮政编码

      showArea: false, //通讯地址显示

      areaList,
    };
  },
  mounted() {},
  methods: {
    onpostalAddress(values) {
      //出生地
      this.postalAddress = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onSubmit(values) {
      //   console.log(values[0]);
      //   console.log(values.健康状况);
      for (var i in values) {
        console.log(values[i]);
        if (values[i] == "") {
          //   console.log("曾用名为空");
          Toast("表单未填写完整");
          break;
        }
      }
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
.form1-box {
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
.postalAddress {
  width: 100%;
  border: none;
  height: 60px;
}

.placeholder-class {
  font-size: 15px;
  color: #c8c8c8;
}

.form4 {
  margin-top: 45px;
  width: 375px;
  height: 75px;
  background: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form4-btn {
  width: 345px;
  height: 45px;
  background: linear-gradient(90deg, #4c95da 0%, #4fc9c0 100%);
  font-size: 18px;
  color: #ffffff;
}
::v-deep .van-field__label {
  width: auto;
}
</style>
