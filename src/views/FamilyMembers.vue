<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" @click="goback" />
      </div>
      <div class="block1-w-box">
        <span class="block1-w">基础信息</span>
      </div>
    </div>
    <div class="scorll_box flex-row">
      <div
        class="scorll flex-col"
        v-for="(item, index) in familyNum"
        :key="index"
        @click="checked(index)"
      >
        <div class="scorll_top flex-row">
          <div
            class="scorll_title"
            :class="item.isOk ? 'scorll_title_w' : 'scorll_title_w1'"
          >
            {{ item.isOk ? "&#10004" : item.title }}
          </div>
          <div class="scorll_body">{{ item.peopleName }}</div>
        </div>
        <div class="scorll_bottom" v-show="item.isChecked"></div>
      </div>
    </div>
    <div class="error flex-row" v-show="isShowError">
      <img class="error_voice" src="../img/voice.png" alt="" />
      <span class="error_w">{{ errorText }}</span>
    </div>
    <div class="form-box">
      <!-- @submit="checkForm" -->
      <!-- <form action=""> -->
      <div class="form1-box">
        <div class="form1_title">{{ "成员" + several }}</div>
        <div :class="isErrorRelativeName ? 'form1' : ''">
          <!-- 亲属名字 -->
          <div class="item_box flex-row">
            <div class="item_title">亲属名字</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorRelativeName ? 'error_color' : ''"
                type="text"
                placeholder="填写名字"
                v-model="allMessage[several - 1].relativeName"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorPeopleSex ? 'form1' : ''">
          <!-- 性别 -->
          <div class="item_box flex-row">
            <div class="item_title">性别</div>
            <div class="item_content">
              <input
                style="display: none"
                class="item_input"
                :class="isErrorPeopleSex ? 'error_color' : ''"
                type="text"
                placeholder="填写性别"
                v-model="allMessage[several - 1].gender"
              />
              <div class="flex-row">
                <div
                  @click="choseSex(item, index)"
                  class="sex"
                  :class="item.checked ? 'checkSex' : ''"
                  v-for="(item, index) in gender[several - 1]"
                  :key="index + '1'"
                >
                  {{ item.gender }}
                </div>
              </div>
            </div>
          </div>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorBirthday ? 'form1' : ''">
          <!-- 出生日期 -->
          <div class="item_box flex-row">
            <div class="item_title">出生日期</div>
            <div class="item_content">
              <input
                readonly="readonly"
                class="item_input"
                :class="isErrorBirthday ? 'error_color' : ''"
                type="text"
                placeholder="选择年月日 >"
                v-model="allMessage[several - 1].birthday"
                @click="showCalendar = true"
              />
            </div>
          </div>
          <!-- 日期弹框 -->
          <van-popup
            v-model="showCalendar"
            position="bottom"
            :style="{ height: '50%' }"
          >
            <van-datetime-picker
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="showtime"
            />
          </van-popup>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorBirthday ? 'form1' : ''">
          <!-- 年龄 -->
          <div class="item_box flex-row">
            <div class="item_title">年龄</div>
            <div class="item_content">
              <input
                readonly="readonly"
                class="item_input"
                :class="isErrorBirthday ? 'error_color' : ''"
                type="text"
                placeholder="通过出生日期获取"
                v-model="allMessage[several - 1].age"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorRelationship ? 'form1' : ''">
          <!-- 与本人关系 -->
          <div class="item_box flex-row">
            <div class="item_title">与本人关系</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorRelationship ? 'error_color' : ''"
                type="text"
                placeholder="如：父女、姐妹等"
                v-model="allMessage[several - 1].relationship"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>

        <div :class="isErrorHomeAddress ? 'form1' : ''">
          <!-- 现在何地 -->
          <div class="item_box flex-row">
            <div class="item_title">现在何地</div>
            <div class="item_content">
              <input
                readonly="readonly"
                class="item_input"
                :class="isErrorHomeAddress ? 'error_color' : ''"
                type="text"
                placeholder="选择省市区 >"
                v-model="allMessage[several - 1].homeAddress"
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
            :class="isErrorHomeAddress ? 'error_color' : ''"
            class="homeAddress"
            placeholder="详细地址至街道门牌、楼层房间等
