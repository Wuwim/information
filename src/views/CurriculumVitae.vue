<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback_box">
        <img class="goback" @click="goback" src="../img/goback.png" alt="" />
      </div>
      <div class="block1_w_box">
        <span class="block1_w">个人简历</span>
      </div>
    </div>
    <div class="form_box">
      <van-form @submit="onSubmit" error-message-align="right">
        <div class="form1_box">
          <div class="form1">
            <div class="form1_title">小学</div>
            <!-- 就读学校 -->
            <van-field
              v-model="primarySchool"
              name="小学就读学校"
              label="就读学校"
              placeholder="填写就读学校"
              input-align="right"
              :rules="[{ required: true, message: '请填写就读学校' }]"
            />
            <!-- 开始时间 -->
            <van-field
              readonly
              clickable
              name="小学开始时间"
              :value="valueprimarySchoolStartTime"
              label="开始时间"
              placeholder="选择时间 >"
              @click="showCalendar = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择开始时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar"
              @confirm="changePsSt"
            />
            <!-- 结束时间 -->
            <van-field
              readonly
              clickable
              name="小学结束时间"
              :value="valueprimarySchoolEndTime"
              label="结束时间"
              placeholder="选择时间 >"
              @click="showCalendar1 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择结束时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar1"
              @confirm="changePsEt"
            />
            <!-- 担任职务 -->
            <div class="block_title">担任职务</div>
            <van-field
              v-model="primarySchoolJob"
              name="小学担任职务"
              type="textarea"
              placeholder="填写你担任过的职务"
              autosize
            />
            <!-- 证明人 -->
            <van-field
              v-model="primarySchoolWitness"
              name="小学证明人"
              label="证明人"
              placeholder="填写证明人姓名"
              input-align="right"
              :rules="[{ required: true, message: '请填写证明人姓名' }]"
            />
            <!-- 小学奖励 -->
            <div class="block_title">何时何处何原因受过何种奖励</div>
            <van-field
              v-model="primarySchoolReward"
              name="小学奖励"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种奖励"
              autosize
            />
            <!-- 小学处分 -->
            <div class="block_title">何时何处何原因受过何种处分</div>
            <van-field
              v-model="primarySchoolPunishment"
              name="小学处分"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种处分"
              autosize
            />
          </div>
        </div>
        <div class="form1_box">
          <div class="form1">
            <div class="form1_title">初中</div>
            <!-- 就读学校 -->
            <van-field
              v-model="juniorMiddleSchool"
              name="初中就读学校"
              label="就读学校"
              placeholder="填写就读学校"
              input-align="right"
              :rules="[{ required: true, message: '请填写就读学校' }]"
            />
            <!-- 开始时间 -->
            <van-field
              readonly
              clickable
              name="初中开始时间"
              :value="valuejuniorMiddleSchoolStartTime"
              label="开始时间"
              placeholder="选择时间 >"
              @click="showCalendar2 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择开始时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar2"
              @confirm="changeJmsSt"
            />
            <!-- 结束时间 -->
            <van-field
              readonly
              clickable
              name="初中结束时间"
              :value="valuejuniorMiddleSchoolEndTime"
              label="结束时间"
              placeholder="选择时间 >"
              @click="showCalendar3 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择结束时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar3"
              @confirm="changeJmsEt"
            />
            <!-- 担任职务 -->
            <div class="block_title">担任职务</div>
            <van-field
              v-model="juniorMiddleSchoolJob"
              name="初中担任职务"
              type="textarea"
              placeholder="填写你担任过的职务"
              autosize
            />
            <!-- 证明人 -->
            <van-field
              v-model="juniorMiddleSchoolWitness"
              name="初中证明人"
              label="证明人"
              placeholder="填写证明人姓名"
              input-align="right"
              :rules="[{ required: true, message: '请填写证明人姓名' }]"
            />
            <!-- 初中奖励 -->
            <div class="block_title">何时何处何原因受过何种奖励</div>
            <van-field
              v-model="juniorMiddleSchoolReward"
              name="初中奖励"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种奖励"
              autosize
            />
            <!-- 初中处分 -->
            <div class="block_title">何时何处何原因受过何种处分</div>
            <van-field
              v-model="juniorMiddleSchoolPunishment"
              name="初中处分"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种处分"
              autosize
            />
          </div>
        </div>
        <div class="form1_box">
          <div class="form1">
            <div class="form1_title">高中</div>
            <!-- 就读学校 -->
            <van-field
              v-model="highSchool"
              name="高中就读学校"
              label="就读学校"
              placeholder="填写就读学校"
              input-align="right"
              :rules="[{ required: true, message: '请填写就读学校' }]"
            />
            <!-- 开始时间 -->
            <van-field
              readonly
              clickable
              name="高中开始时间"
              :value="valuehighSchoolStartTime"
              label="开始时间"
              placeholder="选择时间 >"
              @click="showCalendar4 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择开始时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar4"
              @confirm="changeHsSt"
            />
            <!-- 结束时间 -->
            <van-field
              readonly
              clickable
              name="高中结束时间"
              :value="valuehighSchoolEndTime"
              label="结束时间"
              placeholder="选择时间 >"
              @click="showCalendar5 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择结束时间' }]"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar5"
              @confirm="changeHsEt"
            />
            <!-- 担任职务 -->
            <div class="block_title">担任职务</div>
            <van-field
              v-model="highSchoolJob"
              name="高中担任职务"
              type="textarea"
              placeholder="填写你担任过的职务"
              autosize
            />
            <!-- 证明人 -->
            <van-field
              v-model="highSchoolWitness"
              name="高中证明人"
              label="证明人"
              placeholder="填写证明人姓名"
              input-align="right"
              :rules="[{ required: true, message: '请填写证明人姓名' }]"
            />
            <!-- 高中奖励 -->
            <div class="block_title">何时何处何原因受过何种奖励</div>
            <van-field
              v-model="highSchoolReward"
              name="高中奖励"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种奖励"
              autosize
            />
            <!-- 高中处分 -->
            <div class="block_title">何时何处何原因受过何种处分</div>
            <van-field
              v-model="highSchoolPunishment"
              name="高中处分"
              type="textarea"
              placeholder="详细填写你曾何时何处何原因受过何种处分"
              autosize
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
export default {
  data() {
    return {
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2021, 12, 31),
      primarySchool: "", //小学
      valueprimarySchoolStartTime: "", //小学开始时间值
      valueprimarySchoolEndTime: "", //小学结束时间值
      primarySchoolJob: "", //小学担任职务
      primarySchoolWitness: "", //小学证明人
      primarySchoolReward: "", //小学奖励
      primarySchoolPunishment: "", //小学处分
      juniorMiddleSchool: "", //初中
      valuejuniorMiddleSchoolStartTime: "", //初中开始时间值
      valuejuniorMiddleSchoolEndTime: "", //初中结束时间值
      juniorMiddleSchoolJob: "", //初中担任职务
      juniorMiddleSchoolWitness: "", //初中证明人
      juniorMiddleSchoolReward: "", //初中奖励
      juniorMiddleSchoolPunishment: "", //初中处分
      highSchool: "", //高中
      valuehighSchoolStartTime: "", //高中开始时间值
      valuehighSchoolEndTime: "", //高中结束时间值
      highSchoolJob: "", //高中担任职务
      highSchoolWitness: "", //高中证明人
      highSchoolReward: "", //高中奖励
      highSchoolPunishment: "", //高中处分
      showCalendar: false, //小学开始时间框显示
      showCalendar1: false, //小学结束时间框显示
      showCalendar2: false, //初中开始时间框显示
      showCalendar3: false, //初中结束时间框显示
      showCalendar4: false, //高中开始时间框显示
      showCalendar5: false, //高中结束时间框显示
    };
  },
  mounted() {},
  methods: {
    goback() {
      //返回上一级
      this.$router.push({
        path: "/",
      });
    },
    changePsSt(date) {
      //小学入学时间
      // console.log(date);
      this.valueprimarySchoolStartTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar = false;
    },
    changePsEt(date) {
      //小学结束时间
      // console.log(date);
      this.valueprimarySchoolEndTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar1 = false;
    },
    changeJmsSt(date) {
      //初中入学时间
      // console.log(date);
      this.valuejuniorMiddleSchoolStartTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar2 = false;
    },
    changeJmsEt(date) {
      //初中结束时间
      // console.log(date);
      this.valuejuniorMiddleSchoolEndTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar3 = false;
    },
    changeHsSt(date) {
      //高中入学时间
      // console.log(date);
      this.valuehighSchoolStartTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar4 = false;
    },
    changeHsEt(date) {
      //高中结束时间
      // console.log(date);
      this.valuehighSchoolEndTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar5 = false;
    },

    onSubmit(values) {
      let data = JSON.parse(sessionStorage.getItem("data"));
      console.log(data);
      data[2] = false;
      console.log(data);
      sessionStorage.setItem("data", JSON.stringify(data));
      this.$router.push({
        path: "/submitSuccess",
      });
      console.log(values);
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
  border-radius: 8px;
}
.form1 {
  width: 100%;
  // margin-left: 2%;
  border-radius: 8px;
  padding-bottom: 8px;
}
.form1_title {
  width: 345px;
  height: 42px;
  background: linear-gradient(180deg, #4c97d9 0%, #4cbfb8 100%);
  opacity: 1;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  font-size: 17px;
  color: #ffffff;
  line-height: 42px;
}
.block_title {
  margin-top: 10px;
  margin-left: 16px;
  font-size: 15px;
  color: #4a4a4a;
}
.fgx {
  height: 15px;
  padding-top: 50px;
}

.form4 {
  margin-top: 15px;
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
  // width: auto;
  font-size: 15px;
  color: #4a4a4a;
}
::v-deep .van-cell {
  font-size: 15px;
  padding: 16px 15px;
}
</style>
