---
layout: post
cover: 'assets/images/cover1.jpg'
title: Teste de alguns markdowns
date:   2016-08-03 16:10:00
tags: [Outros]
subclass: 'post tag-outros'
logo: 'assets/images/logo.png'
navigation: True
---

Ainda estou fuçando as funcionalidades que o Jekyll oferece, e apesar do Github oferecer um sistema com mais [funções](https://help.github.com/enterprise/11.10.340/user/articles/github-flavored-markdown/), eu não sei se os mesmos estão implementados no Github pages.

### Testando a tabela

| Coluna 1 | Coluna dois | Coluna três |
|:---------|:-----------:|------------:|
|esquerda  | centralizado|     direita |
|macarrão  | couve       | batata      |

### Texto tachado ou destacado?

A seguinte palavra está de que ~~modo~~?

> Tachado!

link automático: http://github.com

~~~
Outro teste
~~~

```java
1. public class Teste{
2.	public static void main(String[args]){
3.		int variavel1 = 0;
4.		int variavel2 = 2;
5.		System.out.println(variavel1 + variavel2);
6.	}
7. }

```

{% gist c96cea874731e9981ab06015d00355d0 %}