详细地址至街道门牌、楼层房间等"
            v-model="allMessage[several - 1].addressDetail"
          />
          <div class="fgx"></div>
        </div>

        <div :class="isErrorWorkUnit ? 'form1' : ''">
          <!-- 工作(学习)单位 -->
          <div class="item_box1 flex-col">
            <div class="item_title">工作(学习)单位</div>
            <div class="item_content">
              <input
                class="item_input1"
                :class="isErrorWorkUnit ? 'error_color' : ''"
                type="text"
                placeholder="填写亲属工作单位"
                v-model="allMessage[several - 1].workUnit"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorOccupation ? 'form1' : ''">
          <!-- 职业 -->
          <div class="item_box flex-row">
            <div class="item_title">职业</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorOccupation ? 'error_color' : ''"
                type="text"
                placeholder="填写亲属职业"
                v-model="allMessage[several - 1].occupation"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorAnnualIncome ? 'form1' : ''">
          <!-- 年收入 -->
          <div class="item_box flex-row">
            <div class="item_title">年收入</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorAnnualIncome ? 'error_color' : ''"
                type="text"
                placeholder="填写亲属年收入"
                v-model="allMessage[several - 1].annualIncome"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorHealth ? 'form1' : ''">
          <!-- 健康状况 -->
          <div class="item_box flex-row">
            <div class="item_title">健康状况</div>
            <div class="item_content">
              <input
                readonly="readonly"
                class="item_input"
                :class="isErrorHealth ? 'error_color' : ''"
                type="text"
                placeholder="选择健康状况 >"
                v-model="allMessage[several - 1].health"
                @click="showHealthy = true"
              />
            </div>
          </div>
          <van-popup v-model="showHealthy" position="bottom">
            <van-picker
              show-toolbar
              :columns="Healthy"
              @confirm="onHealthy"
              @cancel="showHealthy = false"
            />
          </van-popup>
          <div class="fgx"></div>
        </div>
        <div :class="isErrorContactNumber ? 'form1' : ''">
          <!-- 联系电话 -->
          <div class="item_box flex-row">
            <div class="item_title">联系电话</div>
            <div class="item_content">
              <input
                class="item_input"
                :class="isErrorContactNumber ? 'error_color' : ''"
                type="text"
                placeholder="填写亲属电话"
                v-model="allMessage[several - 1].contactNumber"
              />
            </div>
          </div>
          <div class="fgx"></div>
        </div>
      </div>

      <!-- 提交按钮 -->
      <div class="btn_box">
        <!-- type="submit" -->
        <button class="btn" @click="checkForm" v-show="!isFinally">
          保存并填写下一个
        </button>
        <button class="btn" v-show="isFinally" @click="submit">提交</button>
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
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2021, 11, 1),
      number: 0,
      several: 1,
      isFinally: false,
      familyNum: [], //头部列表
      allMessage: [], //所有信息
      isShowError: false,
      isErrorRelativeName: false,
      isErrorPeopleSex: false,
      isErrorBirthday: false,
      isErrorRelationship: false,
      isErrorHomeAddress: false,
      isErrorWorkUnit: false,
      isErrorOccupation: false,
      isErrorAnnualIncome: false,
      isErrorHealth: false,
      isErrorContactNumber: false,
      errorText: "",

      showCalendar: false, //显示时间框
      showArea: false, //显示地区框
      showHealthy: false, //显示健康框
      areaList,
      gender: [],
      Healthy: ["健康", "亚健康", "危险"], //健康状况选择器值
    };
  },
  created() {
    let routerParams = this.$route.query.num;
    this.number = routerParams;
    this.add();
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    con() {
      console.log(this.homePhone + "2");
      console.log(this.number);
    },
    add() {
      //创造成员人数
      for (var i = 0; i < this.number; i++) {
        this.familyNum.push({
          title: i + 1,
          peopleName: "成员",
          isOk: false,
          isChecked: false,
        });
      }

      this.familyNum[0].isChecked = true;
      // 添加表单
      for (var j = 0; j < this.number; j++) {
        this.allMessage.push({
          relativeName: "", //亲属名字
          peopleSex: "", //性别
          birthday: "", //出生日期
          age: "", //年龄
          relationship: "", //与本人关系
          homeAddress: "", //现在何地
          addressDetail: "", //具体地址
          workUnit: "", //工作学习单位
          occupation: "", //职业
          annualIncome: "", //年收入
          health: "", //健康状况
          contactNumber: "", //联系电话
        });
      }
      // console.log(this.allMessage);
      // 添加性别框
      for (var k = 0; k < this.number; k++) {
        this.gender.push([
          { gender: "男", checked: false },
          { gender: "女", checked: false },
        ]);
      }
      console.log(this.gender);
    },
    checked(index) {
      //选中成员
      for (var i in this.familyNum) {
        if (i == index) {
          this.familyNum[i].isChecked = true;
        } else {
          this.familyNum[i].isChecked = false;
        }
      }
      this.several = index + 1;
    },
    choseSex(item, index) {
      //选中性别
      for (var i in this.gender[this.several - 1]) {
        if (i == index) {
          this.gender[this.several - 1][i].checked = true;
          // console.log(this.gender[this.several - 1][i].checked);
          this.allMessage[this.several - 1].peopleSex = item.gender;
          // console.log(this.allMessage[this.several - 1].peopleSex);
        } else {
          this.gender[this.several - 1][i].checked = false;
        }
      }
    },
    showtime(date) {
      //出生日期
      // console.log(date);
      this.allMessage[this.several - 1].birthday = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      this.allMessage[this.several - 1].age = 2021 - date.getFullYear();
      this.showCalendar = false;
    },

    onpostalAddress(values) {
      //出生地
      this.allMessage[this.several - 1].homeAddress = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onHealthy(value) {
      //健康状况
      this.allMessage[this.several - 1].health = value;
      this.showHealthy = false;
    },
    checkForm() {
      console.log();
      if (this.allMessage[this.several - 1].relativeName == "") {
        this.errorText = "亲属名字不能为空";
        this.isShowError = true;
        this.isErrorRelativeName = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorRelativeName = false;
      }

      if (this.allMessage[this.several - 1].peopleSex == "") {
        this.errorText = "请选择性别";
        this.isShowError = true;
        this.isErrorPeopleSex = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorPeopleSex = false;
      }

      if (this.allMessage[this.several - 1].birthday == "") {
        this.errorText = "请填写出生日期";
        this.isShowError = true;
        this.isErrorBirthday = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorBirthday = false;
      }

      if (this.allMessage[this.several - 1].relationship == "") {
        this.errorText = "与本人关系不能为空";
        this.isShowError = true;
        this.isErrorRelationship = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorRelationship = false;
      }

      if (this.allMessage[this.several - 1].homeAddress == "") {
        this.errorText = "请选择地点";
        this.isShowError = true;
        this.isErrorHomeAddress = true;
        return;
      } else if (this.allMessage[this.several - 1].addressDetail.length < 10) {
        this.errorText = "地址可以写的更详细点";
        this.isShowError = true;
        this.isErrorHomeAddress = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorHomeAddress = false;
      }

      if (this.allMessage[this.several - 1].workUnit == "") {
        this.errorText = "工作(学习)单位不能为空";
        this.isShowError = true;
        this.isErrorWorkUnit = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorWorkUnit = false;
      }

      if (this.allMessage[this.several - 1].occupation == "") {
        this.errorText = "职业不能为空";
        this.isShowError = true;
        this.isErrorOccupation = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorOccupation = false;
      }

      if (this.allMessage[this.several - 1].annualIncome == "") {
        this.errorText = "请填写年收入";
        this.isShowError = true;
        this.isErrorAnnualIncome = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorAnnualIncome = false;
      }

      if (this.allMessage[this.several - 1].health == "") {
        this.errorText = "请选择健康状况";
        this.isShowError = true;
        this.isErrorHealth = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorHealth = false;
      }

      if (this.allMessage[this.several - 1].contactNumber == "") {
        this.errorText = "联系电话不能为空";
        this.isShowError = true;
        this.isErrorContactNumber = true;
        return;
      } else if (
        !/^1(3|4|5|7|8)\d{9}$/.test(
          this.allMessage[this.several - 1].contactNumber
        )
      ) {
        this.errorText = "请输入正确的电话号码";
        this.isShowError = true;
        this.isErrorContactNumber = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorContactNumber = false;
      }

      this.familyNum[this.several - 1].peopleName =
        this.allMessage[this.several - 1].relativeName;

      this.familyNum[this.several - 1].isOk = true;
      console.log(this.several);
      if (this.several < this.number) {
        this.checked(this.several);
      } else {
        this.isFinally = true;
      }

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
    submit() {
      sessionStorage.setItem("FamilyMembers", true);
      this.$router.push({
        path: "/SubmitSuccess",
      });
      console.log(111);
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
  width: 130px;
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
}
.item_input1 {
  margin-top: 20px;
  padding: 0;
  width: 100%;
  border: none;
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
