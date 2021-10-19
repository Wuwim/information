<template>
  <div class="content">
    <div class="block1 flex-row">
      <div class="goback-box">
        <img class="goback" src="../img/goback.png" alt="" />
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
            {{ item.ok ? "√" : item.title }}
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
      <form action="">
        <div class="form1-box">
          <div class="form1_title">{{ "成员" + several }}</div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 亲属名字 -->
            <div class="item_box flex-row">
              <div class="item_title">亲属名字</div>
              <div class="item_content">
                <input
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="填写名字"
                  v-model="allMessage[several - 1].relativeName"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>

          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 性别 -->
            <div class="item_box flex-row">
              <div class="item_title">性别</div>
              <div class="item_content">
                <input
                  style="display: none"
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="填写性别"
                  v-model="allMessage[several - 1].gender"
                />
                <div class="flex-row">
                  <div
                    @click="choseSex(item, index)"
                    class="sex"
                    :class="item.checked ? 'checkSex' : ''"
                    v-for="(item, index) in gender"
                    :key="index + '1'"
                  >
                    {{ item.gender }}
                  </div>
                </div>
              </div>
            </div>
            <div class="fgx"></div>
          </div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 出生日期 -->
            <div class="item_box flex-row">
              <div class="item_title">出生日期</div>
              <div class="item_content">
                <input
                  readonly="readonly"
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
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

          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 年龄 -->
            <div class="item_box flex-row">
              <div class="item_title">年龄</div>
              <div class="item_content">
                <input
                  readonly="readonly"
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="通过出生日期获取"
                  v-model="allMessage[several - 1].age"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 与本人关系 -->
            <div class="item_box flex-row">
              <div class="item_title">与本人关系</div>
              <div class="item_content">
                <input
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="如：父女、姐妹等"
                  v-model="allMessage[several - 1].relationship"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>

          <div :class="isErrorjtdz ? 'form1' : ''">
            <!-- 现在何地 -->
            <div class="item_box flex-row">
              <div class="item_title">现在何地</div>
              <div class="item_content">
                <input
                  readonly="readonly"
                  class="item_input"
                  :class="isErrorjtdz ? 'error_color' : ''"
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
              :class="isErrorjtdz ? 'error_color' : ''"
              class="homeAddress"
              placeholder="详细地址至街道门牌、楼层房间等
详细地址至街道门牌、楼层房间等"
              v-model="allMessage[several - 1].addressDetail"
            />
            <div class="fgx"></div>
          </div>

          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 工作(学习)单位 -->
            <div class="item_box1 flex-col">
              <div class="item_title">工作(学习)单位</div>
              <div class="item_content">
                <input
                  class="item_input1"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="填写亲属工作单位"
                  v-model="allMessage[several - 1].workUnit"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 职业 -->
            <div class="item_box flex-row">
              <div class="item_title">职业</div>
              <div class="item_content">
                <input
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="填写亲属职业"
                  v-model="allMessage[several - 1].occupation"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 年收入 -->
            <div class="item_box flex-row">
              <div class="item_title">年收入</div>
              <div class="item_content">
                <input
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
                  type="text"
                  placeholder="填写亲属年收入"
                  v-model="allMessage[several - 1].annualIncome"
                />
              </div>
            </div>
            <div class="fgx"></div>
          </div>
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 健康状况 -->
            <div class="item_box flex-row">
              <div class="item_title">健康状况</div>
              <div class="item_content">
                <input
                  readonly="readonly"
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
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
          <div :class="isErrorjtdh ? 'form1' : ''">
            <!-- 联系电话 -->
            <div class="item_box flex-row">
              <div class="item_title">联系电话</div>
              <div class="item_content">
                <input
                  class="item_input"
                  :class="isErrorjtdh ? 'error_color' : ''"
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
          <button class="btn" @click="checkForm">保存并填写下一个</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
// import { Toast } from "vant";
export default {
  data() {
    return {
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2010, 10, 1),
      number: 0,
      several: 1,
      aa: {
        title: 1,
        peopleName: "成员",
        isOk: false,
        isChecked: false,
      },
      familyNum: [],
      allMessage: [],
      isShowError: false,
      isErrorjtdh: false,
      isErrorjtdz: false,
      isErrorjhr: false,
      isErrorjhr1: false,
      errorText: "",

      showCalendar: false, //显示时间框
      showArea: false, //显示地区框
      showHealthy: false, //显示健康框
      areaList,
      gender: [
        { gender: "男", checked: false },
        { gender: "女", checked: false },
      ],
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

      for (var j = 0; j < this.number; j++) {
        this.allMessage.push({
          relativeName: "",
          peopleSex: "",
          birthday: "",
          age: "",
          relationship: "",
          homeAddress: "",
          addressDetail: "",
          workUnit: "",
          occupation: "",
          annualIncome: "",
          health: "",
          contactNumber: "",
        });
      }
      console.log(this.allMessage);
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
      for (var i in this.gender) {
        if (i == index) {
          this.gender[i].checked = true;
          this.peopleSex = item.gender;
          console.log(this.peopleSex);
        } else {
          this.gender[i].checked = false;
        }
      }
    },
    showtime(date) {
      //出生日期
      // console.log(date);
      this.birthday = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.age = 2021 - date.getFullYear();
      this.showCalendar = false;
    },

    onpostalAddress(values) {
      //出生地
      this.homeAddress = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onHealthy(value) {
      //宗教
      this.health = value;
      this.showHealthy = false;
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
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(this.homePhone)) {
        this.errorText = "手机号码有误，请重新输入";
        this.isShowError = true;
        this.isErrorjhr1 = true;
        return;
      } else {
        this.errorText = "";
        this.isShowError = false;
        this.isErrorjhr1 = false;
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
