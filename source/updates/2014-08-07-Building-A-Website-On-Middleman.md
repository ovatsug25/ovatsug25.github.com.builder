---
title: "Building a website on Middleman: Easier and Better than Jekyll"
---

>  This article is taken from a talk I did at
>  [Front End Party](http://frontendparty.com) in New Orleans on
>  Thursday, July 31, 2014.


Middleman is fairly straightforward.

You have a project directory which contains three things:

* `config.rb` file
* `source/` folder
* `build/` folder

Files from the source folder are processed according to the directions
from the config file and then put in the build folder.

If you read my last post on Middleman, you will realize that this is a
most basic of `Rake` scripts with the relevant templating options set
in the config file, along with any minification, optimization, insertions
you'd like specified there.

Let's built a website and see how it works

    middleman init sample-project

There we go! You've got a middleman project.

## Your layouts and your homepage

The first thing you're likely to want is a homepage,
and a template which will serve as a theme for a site.
These are pretty standard requirements for any webpage these days.

Let's set the layouts. We could do it like Jekyll and set
the default layout to `false`:

    set :layout, false

Or do something more sensible like:

    set :layout, "default"

These layout files will be found at whatever folder we set in:

    config[:layouts] = "path/to/folder"

We can also specify per page layouts:

    # With no layout
    page "/path/to/file.html", :layout => false

    # With alternative layout
    page "/path/to/file.html", :layout => :otherlayout

    # A path which all have the same layout
    with_layout :admin do
      page "/admin/*"
    end
    # Or
    page "/other/folder/layout", :layout => :other_folder_layout

We can also do this in a files front matter like Jekyll requries:

    ---
    layout: otherlayout
    ---

> Note, at the time of this writing, Jekyll includes a layout declaration
> for every single file in their documentation. These aren't even organized
> by folder despite the fact that on the page they seem to warrant that structure.

We are no ready to run `middleman build` command!

## Blogging with Middleman is easier and more powerful than Jekyll

But what about blogging you say? How can we blog?

Easily. Middleman has can be extented with the `middleman-blog` gem.
Include it in your `Gemfile`, run the bundle command and add the following to
your config.

    activate :blog do |blog|
      blog.name = “blog”
      blog.prefix = “blog”
    end

Now any files in the `blog/` folder will be treated like any file in a
Jekyll `_posts` folder.

But Middleman outclasses Jekyll yet again. You can add other blogs with different
names! Like the New York Times, you could have one blog for Nate Silver and
another one for Paul Krugman!

    activate :blog do |blog|
      blog.name = "krugman"
      blog.prefix = "krugman"
    end
    # Use the krugman/ folder.

    activate :blog do |blog|
      blog.name = "nate_silver"
      blog.prefix = "nate_silver"
    end
    # Use the nate_silver/ folder.

This makes it infinitley more scalabale than Jekyll.

Our content strategy is pretty much figured out and can take on a basic folder
struture. Tags and other options are available for the blog, and will be available
throughout the entire site pretty soon. I suggest you check out the
documentation for that though.

> Note, if you want to begin a project as a blog, use the
>     middleman init [project] --template=blog
> command. This way, the "middleman-blog" gem is included automatically.

## Use SASS, Compass, etc.

Now that we have our content management figured out (that's is the most important
thing right?!) we can begin to focus on style and interaction conviences.

Fortunaltye Middleman builds these right in with its plug and play structure.
Just type in these settings to your config file:

    configure :build do
      activate :minify_css
      activate :minify_javascript
    end

Your CSS and Javascript will be minified for production.

Make sure you indicate the right foldes in the config file:

    config[:css_dir] = "assets/stylesheets"
    config[:js_dir] = "assets/js"

And if you're a SASS guy, support for SASS is built right in.

## Deploy strategy

Are you FTPing?

Because if you are, all you need to do is upload the product of the home
folder to your webserver. This is a static webpage that's being built.

Do you want to use GitHub pages? This is a little bit more complicated
but doable and still very easy.

#### GitHub pages for a project

Let's start off with GitHub pages for a project.

I like to do two things: create an orphan branch in my repository named Middleman.

    git checkout --orphan middleman
    rm $(ls)
    # If your "ls" is set to something like "ls -l",
    # then you will delete your Git repository too.
    # You can't "rm -rf *" or you will delete your Git repository as well.
    # Don't do that.

Run `middleman init` with no project folder tag. This will create the middleman
structure in the current repository.

Add  `gem 'middleman-gh-pages'` to your Gemfile and
`require 'middleman-gh-pages'` to your Rakefile. You might have to create
the Rakefile. Chances are you might not have one.

Now, when you run `rake publish`, an orphan branch named "gh-pages"
will be created or updated with a new build. The specific Rake task can be read here:
https://github.com/neo/middleman-gh-pages/blob/master/lib/middleman-gh-pages/tasks/gh-pages.rake
and is pretty easy to understand.

Check it out!

#### GitHub pages for a homepage

To use Middleman for your usename page the process is a little more tricky.
GitHub is built to work with Jekyll or with a static site that has a `.nojekyll`
file.

If our main middlemand folder is the root of our homepage, we won't be able to
accomplish our goal because the site lives inside `build/` folder. It would be
really clunky to have an `index.html` file in main folder with links out to the
build, and it wouldn't make sense to just use the main folder as our build folder.

To use Github as my main server for my personal webpage, I used a little hack.

First of all, build a middleman project and title it in this manner:

    middleman init [username].github.com.builder

Add `[username].github.com` to your `.gitignore`

Make a folder like so:

    mkdir [username].github.com

And specify this as your build folder in `config.rb`:

    config[:build_dir] = '[username].github.com'

Set the build folder as your webpage repository
(it's already been titled appropiatley ;), and publish with ease!

You can even build in hooks to your middleman build command so that your website
will be pushed to GitHub in one go.

Middleman really is worth it. It's the perfect amount of structure for a website,
which makes it easy and a joy to use.

Stay tuned for another article for even more developer tricks on how to use
Middleman.
