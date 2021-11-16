<template>
  <div class="content">
    <div class="form_box">
      <van-form
        @submit="onSubmit"
        error-message-align="right"
        @scrollToField="scrollToField"
      >
        <div class="form1_box">
          <div class="form1">
            <!-- 曾用名 -->
            <van-field
              v-model="info.formerlyName"
              name="曾用名"
              label="曾用名"
              placeholder="没有填'无'"
              input-align="right"
              :rules="[{ required: true, message: '请填写曾用名' }]"
            />
            <!-- 国籍 -->
            <van-field
              readonly
              clickable
              name="国籍"
              :value="info.valueNationality"
              label="国籍"
              :placeholder="'选择国籍'"
              right-icon="arrow"
              @click="showNationality = true"
              input-align="right"
              :rules="[
                {
                  required: true,
                  message: '请选择国籍',
                },
              ]"
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
              name="出生地"
              :value="info.valueBirth"
              label="出生地"
              placeholder="选择省市区"
              right-icon="arrow"
              @click="showArea = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择出生地' }]"
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
              name="民族"
              :value="info.valueNation"
              label="民族"
              placeholder="选择民族"
              right-icon="arrow"
              @click="showNation = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择民族' }]"
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
              name="宗教"
              :value="info.valueReligion"
              label="宗教"
              placeholder="选择宗教"
              right-icon="arrow"
              @click="showReligion = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择宗教' }]"
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
              name="政治面貌"
              :value="info.valuePolitics"
              label="政治面貌"
              placeholder="选择政治面貌"
              right-icon="arrow"
              @click="showPolitics = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择政治面貌' }]"
            />
            <van-popup v-model="showPolitics" position="bottom">
              <van-picker
                show-toolbar
                :columns="Politics"
                @confirm="onPolitics"
                @cancel="showPolitics = false"
              />
            </van-popup>
            <!-- 入党时间 -->
            <van-field
              v-if="isshowdy"
              readonly
              clickable
              name="入党时间"
              :value="info.valueJoinTime"
              label="入党时间"
              placeholder="选择时间"
              right-icon="arrow"
              @click="showCalendar = true"
              input-align="right"
            />
            <van-calendar
              :min-date="minDate"
              :max-date="maxDate"
              v-model="showCalendar"
              @confirm="onConfirm"
            />
            <!-- 介绍人 -->
            <van-field
              v-if="isshowdy"
              clickable
              name="介绍人"
              v-model="info.valueReligionP"
              label="介绍人"
              placeholder="介绍人姓名"
              input-align="right"
              :rules="[{ required: true, message: '请填写介绍人姓名' }]"
            />
            <!-- 籍贯 -->
            <van-field
              readonly
              clickable
              name="籍贯"
              :value="info.valueNativeplace"
              label="籍贯"
              placeholder="选择籍贯"
              right-icon="arrow"
              @click="showArea1 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择籍贯' }]"
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
              name="户口所在地"
              :value="info.valueResidence"
              label="户口所在地"
              placeholder="选择户口所在地"
              right-icon="arrow"
              @click="showArea2 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择户口所在地' }]"
            />
            <van-popup v-model="showArea2" position="bottom">
              <van-area
                :area-list="areaList"
                @confirm="onResidence"
                @cancel="showArea2 = false"
              />
            </van-popup>
            <!-- 户口性质 -->
            <div class="hkxz flex-row">
              <div
                :class="item.checked ? 'hkxz_box_t' : 'hkxz_box_f'"
                v-for="(item, index) in arr"
                :key="index"
                @click="changehkxz(item, index)"
              >
                <span>{{ item.name }}</span>
              </div>
            </div>
            <van-field
              readonly
              clickable
              name="户口性质"
              :value="info.valueResidencexz"
              label="户口性质"
              placeholder=""
              input-align="right"
              :rules="[{ required: true, message: '请选择户口性质' }]"
            />

            <!-- 生源地 -->
            <van-field
              readonly
              clickable
              name="生源地"
              :value="info.valueStudents"
              label="生源地"
              placeholder="选择生源地"
              right-icon="arrow"
              @click="showArea3 = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择生源地' }]"
            />
            <van-popup v-model="showArea3" position="bottom">
              <van-area
                :area-list="areaList"
                @confirm="onStudents"
                @cancel="showArea3 = false"
              />
            </van-popup>
          </div>
        </div>
        <div class="form2_box">
          <div class="form2">
            <!-- 健康状况 -->
            <van-field
              readonly
              clickable
              name="健康状况"
              :value="info.valueHealthy"
              label="健康状况"
              placeholder="选择健康状况"
              right-icon="arrow"
              @click="showHealthy = true"
              input-align="right"
              :rules="[{ required: true, message: '请选择健康状况' }]"
            />
            <van-popup v-model="showHealthy" position="bottom">
              <van-picker
                show-toolbar
                :columns="Healthy"
                @confirm="onHealthy"
                @cancel="showHealthy = false"
              />
            </van-popup>
            <!-- 血型 -->
            <div class="xx flex-row">
              <div
                :class="item.checked ? 'xx_box_t' : 'xx_box_f'"
                v-for="(item, index) in blood"
                :key="index"
                @click="changexx(item, index)"
              >
                <span>{{ item.name }}</span>
              </div>
            </div>
            <van-field
              readonly
              clickable
              name="血型"
              :value="info.valueblood"
              label="血型"
              placeholder=""
              input-align="right"
              :rules="[{ required: true, message: '请选择血型' }]"
            />
            <!-- 农行卡号 -->
            <van-field
              v-model="info.bankNum"
              name="农行账户"
              label="农行账户"
              placeholder="填写银行卡号"
              input-align="right"
              :rules="[
                { required: true, message: '请填写银行卡号' },
                {
                  pattern: /^([1-9]{1})(\d{14}|\d{18})$/,
                  message: '请填写正确的银行卡号',
                },
              ]"
            />
          </div>
        </div>

        <div class="form3_box">
          <div class="form3">
            <van-field
              name="一寸照"
              label="照片用于学生登记表，请上传本人正面、免冠、一寸照片一张！"
              class="form3_1"
              :rules="[{ required: true, message: '请上传图片' }]"
            >
              <template #input>
                <van-uploader v-model="uploader">
                  <div class="upload_chose flex-row">
                    <div class="upload_chose_icon">+</div>
                    <div class="upload_chose_w">上传</div>
                  </div>
                </van-uploader>
              </template>
            </van-field>
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
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2021, 12, 31),
      isshowdy: false,
      info: {
        formerlyName: "", //曾用名
        valueNationality: "", //国籍值
        valueBirth: "", //出生地值
        valueNation: "", //民族值
        valueReligion: "", //宗教值
        valuePolitics: "", //政治面貌值
        valueJoinTime: "", //入党时间值
        valueReligionP: "", //介绍人宗教值
        valueNativeplace: "", //籍贯值
        valueResidence: "", //户口所在地值
        valueResidencexz: "", //户口性质值
        valueStudents: "", //生源地值
        valueHealthy: "", //健康状况值
        valueblood: "", //血型值
        bankNum: "", //银行卡号
      },
      nationality: ["中国", "外国"], //国籍选择器值
      nation: [
        "汉族",
        "壮族",
        "满族",
        "回族",
        "苗族",
        "维吾尔族",
        "土家族",
        "彝族",
        "蒙古族",
        "藏族",
        "布依族",
        "侗族",
        "瑶族",
        "朝鲜族",
        "白族",
        "哈尼族",
        "哈萨克族",
        "黎族",
        "傣族",
        "畲族",
        "傈僳族",
        "仡佬族",
        "东乡族",
        "高山族",
        "拉祜族",
        "水族",
        "佤族",
        "纳西族",
        "羌族",
        "土族",
        "仫佬族",
        "锡伯族",
        "柯尔克孜族",
        "达斡尔族",
        "景颇族",
        "毛南族",
        "撒拉族",
        "布朗族",
        "塔吉克族",
        "阿昌族",
        "普米族",
        "鄂温克族",
        "怒族",
        "京族",
        "基诺族",
        "德昂族",
        "保安族",
        "俄罗斯族",
        "裕固族",
        "乌孜别克族",
        "门巴族",
        "鄂伦春族",
        "独龙族",
        "塔塔尔族",
        "赫哲族",
        "珞巴族",
      ], //民族选择器值
      Religion: ["佛教", "道教", "其他宗教"], //宗教选择器值
      Politics: ["党员", "团员", "群众"], //政治面貌选择器值
      Healthy: ["健康", "亚健康", "危险"], //健康状况选择器值
      showNationality: false, //国籍框显示
      showNation: false, //民族框显示
      showReligion: false, //宗教框显示
      showPolitics: false, //政治面貌框显示
      showCalendar: false, //入党时间框显示
      showHealthy: false, //健康状况显示
      showArea: false, //出生地框显示
      showArea1: false, //籍贯框显示
      showArea2: false, //户口所在地框显示
      showArea3: false, //生源地框显示
      arr: [
        {
          name: "其他户口",
          checked: false,
        },
        {
          name: "农村户口",
          checked: false,
        },
        {
          name: "城镇户口",
          checked: false,
        },
      ],
      blood: [
        {
          name: "A型",
          checked: false,
        },
        {
          name: "B型",
          checked: false,
        },
        {
          name: "AB型",
          checked: false,
        },
        {
          name: "O型",
          checked: false,
        },
        {
          name: "未知",
          checked: false,
        },
      ],
      areaList,
      uploader: [],
    };
  },
  mounted() {},
  methods: {
    scrollToField(value) {
      console.log(value);
    },
    goback() {
      this.$router.push({
        path: "/",
      });
    },
    showArr() {
      console.log(sessionStorage.getItem("testKey"));
    },
    onNationality(value) {
      //国籍
      this.info.valueNationality = value;
      this.showNationality = false;
    },
    onBirth(values) {
      //出生地
      this.info.valueBirth = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea = false;
    },
    onNation(value) {
      //民族
      this.info.valueNation = value;
      this.showNation = false;
    },
    onReligion(value) {
      //宗教
      this.info.valueReligion = value;
      this.showReligion = false;
    },
    onPolitics(value) {
      //政治面貌
      this.info.valuePolitics = value;
      this.showPolitics = false;
      if (this.info.valuePolitics == "党员") {
        this.isshowdy = true;
      } else {
        this.isshowdy = false;
      }
    },
    onConfirm(date) {
      //入党时间
      console.log(date);
      this.info.valueJoinTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      this.showCalendar = false;
    },
    onNativeplace(values) {
      //籍贯
      this.info.valueNativeplace = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea1 = false;
    },
    onResidence(values) {
      //户口所在地
      this.info.valueResidence = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea2 = false;
    },
    changehkxz(item, index) {
      //户口类型
      for (var i in this.arr) {
        if (i == index) {
          this.arr[i].checked = true;
          this.info.valueResidencexz = item.name;
        } else {
          this.arr[i].checked = false;
        }
      }
    },
    onStudents(values) {
      //生源地
      this.info.valueStudents = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.showArea3 = false;
    },
    onHealthy(value) {
      //健康状况
      this.info.valueHealthy = value;
      this.showHealthy = false;
    },
    changexx(item, index) {
      //血型
      for (var i in this.blood) {
        if (i == index) {
          this.blood[i].checked = true;
          this.info.valueblood = item.name;
        } else {
          this.blood[i].checked = false;
        }
      }
    },
    onSubmit(values) {
      let data = JSON.parse(sessionStorage.getItem("data"));
      console.log(data)
      data.[0]=false;
      console.log(data)
      sessionStorage.setItem("data", JSON.stringify(data));
      for (var i in values) {
        console.log(values[i]);
        if (values[i] == "") {
          Toast("表单未填写完整");
          break;
        }
      }
      this.$router.push({
        path: "/submitSuccess",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
.hkxz {
  z-index: 999;
  width: 230px;
  height: 0;
  position: relative;
  top: 13px;
  left: 94px;
  font-size: 14px;
}
.hkxz_box_f {
  margin-right: 10px;
  width: 68px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #4c96d9;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  color: #4c96d9;
}
.hkxz_box_t {
  margin-right: 10px;
  width: 70px;
  height: 30px;
  background: #4c96d9;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
}

.form2_box {
  margin: 15px auto 0;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
}
.form2 {
  width: 96%;
  margin-left: 2%;
}
.xx {
  z-index: 999;
  width: 250px;
  height: 0;
  position: relative;
  top: 13px;
  left: 74px;
  font-size: 14px;
}
.xx_box_f {
  margin-right: 10px;
  width: 43px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #4c96d9;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  color: #4c96d9;
}
.xx_box_t {
  margin-right: 10px;
  width: 45px;
  height: 30px;
  background: #4c96d9;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
}

.form3_box {
  margin: 15px auto 0;
  width: 345px;
  background: #ffffff;
  opacity: 1;
  border-radius: 10px;
}
.form3 {
  width: 96%;
  margin-left: 2%;
}
.form3_1 {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #4c96d9 !important;
}
.upload_chose {
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-size: 20px;
  line-height: 16px;
}
.upload_chose_w {
  font-size: 12px;
  color: #4c96d9;
}

::v-deep .van-field__label {
  color: unset;
}

::v-deep .van-uploader__preview-image {
  margin-top: 10px;
  width: 105px;
  height: 105px;
}
::v-deep .van-uploader__preview-delete {
  top: 2px;
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
::v-deep .van-cell {
  font-size: 15px;
  padding: 16px 16px;
}
::v-deep .van-field__right-icon {
  color: #c8c8c8;
}
</style>
