function Article(object) {
  this.title = object.title.rendered;
  this.content = object.content.rendered;
  if (object.content.rendered.match("img .+ src=[\"'](.+?)[\"'].*?") != null) {
    this.image = object.content.rendered.match("img .+ src=[\"'](.+?)[\"'].*?")[1];
  }
}

Article.prototype.toHtml = function() {
  title = '<li><h3>' + this.title + '</h3>'
  text = this.content + '<em></em></li><p><br><p>';
  if (this.image) {
    return title + '<img src=' + this.image + '>' + text;
  } else {
    return title + text;
  }
};

Article.loadAll = function(){
  Article.all = Article.rawData.map(function(ele) {
    return art = new Article(ele);
  });
};

Article.render = function(){
  Article.all.forEach(function(art){
    $('#blog-titles').append(art.toHtml())
  })
}

Article.ajaxCall = function(){
  $.ajax({
    url: 'https://wordspace-elliotpatt.c9users.io/wp-json/wp/v2/posts?per_page=20',
  }).done(function( data ) {
    Article.rawData = data;
    Article.loadAll();
    Article.render();
  });
}