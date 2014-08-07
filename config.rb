require 'tilt/liquid'
require 'middleman-gh-pages'
# Features enabled by default
# enable :compass
# enable :sprockets
#
# # Features disabled by default
# disable :slickmap
# disable :cache_buster
# disable :minify_css
# disable :minify_javascript
# disable :relative_assets
# disable :maruku
# disable :automatic_image_sizes
# disable :minify_css
# disable :minify_javascript
# disable :cache_buster

activate :blog do |blog|
  blog.name = "updates"
  blog.prefix = "updates"
  blog.layout = "sidebar"
  # blog.sources = "{year}-{month}-{day}-{title}.md"
  # blog.prefix = "blog"
  # blog.permalink = "blog/{year}/{title}.html"
  # calendar_template
  # year_template
  # month_template
  # day_template
  # tag_template
end
activate :livereload
activate :syntax, :line_numbers => true

configure :development do
    set :debug_assets, true
end

configure :build do
    activate :minify_css
end

config[:build_dir] = 'ovatsug25.github.com'
config[:partials_dir] = '_partials'
config[:layouts_dir] = '_layouts'

config[:css_dir] = "assets/stylesheets"
config[:videos_dir] = "assets/videos"
config[:js_dir] = "assets/js"


# LAYOUTS #
###########

set :layout, "default"
# page "index.html", :layout => "default"
# page "the_data_center/*", :layout => "default"
# page "/admin/*", :layout => "admin"
# page "/melissa/*", :layout => "sidebar"
# page "/success_guide/*", :layout => "sidebar"
# page "/poems/*", :layout => "sidebar"
# page "/stories/*", :layout => "sidebar"
# page '/404.html', :layout => false
# page '/500.html', :layout => false
# set :layout, false


set :markdown_engine, :kramdown

# set :
set :liquid


