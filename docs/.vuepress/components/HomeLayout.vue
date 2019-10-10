<template>
  <div class="custom-page-class">

    <!-- Hero unit -->
    <div class="hero">
      <div class="hero__overlay hero__overlay--gradient"></div>
      <div class="hero__mask"></div>
      <div class="hero__inner">
        <div class="container">
          <div class="hero__content">
            <div
              class="hero__content__inner"
              id='navConverter'
            >
              <h1 class="hero__title">码良</h1>
              <p class="hero__text">高扩展的在线网页制作平台</p>
              <a
                href="https://godspen.ymm56.com/admin/#/home"
                class="button button__accent"
              >开始使用</a>
              <a
                href="https://github.com/ymm-tech/gods-pen"
                class="button hero__button"
              >
                <svg
                  class="github"
                  aria-labelledby="simpleicons-github-dark-icon"
                  lang=""
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title
                    id="simpleicons-github-icon"
                    lang="en"
                  >GitHub Dark icon</title>
                  <path
                    fill="#7F8C8D"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  ></path>
                </svg>
                GITHUB
              </a>
              <a
                href="https://gitee.com/ymm-tech/gods-pen"
                class="button hero__button"
              >
                GITEE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__sub">
      <span
        id="scrollToNext"
        class="scroll"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          class='hero__sub__down'
          fill="currentColor"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z" /></svg>
      </span>
    </div>
    <!-- Steps -->
    <div class="steps landing__section">
      <div class="container">
        <h2>谁可以使用码良？</h2>
        <p></p>
      </div>
      <div class="container">
        <div class="steps__inner">
          <div class="step">
            <div class="step__media">
              <img
                src="../../assets/images/undraw_designer.svg"
                class="step__image"
              >
            </div>
            <h4>程序员</h4>
            <p class="step__text">程序员可以在码良平台按业务需要创建自己的组件，并暴露相应参数提供给产品或者设计师方便使用。也可以开发一些脚本扩展已有组件的功能。</p>
          </div>
          <div class="step">
            <div class="step__media">
              <img
                src="../../assets/images/undraw_responsive.svg"
                class="step__image"
              >
            </div>
            <h4>设计师</h4>
            <p class="step__text">设计师可以制作动画效果比较好的模板提供给更多的人使用</p>
          </div>
          <div class="step">
            <div class="step__media">
              <img
                src="../../assets/images/undraw_creation.svg"
                class="step__image"
              >
            </div>
            <h4>营销者</h4>
            <p class="step__text">营销团队可以使用码良创建配置非常灵活的页面，配合获取到的访问等数据，可以直观的看到营销效果。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Expanded sections -->
    <div
      class="expanded landing__section"
      v-for="(value,key) in contentPart"
    >
      <div class="container">
        <div class="expanded__inner">
          <div class="expanded__media">
            <img
              :src="value.img"
              class="expanded__image"
            >
          </div>
          <div class="expanded__content">
            <h2 class="expanded__title">{{value.name}}</h2>
            <p class="expanded__text">{{value.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer footer--dark">
      <div class="container">
        <div class="footer__inner">
          <a
            href="index.html"
            class="footer__textLogo"
          >码良</a>
          <div class="footer__data">
            <div
              class="footer__data__item"
              v-for="(value,key) in footerPart"
            >
              <div
                class="footer__row"
                v-for="(item,key) in value.list"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  class="footer__link"
                >{{item.name}}</a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" rel="stylesheet/css" scoped type="text/css">
  @import "../../assets/style/style.css";
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
