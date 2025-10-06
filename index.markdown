---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Welcome
nav_order: 1
---

# Welcome to my site!

This is the main page. Check out the sections in the top nav bar.

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="thumb">
    {% endif %}
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <b>{{ post.date |  date_to_long_string: "ordinal" }}</b>
    <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </li>
  {% endfor %}
</ul>
