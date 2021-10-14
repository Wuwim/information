<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../assets/img/goback.png" alt="" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">基础信息</span>
      </div>
    </div>
    <div class="block2">
      <!-- @submit="onSubmit" -->
      <van-form>
        <!-- 曾用名 -->
        <van-field
          v-model="formerlyName"
          name="曾用名"
          label="曾用名"
          placeholder="没有填'无'"
          input-align="right"
        />
        <!-- 国籍 -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="valueNationality"
          label="国籍"
          placeholder="选择国籍 >"
          @click="showNationality = true"
          input-align="right"
        />
        <van-popup v-model="showNationality" position="bottom">
          <van-picker
            show-toolbar
            :columns="nationality"
            @confirm="onNationality"
            @cancel="showNationality = false"
          />
        </van-popup>
        <!-- 出生地 -->
        <van-field
          readonly
          clickable
          name="area"
          :value="valueBirth"
          label="出生地"
          placeholder="选择省市区 >"
          @click="showArea = true"
          input-align="right"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onBirth"
            @cancel="showArea = false"
          />
        </van-popup>
        <!-- 民族 -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="valueNation"
          label="民族"
          placeholder="选择民族 >"
          @click="showNation = true"
          input-align="right"
        />
        <van-popup v-model="showNation" position="bottom">
          <van-picker
            show-toolbar
            :columns="nation"
            @confirm="onNation"
            @cancel="showNation = false"
          />
        </van-popup>
        <!-- 宗教 -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="valueReligion"
          label="宗教"
          placeholder="选择宗教 >"
          @click="showReligion = true"
          input-align="right"
        />
        <van-popup v-model="showReligion" position="bottom">
          <van-picker
            show-toolbar
            :columns="Religion"
            @confirm="onReligion"
            @cancel="showReligion = false"
          />
        </van-popup>
        <!-- 政治面貌 -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="valuePolitics"
          label="政治面貌"
          placeholder="选择政治面貌 >"
          @click="showPolitics = true"
          input-align="right"
        />
        <van-popup v-model="showPolitics" position="bottom">
          <van-picker
            show-toolbar
            :columns="Politics"
            @confirm="onPolitics"
            @cancel="showPolitics = false"
          />
        </van-popup>
        <!-- 籍贯 -->
        <van-field
          readonly
          clickable
          name="area"
          :value="valueNativeplace"
          label="籍贯"
          placeholder="选择籍贯 >"
          @click="showArea1 = true"
          input-align="right"
        />
        <van-popup v-model="showArea1" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onNativeplace"
            @cancel="showArea1 = false"
          />
        </van-popup>
        <!-- 户口所在地 -->
        <van-field
          readonly
          clickable
          name="area"
          :value="valueResidence"
          label="户口所在地"
          placeholder="选择户口所在地 >"
          @click="showArea2 = true"
          input-align="right"
        />
        <van-popup v-model="showArea2" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onResidence"
            @cancel="showArea2 = false"
          />
        </van-popup>
      </van-form>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      formerlyName: "",
      valueNationality: "", //国籍值
      valueBirth: "", //出生地值
      valueNation: "", //民族值
      valueReligion: "", //宗教值
      valuePolitics: "", //政治面貌值
      valueNativeplace: "", //籍贯值
      valueResidence: "", //户口所在地值
      nationality: ["中国", "外国"], //国籍选择器值
      nation: ["汉族", "少数民族"], //民族选择器值
      Religion: ["佛教", "道教", "其他宗教"], //宗教选择器值
      Politics: ["党员", "团员", "群众"], //政治面貌选择器值
      showNationality: false, //国籍框显示
      showNation: false, //民族框显示
      showReligion: false, //宗教框显示
      showPolitics: false, //政治面貌框显示
      showArea: false, //出生地框显示
      showArea1: false, //籍贯框显示
      showArea2: false, //户口所在地框显示
      areaList,
    };
  },
  mounted() {},
  methods: {
    onNationality(value) {
      //国籍
      this.valueNationality = value;
      this.showNationality = false;
    },
    onBirth(values) {
      //出生地
      this.valueBirth = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onNation(value) {
      //民族
      this.valueNation = value;
      this.showNation = false;
    },
    onReligion(value) {
      //宗教
      this.valueReligion = value;
      this.showReligion = false;
    },
    onPolitics(value) {
      //政治面貌
      this.valuePolitics = value;
      this.showPolitics = false;
    },
    onNativeplace(values) {
      //籍贯
      this.valueNativeplace = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea1 = false;
    },
    onResidence(values) {
      //户口所在地
      this.valueResidence = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea2 = false;
    },
  },
};
</script>

<style scoped>
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
.block2 {
  margin: 15px auto 0;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 8px;
}
</style>
