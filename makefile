publish:
	git pull && yarn install && yarn docs:build && cd docs/.vuepress/ && docker cp dist/. godspen_godspen_1:/app/static-html/doc/