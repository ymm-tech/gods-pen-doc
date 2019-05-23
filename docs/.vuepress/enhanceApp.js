function integrateGitalk(router) {
  const linkGitalk = document.createElement('link')
  linkGitalk.href = 'https://cdn.staticfile.org/gitalk/1.5.0/gitalk.min.css'
  
  linkGitalk.rel = 'stylesheet'
  document.body.appendChild(linkGitalk)
  const scriptGitalk = document.createElement('script')
  scriptGitalk.src = 'https://cdn.staticfile.org/gitalk/1.5.0/gitalk.min.js'
  scriptGitalk.onload = function () {
    scriptGitalk.complete = true
  }
  document.body.appendChild(scriptGitalk)

  router.afterEach((to, from) => {
    if (to.path == from.path) return
    if (scriptGitalk.complete) loadGitalk(to)
    else scriptGitalk.onload = () => {
      scriptGitalk.complete = true
      loadGitalk(to)
    }
  })

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container')
    if (!commentsContainer) {
      commentsContainer = document.createElement('div')
      commentsContainer.id = 'gitalk-container'
      commentsContainer.classList.add('content')
    }
    inject()
    function inject () {
      const $page = document.querySelector('.page')
      if ($page) {
        commentsContainer.innerHTML = ''
        $page.appendChild(commentsContainer)
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
          renderGitalk(to.path)
        }
      } else {
        setTimeout(inject, 1000)
      }
    }
  }
  function renderGitalk(fullPath) {
    console.log('env', process.env.NODE_ENV)
    var config = {}
    if (process.env.NODE_ENV === 'develop') {
      config = {
        clientID: 'd4e1f94773043511a880',
        clientSecret: 'a471d859cfd03c35f7263911ddacb6dae64ef32d',
        repo: 'ml-comment',
        owner: 'mingyuanwei',
        admin: 'mingyuanwei'
      }
    } else {
      // todo 评论
      config = {
        clientID: '31521355c83e11cf9d11',
        clientSecret: 'a3d2cc604085e8f12bbb83f5f3320934d83b61c8',
        repo: 'gods-pen-doc',
        admin: 'jy03078959',
        owner: 'ymm-tech'
      }
    }
    const gitalk = new Gitalk({
      clientID: config.clientID,
      clientSecret: config.clientSecret, // come from github development
      repo: config.repo,
      owner: config.owner,
      admin: [config.owner],
      id: fullPath,
      distractionFreeMode: false,
      language: 'zh-CN',
    })
    gitalk.render('gitalk-container')
  }
}

export default ({Vue, options, router}) => {
  if (typeof document == 'undefined') return
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error(e.message)
  }
}
