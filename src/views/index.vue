<template>
  <div class="content">
    <div class="block1 flex-col">
      <div class="block1-1 flex-row">
        <div class="block1-1-img">
          <img
            class="block1-1-img"
            :src="message.img"
            alt=""
            @click="showArr"
          />
        </div>
        <div class="block1-1-w flex-col">
          <div class="block1-1-w1">
            <span>{{ message.name }}</span>
          </div>
          <div class="block1-1-w2 flex-row">
            <span class="block1-1-w2-1">NO.{{ message.sno }}</span>
          </div>
        </div>
        <div class="block1-1-img1">
          <img class="block1-1-img1-1" src="../img/girl.png" alt="" />
        </div>
      </div>
      <div class="block1-2 flex-col">
        <span class="block1-2-1">{{ message.class }}</span>
        <span class="block1-2-2">{{ message.college }}</span>
      </div>
    </div>
    <div class="block2 flex-row">
      <div class="block2-left flex-col">
        <img
          :class="this.arr[0] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[0] == 'false'
              ? 'http://qn.zheskill.xyz/4ff25663-b921-40e6-8354-92701aebba0d.png'
              : 'http://qn.zheskill.xyz/73154734-ec7c-4432-8473-5dde40e11640.png'
          "
          alt=""
        />
        <img
          :class="this.arr[1] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[1] == 'false'
              ? 'http://qn.zheskill.xyz/4ff25663-b921-40e6-8354-92701aebba0d.png'
              : 'http://qn.zheskill.xyz/73154734-ec7c-4432-8473-5dde40e11640.png'
          "
          alt=""
        />
        <img
          :class="this.arr[2] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[2] == 'false'
              ? 'http://qn.zheskill.xyz/4ff25663-b921-40e6-8354-92701aebba0d.png'
              : 'http://qn.zheskill.xyz/73154734-ec7c-4432-8473-5dde40e11640.png'
          "
          alt=""
        />
        <img
          :class="this.arr[3] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[3] == 'false'
              ? 'http://qn.zheskill.xyz/4ff25663-b921-40e6-8354-92701aebba0d.png'
              : 'http://qn.zheskill.xyz/73154734-ec7c-4432-8473-5dde40e11640.png'
          "
          alt=""
        />
        <img
          :class="this.arr[4] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[4] == 'false'
              ? 'http://qn.zheskill.xyz/4ff25663-b921-40e6-8354-92701aebba0d.png'
              : 'http://qn.zheskill.xyz/73154734-ec7c-4432-8473-5dde40e11640.png'
          "
          alt=""
        />
        <img
          :class="this.arr[5] == 'false' ? 'finish-x1' : 'finish-x'"
          :src="
            this.arr[5] == 'false'
              ? 'http://qn.zheskill.xyz/44fd63e1-5c41-4e58-b694-17bd7363ac1b.png'
              : 'http://qn.zheskill.xyz/c6a08c2f-d8fe-422b-9ce7-3cfc61941e24.png'
          "
          alt=""
        />
      </div>
      <div class="block2-right flex-col">
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">基础信息</span>
            <span class="block2-right-w2">Basic information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[0] == 'false' ? '' : 'btywc'"
            @click="goBasicInformation()"
          >
            {{ this.arr[0] == "false" ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">个人联系信息</span>
            <span class="block2-right-w2">Personal contact information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[1] == 'false' ? '' : 'btywc'"
            @click="goPersonalContactInformation()"
          >
            {{ this.arr[1] == "false" ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">个人简历</span>
            <span class="block2-right-w2">Curriculum vitae</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[2] == 'false' ? '' : 'btywc'"
            @click="goCurriculumVitae()"
          >
            {{ this.arr[2] == "false" ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">家庭基础信息</span>
            <span class="block2-right-w2">Family basic information</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[3] == 'false' ? '' : 'btywc'"
            @click="goBasicFamilyInformation()"
          >
            {{ this.arr[3] == "false" ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">家庭成员</span>
            <span class="block2-right-w2">Member of family</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[4] == 'false' ? '' : 'btywc'"
            @click="goSelectFamilyNum()"
          >
            {{ this.arr[4] == "false" ? "填写" : "已完成" }}
          </button>
        </div>
        <div class="flex-row jbxx">
          <div class="flex-col">
            <span class="block2-right-w1">贫困生</span>
            <span class="block2-right-w2">Poor students</span>
          </div>
          <!-- <button class="block2-right-btn">填写</button> -->
          <button
            class="block2-right-btn"
            :class="this.arr[5] == 'false' ? '' : 'btywc'"
            @click="goSelectNeedyStudents()"
          >
            {{ this.arr[5] == "false" ? "填写" : "已完成" }}
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
        0: "false",
        1: "false",
        2: "false",
        3: "false",
        4: "false",
        5: "false",
      },
    };
  },
  beforeUpdate() {
    // sessionStorage.setItem("testKey", "这是一个测试的value值");
  },

  beforeMount() {
    if (JSON.parse(sessionStorage.getItem("BasicInformation")) == null) {
      console.log(11111);
      sessionStorage.setItem("BasicInformation", false);
      sessionStorage.setItem("PersonalContactInformation", false);
      sessionStorage.setItem("CurriculumVitae", false);
      sessionStorage.setItem("BasicFamilyInformation", false);
      sessionStorage.setItem("FamilyMembers", false);
      sessionStorage.setItem("NeedyStudents", false);
    }

    this.arr[0] = sessionStorage.getItem("BasicInformation");
    this.arr[1] = sessionStorage.getItem("PersonalContactInformation");
    this.arr[2] = sessionStorage.getItem("CurriculumVitae");
    this.arr[3] = sessionStorage.getItem("BasicFamilyInformation");
    this.arr[4] = sessionStorage.getItem("FamilyMembers");
    this.arr[5] = sessionStorage.getItem("NeedyStudents");
  },
  mounted() {},
  methods: {
    showArr() {
      console.log(this.arr);
    },
    goBasicInformation() {
      this.$router.push({
        path: "/BasicInformation",
      });
    },
    goPersonalContactInformation() {
      this.$router.push({
        path: "/PersonalContactInformation",
      });
    },
    goCurriculumVitae() {
      this.$router.push({
        path: "/CurriculumVitae",
      });
    },
    goBasicFamilyInformation() {
      this.$router.push({
        path: "/BasicFamilyInformation",
      });
    },
    goSelectFamilyNum() {
      this.$router.push({
        path: "/SelectFamilyNum",
      });
    },
    goSelectNeedyStudents() {
      this.$router.push({
        path: "/SelectNeedyStudents",
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
.block1-1 {
  margin-top: 40px;
  margin-left: 24px;
  align-items: center;
}
.block1-1-img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
}
.block1-1-w {
  margin-left: 14px;
  color: #ffffff;
}
.block1-1-w1 {
  font-size: 18px;
}
.block1-1-w2 {
  margin-top: 8px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  font-size: 12px;
}
.block1-1-w2-1 {
  padding: 4px 8px;
}
.block1-1-img1 {
  margin-left: 130px;
}
.block1-1-img1-1 {
  width: 20px;
  height: 28px;
}
.block1-2 {
  margin-top: 40px;
  margin-left: 24px;
  color: #ffffff;
}
.block1-2-1 {
  font-size: 19px;
}
.block1-2-2 {
  margin-top: 8px;
  font-size: 16px;
}

.block2 {
  position: absolute;
  top: 220px;
  left: 15px;
  width: 346px;
  height: 436px;
  background: #ffffff;
  border-radius: 8px;
}
.block2-left {
  margin-top: 32px;
  margin-left: 18px;
}
.finish-x {
  margin-top: 2px;
  width: 24px;
}
.finish-x1 {
  margin-top: 4px;
  width: 24px;
}
.block2-right {
  margin-left: 16px;
  width: 78%;
}
.jbxx {
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.block2-right-w1 {
  font-weight: 500;
  font-size: 18px;
}
.block2-right-w2 {
  font-weight: 300;
  font-size: 14px;
  color: #c8c8c8;
}
.block2-right-btn {
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
