<template>
  <div class="box">
    <el-row
      :gutter="20"
      class="first-row"
    >
      <el-col :span="8">
        <div class="bg first-row__first-col">
          <div class="bg__num">
            {{userCount}}
          </div>
          <div class="bg__name">
            用户数量
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="bg account">
          <div class="account__description">
            <i class="el-icon-printer"></i>
            <span class="account__name">你的账户</span>
          </div>
          <div class="account__content">
            <span class="account__content__left">￥{{~~income}}</span>
            <span class="account__content__right">
              <div>本月支出￥{{penSum}}</div>
              <el-progress
                :percentage="parseInt(percentageData)"
                :text-inside="true"
                :stroke-width="12"
                status="exception"
              ></el-progress>
              <div>剩余{{ daysRemaining }}天</div>
            </span>
          </div>
        </div>
      </el-col>
      <el-col
        :span="8"
        class="weather"
      >
        <div class="bg">
          <div
            :style="backgroundStyle"
            class="weather"
          >
            <div class="week">
              <div>
                <span>{{city}}</span><span>{{country}}</span>
              </div>
              <div>
                <span>{{day}}th</span><span>{{month}}</span><span>{{year}}</span>
              </div>
              <div>
                <span>{{hours}}</span><span>{{ispM}}</span>
              </div>
            </div>
            <div class="temperature">
              <span>{{ tem }}</span>
            </div>
            <div class="status">

              <span></span>
            </div>
          </div>
        </div>

      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="16">
       <div class="bg">
          <div class="titles">收支情况</div>
        <second-bar
          :data="barData"
          v-if="barData"
        ></second-bar>
       </div>
      </el-col>
      <el-col :span="8">
        <div class="bg">
              <div class="titles">支出汇总</div>
              <radar :data="radarData"></radar>
        </div>
       
      </el-col>
    </el-row>
  </div>
