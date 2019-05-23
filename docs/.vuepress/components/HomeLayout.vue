<template>
  <div class="custom-page-class">
    <div class="page-top">
      <div class="info-container">
        <h1>码良</h1>
        <div class="info-desc">高扩展的在线网页制作平台</div>
        <div class="button">
          <a class="start-btn" target="_blank" href="http://godspen.ymm56.com/admin/">开始使用</a>
          <span class="github-btn">
            <a
              href=""
              class="gh-btn github"
            >
              <span class="gh-icon"></span>
              <span class="gh-text">Star</span>
            </a>
            <a
              href=""
              class="gh-count github"
            >{{githubCount}}</a>
          </span>
        </div>
      </div>
      <img src="../../assets/img/undraw_mobile_marketing_iqbr.png" class="bg"/>
    </div>
    <div class="content-part">
      <!-- <h3>我的特点</h3> -->
      <div class="cont-text">
        <div
          class="part"
          v-for="(v, k) in contentPart"
          :key='+k'
        >
          <img
            :src="v.img"
            alt=""
          >
          <div class="text">
            <p class="name">{{v.name}}</p>
            <p class="des">{{v.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-wrap">
        <div
          class="footer-center"
          v-for="(v, i) in footerPart"
          :key="i"
        >
          <ul>
            <li>{{v.title}}</li>
            <li
              v-for="(data, index) in v.list"
              :key="index"
            >
              <a
                :href="data.link"
                target="_blank"
              >{{data.name}}</a>
              <span v-if="data.des">
                <span> - </span>
                <span class="des">{{data.des}}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <span>Copyright © YMM-FE</span>
      </div>
    </footer>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
@media screen and (max-width: 767px){
  /* 手机端CSS代码 */
    .page-top {
      margin: 0 auto 30px;
      width: 90%;
      max-width: 1200px;
      color: rgba(0, 0, 0, 0.85);
      text-align: left;
      vertical-align: top;
      box-sizing: border-box;

    .bg {
      margin-top: 40px;
      right: 0;
      width: 100%;
      box-shadow:none;
    }

    .info-container {
      h1 {
        font-size: 68px;
        font-weight: 500;
        line-height: 66px;
        margin: 0;
        padding: 16px 0;
      }

      .info-desc {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0;
      }

      .button {
        margin-top: 30px;

        .start-btn {
          color: #fff;
          display: inline-block;
          width: 140px;
          height: 45px;
          border-radius: 30px;
          line-height: 45px;
          text-align: center;
          font-size: 16px;
          box-shadow: 0 2px 8px 0 rgba(82,94,102,.15);
          background: linear-gradient(-45deg,#32b6ff,#4276ff);
        }

        .github-btn {
          margin-left: 20px;
          display: inline-block;
          vertical-align: middle;
          font: 700 11px / 14px Helvetica Neue, Helvetica, Arial, sans-serif;

          .github {
            padding: 2px 5px 2px 4px;
            color: #333;
            text-decoration: none;
            white-space: nowrap;
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid #d5d5d5;
          }

          .gh-btn {
            background-color: #eee;
            float: left;

            .gh-icon {
              float: left;
              width: 14px;
              height: 14px;
              margin-right: 4px;
              background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }

          .gh-count {
            float: left;
            position: relative;
            margin-left: 4px;
            background-color: #fafafa;
          }

          .gh-count:before {
            left: -4px !important;
            border-right-color: #d4d4d4 !important;
            top: 50%;
            margin-top: -4px;
            border-width: 4px 4px 4px 0;
          }

          .gh-count:after {
            top: 50%;
            left: -4px;
            z-index: -1;
            margin-top: -5px;
            border-width: 5px 5px 5px 0;
            border-right-color: #d4d4d4;
          }

          .gh-count:after, .gh-count:before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .content-part {
    margin: 0 auto;
    padding: 22px 0;
    width: 100%;
    background-color: #FAFBFC;

    h3 {
      text-align: center;
      font-size: 28px;
      color: #314659;
      margin-top: 0;
      margin-bottom: 25px !important;
    }

    .cont-text {
      width: 80%;
      margin: 0 auto;
      max-width: 1200px;
      overflow: hidden;

      .part {
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        float: left;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
        text-align: center;
        letter-spacing: 0;
        background-color: #fff;
        padding: 10px;
        margin-bottom 15px
        box-sizing: border-box;
        border-radius: 12px;
        .text {
          flex 1
          padding-right 5px
        }
        img {
          width: 60px;
          margin-right: 22px;
          box-shadow: none;
        }

        .name {
          font-size: 14px;
          margin-bottom: 16px;
        }

        .des {
          color: rgba(0, 0, 0, 0.43);
          font-size: 12px;
        }
      }
    }
  }

  .copyright {
    padding: 2px 15px;
  }
}
@media screen and (min-width: 768px){
  /* 手机端CSS代码 */
    .page-top {
      position: relative;
      margin: 0 auto;
      padding-top: 7%;
      width: 90%;
      height: 656px;
      max-width: 1200px;
      color: rgba(0, 0, 0, 0.85);
      text-align: left;
      vertical-align: top;
      box-sizing: border-box;

    .bg {
      position: absolute;
      top: 117px;
      right: 0;
      box-shadow : none;
      width: 637px;
      background: url('../../assets/img/undraw_mobile_marketing_iqbr.png') no-repeat;
    }

    .info-container {
      h1 {
        font-size: 68px;
        font-weight: 500;
        line-height: 66px;
        margin-bottom: 16px;
      }

      .info-desc {
        text-align: left;
        font-size: 20px;
        letter-spacing: 0;
      }

      .button {
        margin-top: 50px;

        .start-btn {
          color: #fff;
          display: inline-block;
          width: 140px;
          height: 45px;
          border-radius: 30px;
          line-height: 45px;
          text-align: center;
          font-size: 16px;
          box-shadow: 0 2px 8px 0 rgba(82,94,102,.15);
          background: linear-gradient(-45deg,#32b6ff,#4276ff);
        }

        .github-btn {
          margin-left: 20px;
          display: inline-block;
          vertical-align: middle;
          font: 700 11px / 14px Helvetica Neue, Helvetica, Arial, sans-serif;

          .github {
            padding: 2px 5px 2px 4px;
            color: #333;
            text-decoration: none;
            white-space: nowrap;
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid #d5d5d5;
          }

          .gh-btn {
            background-color: #eee;
            float: left;

            .gh-icon {
              float: left;
              width: 14px;
              height: 14px;
              margin-right: 4px;
              background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }

          .gh-count {
            float: left;
            position: relative;
            margin-left: 4px;
            background-color: #fafafa;
          }

          .gh-count:before {
            left: -4px !important;
            border-right-color: #d4d4d4 !important;
            top: 50%;
            margin-top: -4px;
            border-width: 4px 4px 4px 0;
          }

          .gh-count:after {
            top: 50%;
            left: -4px;
            z-index: -1;
            margin-top: -5px;
            border-width: 5px 5px 5px 0;
            border-right-color: #d4d4d4;
          }

          .gh-count:after, .gh-count:before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            box-sizing: border-box;
          }
        }
      }
    }
  }

  .content-part {
    margin: 0 auto;
    padding: 100px 0;
    width: 100%;
    background-color: #FAFBFC;

    h3 {
      text-align: center;
      font-size: 28px;
      color: #314659;
      margin-top: 0;
      margin-bottom: 66px !important;
    }

    .cont-text {
      width: 80%;
      margin: 0 auto;
      max-width: 1200px;
      overflow: hidden;

      .part {
        width: 50%;
        padding: 30px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        float: left;
        .text {
          padding-right 5px
        }
        img {
          width: 120px;
          margin-right: 32px;
          box-shadow: none;
        }

        .name {
          font-size: 22px;
          margin-bottom: 16px;
        }

        .des {
          color: rgba(0, 0, 0, 0.43);
          font-size: 16px;
        }
      }
    }
  }
  .copyright {
    padding: 12px 144px;
  }
}
  .custom-page-class {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
    position: relative;
    width: 100%;
    background-color: #fff;
  }

  .footer {
    border-top: 1px solid #e5e7eb;
    clear: both;
    font-size: 14px;
    background-color: #000;
    color: hsla(0, 0%, 100%, 0.65);
    position: relative;
    box-shadow: 0 1000px 0 1000px #fff;

    .footer-wrap {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      padding: 30px 0;
      text-align: center;

      .footer-center {
        flex 1
        ul {
          display: inline-block;
          text-align: left;
          list-style: none;
          color: #fff;

          li:nth-child(1) {
            font-size: 16px;
            margin: 0 auto 24px;
            font-weight: 500;
            position: relative;
          }

          li {
            a {
              color: #fff;
            }

            a:hover {
              color: green;
            }

            .des {
              color: hsla(0, 0%, 100%, 0.65);
            }
          }
        }
      }
    }

    .copyright {
      border-top: 1px solid hsla(0, 0%, 100%, 0.25);
      overflow: hidden;
      text-align: right;
      margin: 0;
      line-height: 32px;
    }
  }
</style>
<script>
  import {contentPart, footerPart} from '../components/metadata'

  export default {
    computed: {},
    data () {
      return {
        githubCount: '',
        contentPart: contentPart,
        footerPart: footerPart
      }
    },
    mounted () {
      fetch('https://api.github.com/repos/ymm-tech/gods-pen').then(data => {
        return data.json()
      }).then(res => {
        this.githubCount = res.stargazers_count
      })
    },
    methods: {
    }
  }
</script>
