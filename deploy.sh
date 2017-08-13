bundle exec middleman build
cd build
git add -A
git commit --amend -m build
git push origin gh-pages --force
cd ..
