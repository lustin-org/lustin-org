---
ebook:
  theme: github-light.css
  title: МЭКС
  author: aliczin
---

# Удачно

предисловие

```flow
st=>start: Счастье:>https://lustin.org[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```

# Оглавление

- тут нужен специальный токенайзер