</template>
<script>
import secondBar from "../charts/common/secondBar";
import radar from '../charts/common/radar'
export default {
  components: {
    secondBar,
    radar
  },
  data() {
    return {
      penSum: 0,
      income: 0,
      userCount: 0,
      columnAndPen: {pen: [], column: []},
      radarData: [
    [85, 65, 55, 90, 82, 43], 100, [{
        "name": "居住",
        "max": 100
    }, {
        "name": "生活用品",
        "max": 100
    }, {
        "name": "交通和通信",
        "max": 100
    }, {
        "name": "教育",
        "max": 100
    }, {
        "name": "文化和娱乐",
        "max": 100
    }, {
        "name": "医疗保健",
        "max": 100
    }]
],
      barData: {},
      percentageData: 0,
      daysRemaining: 0,
      tem: "",
      city: "",
      country: "",
      hours: "",
      ispM: "",
      year: "",
      month: "",
      day: "",
      temperature: "34",
      weatherType: 1,
      week: "星期二",

      weathers: {
        0: {
          bgUrl: require("../../assets/images/weather/1.jpg")
        },
        1: {
          bgUrl: require("../../assets/images/weather/2.jpg")
        },
        2: {
          bgUrl: require("../../assets/images/weather/3.jpg")
        },
        3: {
          bgUrl: require("../../assets/images/weather/4.jpg")
        },
        4: {
          bgUrl: require("../../assets/images/weather/5.jpg")
        },
        5: {
          bgUrl: require("../../assets/images/weather/6.jpg")
        },
        6: {
          bgUrl: require("../../assets/images/weather/7.jpg")
        }
      }
    };
  },
  created() {
    this.$axios.get('/gucp/penAndIncome').then( data => {
      this.columnAndPen = data.data.body
    })
    this.$axios.get('/gucp/incomeSum').then( data => {
      this.income = data.data.body[0].incomeSum
    })
     this.$axios.post('/gucp/penSum', {
       currentPage: 1
     }).then( data => {
      this.penSum = data.data.body.sum[0].penSum ? data.data.body.sum[0].penSum : 0
    })
    this.$axios.get('/gucp/getUsereCount').then( res => {
      this.userCount = res.data.data.count
    })
    this.barData = {
      legend: [
        "2017-01",
        "2017-02",
        "2017-03",
        "2017-04",
        "2017-05",
        "2017-06",
        "2017-07",
        "2017-08",
        "2017-09",
        "2017-10",
        "2017-11",
        "2017-12",
        "2018-01",
        "2018-02",
        "2018-03",
        "2018-04",
        "2018-05",
        "2018-06",
        "2018-07",
        "2018-08",
        "2018-09",
        "2018-10",
        "2018-11",
        "2018-12",
        "2019-01",
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
        "2019-07"
      ],
      title: ["收入", "支出"],
      data1: [
        0,
        3,
        134,
        136,
        609,
        1510,
        1146,
        1602,
        2496,
        1491,
        2512,
        3140,
        1962,
        2127,
        3819,
        1825,
        2440,
        3220,
        2459,
        2838,
        3270,
        2378,
        3385,
        3803,
        2790,
        3042,
        5230,
        2829,
        3687,
        4608,
        3656
      ],
      data2: [
        0,
        31888,
        1517838,
        844325,
        18194022,
        36358768,
        34185998,
        50948600,
        80091290,
        44416598,
        97962403,
        119637603,
        83768256,
        85060842,
        189575287,
        57875793,
        95842172,
        149356056,
        127247028,
        106615780,
        104017679,
        96002271,
        136855417,
        170050316,
        132147386,
        142313925,
        259049071,
        157002188,
        181688051,
        166638510,
        164185496
      ]
    };
    let data = new Date();
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let days = [1, 3, 5, 7, 8, 10, 12];
    if (days.includes(day)) {
      this.percentageData = (((31 - day) / 31) * 100).toFixed(0);
      this.daysRemaining = 31 - day;
    } else {
      this.percentageData = (((30 - day) / 30) * 100).toFixed(0);
      this.daysRemaining = 30 - day;
    }
    this.getWeather();
    this.nowDate =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    let weekList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let monthList = {
      1: "Jnauary",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
    this.year = new Date().getFullYear();
    this.month = monthList[new Date().getMonth() + 1];
    this.day = new Date().getDate();
    this.weatherType = new Date().getDay();
    this.week = weekList[new Date().getDay()];
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hours <= 12) {
      this.hours = hours + ":" + minute;
    } else {
      this.hours = hours - 12 + ":" + minute;
    }
    var getHours = setInterval(() => {
      let hours = new Date().getHours();
      let minute = new Date().getMinutes();
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (hours <= 12) {
        this.hours = hours + ":" + minute;
      } else {
        this.hours = hours - 12 + ":" + minute;
      }
    }, 1000 * (60 - new Date().getSeconds()));
    this.setHours(new Date().getHours(new Date().getHours()));
    var getIsAM = window.setInterval(
      this.setHours(new Date().getHours()),
      1000 * 60 * 60
    );
  },
  destroyed() {
    window.clearInterval("getHours");
    window.clearInterval("getIsAM");
  },
  computed: {
    backgroundStyle() {
      return {
        "background-image": `url(${this.weathers[this.weatherType].bgUrl})`,
        "background-size": "110% 110%",
        "background-position": "-10px -10px",
        "background-repeat": "no-repeat",
        width: "100%",
        "border-radius": "5px"
      };
    }
  },
  methods: {
    getWeather() {
      // 因为天气接口需要注册付费所以就不用了
            this.tem = '2℃'
            this.city = 'Beijing'
            this.country = 'china'
    },
    setHours(hours) {
      if (hours <= 12) {
        this.ispM = "AM";
      } else {
        this.ispM = "PM";
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/font.css";

.box {
  padding: 10px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg {
    padding: 10px 0;
    background-color: #fff;
    min-height: 200px;
    border-radius: 10px;
    text-align: center;
  }
  .first-row__first-col {
    .bg__num {
      color: rgb(8, 8, 8);
      margin-top: 50px;
      margin-bottom: 15px;
      font-size: 26px;
      letter-spacing: 18px;
    }
    .bg__name {
      color: #666;
      font-size: 12px;
      letter-spacing: 8px;
    }
  }
  .account {
    .account__description {
      text-align: left;
      margin: 20px;
      border-bottom: 1px solid rgb(226, 217, 217);
      padding-bottom: 8px;
      .account__name {
        margin-left: 6px;
      }
    }

    .account__content {
      .account__content__left {
        display: inline-block;
        width: 30%;
        padding-top: 10px;
        float: left;
        font-size: 24px;
        padding-left: 20px;
      }
      .account__content__right {
        display: inline-block;
        width: 50%;
        margin-right: 5%;
        float: right;
        div {
          margin: 16px 0;
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
  .weather {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    color: #fff;
    text-align: center;
    overflow: hidden;
    .bg {
      padding: 0;
      /deep/ .week {
        position: absolute;
        left: 105px;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 100px;
        font-size: 16px;
        text-align: left;

        div {
          font-size: 18px;
          font-family: "SanvitoPro-LtDisp";
          padding-top: 6px;
          span {
            font-family: "SanvitoPro-LtDisp";
            padding: 0 6px;
            font-size: 18px;
          }
        }
      }

      /deep/ .temperature {
        position: absolute;
        top: 20%;
        width: 100%;
        text-align: right;
        font-size: 55px;
        right: 15px;
        margin-right: 25px;

        > span {
          font-family: "SanvitoPro-LtDisp";
          &:last-child {
            font-size: 40px;
            position: absolute;
            top: -15px;
            right: -15px;
          }
        }
      }

      /deep/ .status {
        text-align: center;

        min-height: 200px;
        > img {
          width: 24px;
          height: 23px;
          margin-top: 140px;
        }

        > span {
          margin-left: 12px;
          font-size: 18px;
        }
      }
    }
  }
  .el-row:nth-child(2) {
       margin-bottom: 20px;
      .bg {
        padding: 10px 0;
        background: #fff !important;
        border-radius: 10px;
        .titles {
          text-align: left !important;
          padding: 10px;
          font-size: 16px;
          color: #666;
          margin-left: 10px;
        }
      }
    
  }
}
</style>
