<template>
  <div class="content">
    <div class="block1 flex-col">
      <div class="block1_1 flex-row">
        <div class="block1_1_img">
          <img
            class="block1_1_img"
            :src="message.img"
            alt=""
            @click="showArr"
          />
        </div>
        <div class="block1_1_w flex-col">
          <div class="block1_1_w1">
            <span>{{ message.name }}</span>
          </div>
          <div class="block1_1_w2 flex-row">
            <span class="block1_1_w2_1">NO.{{ message.sno }}</span>
          </div>
        </div>
        <div class="block1_1_img1">
          <img class="block1_1_img1_1" src="../img/girl.png" alt="" />
        </div>
      </div>
      <div class="block1_2 flex-col">
        <span class="block1_2_1">{{ message.class }}</span>
        <span class="block1_2_2">{{ message.college }}</span>
      </div>
    </div>
    <div class="block2 flex-row">
      <div class="block2_right flex-col">
        <div class="flex-row jbxx" :class="arr[0] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">基础信息</span>
            <span class="block2_right_w2">Basic information</span>
          </div>
          <button
            class="block2_right_btn"
            :class="arr[0] == true ? '' : 'btywc'"
            @click="goBasicInformation()"
          >
            {{ arr[0] == true ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="dashed-box">
          <div
            class="dashed"
            :class="arr[0] == true ? '' : 'dashed_true'"
          ></div>
        </div>
        <div class="flex-row jbxx" :class="arr[1] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">个人联系信息</span>
            <span class="block2_right_w2">Personal contact information</span>
          </div>
          <button
            class="block2_right_btn"
            :class="this.arr[1] == true ? '' : 'btywc'"
            @click="goPersonalContactInformation()"
          >
            {{ this.arr[1] == true ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="dashed-box">
          <div
            class="dashed"
            :class="arr[1] == true ? '' : 'dashed_true'"
          ></div>
        </div>
        <div class="flex-row jbxx" :class="arr[2] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">个人简历</span>
            <span class="block2_right_w2">Curriculum vitae</span>
          </div>
          <button
            class="block2_right_btn"
            :class="this.arr[2] == true ? '' : 'btywc'"
            @click="goCurriculumVitae()"
          >
            {{ this.arr[2] == true ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="dashed-box">
          <div
            class="dashed"
            :class="arr[2] == true ? '' : 'dashed_true'"
          ></div>
        </div>
        <div class="flex-row jbxx" :class="arr[3] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">家庭基础信息</span>
            <span class="block2_right_w2">Family basic information</span>
          </div>
          <button
            class="block2_right_btn"
            :class="this.arr[3] == true ? '' : 'btywc'"
            @click="goBasicFamilyInformation()"
          >
            {{ this.arr[3] == true ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="dashed-box">
          <div
            class="dashed"
            :class="arr[3] == true ? '' : 'dashed_true'"
          ></div>
        </div>
        <div class="flex-row jbxx" :class="arr[4] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">家庭成员</span>
            <span class="block2_right_w2">Member of family</span>
          </div>
          <button
            class="block2_right_btn"
            :class="this.arr[4] == true ? '' : 'btywc'"
            @click="goSelectFamilyNum()"
          >
            {{ this.arr[4] == true ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="dashed-box">
          <div
            class="dashed"
            :class="arr[4] == true ? '' : 'dashed_true'"
          ></div>
        </div>
        <div class="flex-row jbxx" :class="arr[5] == true ? '' : 'jbxx_true'">
          <div class="flex-col flex_1">
            <span class="block2_right_w1">贫困生</span>
            <span class="block2_right_w2">Poor students</span>
          </div>
          <button
            class="block2_right_btn"
            :class="this.arr[5] == true ? '' : 'btywc'"
            @click="goSelectNeedyStudents()"
          >
            {{ this.arr[5] == true ? "填写" : "已完成" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        img: "http://qn.zheskill.xyz/1.jfif",
        name: "绝绝子",
        sno: "2021010555",
        class: "21移动1",
        college: "信息媒体学院  ",
      },
      arr: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      },
    };
  },
  beforeUpdate() {
    // sessionStorage.setItem("testKey", "这是一个测试的value值");
  },

  beforeMount() {
    if (JSON.parse(sessionStorage.getItem("data")) == null) {
      sessionStorage.setItem("data", JSON.stringify(this.arr));

      console.log(this.arr);
    }
    this.arr = JSON.parse(sessionStorage.getItem("data"));
    console.log(this.arr);
  },
  mounted() {},
  methods: {
    showArr() {
      console.log(this.arr);
    },
    goBasicInformation() {
      this.$router.push({
        path: "/basicInformation",
      });
    },
    goPersonalContactInformation() {
      this.$router.push({
        path: "/personalContactInformation",
      });
    },
    goCurriculumVitae() {
      this.$router.push({
        path: "/curriculumVitae",
      });
    },
    goBasicFamilyInformation() {
      this.$router.push({
        path: "/basicFamilyInformation",
      });
    },
    goSelectFamilyNum() {
      this.$router.push({
        path: "/selectFamilyNum",
      });
    },
    goSelectNeedyStudents() {
      this.$router.push({
        path: "/selectNeedyStudents",
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/common.css";

.content {
  height: 100vh;
}

.block1 {
  width: 100vw;
  height: 278px;
  background: url(~@/img/bj1.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.block1_1 {
  margin-top: 40px;
  margin-left: 24px;
  align-items: center;
}

.block1_1_img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
}

.block1_1_w {
  margin-left: 14px;
  color: #ffffff;
}

.block1_1_w1 {
  font-size: 18px;
}

.block1_1_w2 {
  margin-top: 8px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  font-size: 12px;
}

.block1_1_w2_1 {
  padding: 4px 8px;
}

.block1_1_img1 {
  margin-left: 130px;
}

.block1_1_img1_1 {
  width: 20px;
  height: 28px;
}

.block1_2 {
  margin-top: 40px;
  margin-left: 24px;
  color: #ffffff;
}

.block1_2_1 {
  font-size: 19px;
}

.block1_2_2 {
  margin-top: 8px;
  font-size: 16px;
}

.block2 {
  position: absolute;
  top: 220px;
  left: 15px;
  width: 346px;
  background: #ffffff;
  border-radius: 8px;
}

.block2_right {
  padding: 25px 15px;
  width: 100%;
}
.dashed-box {
  padding-right: 110px;
  height: 25px;
}
.dashed {
  position: relative;
  top: -20px;
  left: 6%;
  border-left: 1px dashed #e3e3e3;
  height: calc(100% + 40px);
}
.dashed_true {
  border-left: 1px dashed #4c96d9;
}
.jbxx {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.jbxx::before {
  margin-right: 15px;
  content: "\2714";
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
  display: block;

  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;
  z-index: 1;
}

/* .jbxx::after {
  content: "";
  width: 0px;
  height: 100%;
  border-right: 1px dashed #e3e3e3;
  position: relative;
  top: 84%;
  right: 96%;
}
.jbxx:last-child::after {
  content: "";
  width: 0px;
  height: 0%;
} */

.jbxx_true::before {
  background: #4c96d9;
  border: 1px solid #4c96d9;
  border: none;
}

.block2_right_w1 {
  font-weight: 500;
  font-size: 18px;
}

.block2_right_w2 {
  font-weight: 300;
  font-size: 14px;
  color: #c8c8c8;
}

.block2_right_btn {
  width: 70px;
  height: 28px;
  border-radius: 13px;
  color: #ffffff;
  font-size: 14px;
  border: none;
  background: #4c96da;
}

.btywc {
  background: #c8c8c8;
}

.btModify {
  background: #50c9c3;
}
</style>
