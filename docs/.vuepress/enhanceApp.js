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
      admin: [config.admin],
      id: fullPath,
      distractionFreeMode: false,
      language: 'zh-CN',
    })
    gitalk.render('gitalk-container')
  }
}

function integrateBaidutongji () {
  var hm = document.createElement("script")
  hm.src = "https://hm.baidu.com/hm.js?84ec065ed53bdba33766fd8de56ca030"
  hm.setAttribute('defer', true)
  document.body.appendChild(hm)
}

function imgViewer (router) {
  function inject () {
    if (inject.started) return
    const $page = document.querySelector('.page')
    if (!$page) return setTimeout(inject, 1000)
    document.querySelector('.page').onclick = function (e) {
      if (e.target.nodeName === 'IMG' && !!e.target.src) {
        document.getElementById('imgViewer').src = e.target.src
        document.getElementById('imgViewerMask').style.display = 'block'
      }
    }
    inject.started = true
  }
  function createImgViewer () {
    const div = document.createElement('div')
    div.id = 'imgViewerMask'
    div.style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 32; display:none;"
    div.innerHTML='<img id="imgViewer" style="position: absolute; margin: auto; top: 0; bottom: 0; left: 0; right: 0; box-shadow: none; max-width: 97%; max-height: 97%;" src=""/>'
    div.onclick = function () {
      div.style.display = 'none'
    }
    document.body.appendChild(div)
  }
  createImgViewer()
  router.afterEach(inject)
}

export default ({Vue, options, router}) => {
  if (typeof document == 'undefined') return
  try {
    integrateGitalk(router)
    integrateBaidutongji()
    imgViewer(router)
  } catch (e) {
    console.error(e.message)
  }
}
