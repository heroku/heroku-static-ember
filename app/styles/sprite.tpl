.icon {
  background: url('<%= options.spritePath %>') no-repeat;
  background-size: <%= getCSSValue(layout.width) %> <%= getCSSValue(layout.height) %>;
  display: inline-block;
}

<% layout.images.forEach(function (image) { %>
  .<%= image.className %>
  {
    background-position: <%= getCSSValue(-image.x) %> <%= getCSSValue(-image.y) %>;
    width: <%= getCSSValue(image.width) %>;
    height: <%= getCSSValue(image.height) %>;
  }
<% }); %>
