---
title: "Defaults: Why I chose Middleman over Jekyll to build a website"
---
Defaults: Why I chose Middleman over Jekyll to build a website
========================================================================

Content! Content! Content!

I've been dying to make and update the content on my website for some time.
I made it once and it has been sitting here ever since, however, it had
been kind of a pain to maintain and because it had been done in Rails
(what I knew at the time).

Given that I'm once again a developer and have time to work with these things,
I've spent some time over these last few weeks trying to recreate and renovate
my personal platform.

And it really had to be my personal platform. The webpage was going to be about
my projects and I wanted it to showcase my best, not just my most rcent work.
A blog therefore, is secondary to my aim. I base this on Paul Graham and Patrick McKenzie,
the first who publishes essays and not blog posts and the latter who publishes essays
in addition to his blog.

Even so, Jekyll-a static-site blog generator-seemed to offer the best solution.
It was static, it was fast, and the content was managed on my filesystem.
GitHub would host it freely and it was updatable by 'git push'.
Lastly, because it was static Jekyll seemed like it would allow
to make pages independtly from the blog as it would copy and paste pages
to the ouput folder.

These were called 'pages' according to the documentation.
However Jekyll's templating of these pages was surprising.
The deafults as I understood them never worked because the project maintainers
only really wanted templating for the blog. Everything else has been tacked on.
To get a folder to use a standard template meant that I had to declare this
template on every page by design.

And by design I actually mean it. Pages can't have a default layout.
Collections support is coming, but it seems to be secondary. And when you read
through the GitHub issues discussing these features, you soon realize that
Jekyll in terms of Pages isn't really template first. Its maintainers
even discuss how templaying is unexpected behavior. They even mention that it would
be sort of clunky to declare that 1/500 pages wouldn't need a standard template.
For the maintainers, declaring "layout: none" seems unnatural.

I knew this would cause headaches forever and ever because of my
completley different philosophy.And so began my search for a new framework.
At first, I was most interested in Assemble after Patrick Burtchaell's
presentation at Front End Party.  It was built with Gulp, a Javascript based
build engine which would help me focus on better learing this one ubiquitous language.

However the documentation for Gulp and Assemble was poor and
once again there was this focus on building collections when we
already have a great model to do this: folders.

By this point however I grew confident, I was going to roll my own.
I implemented a function to recusivley `readdir` and selectivley choose to read files.
I came up with a long list of variables I wanted each page to have. A blog would simply
be a folder one level deep. And all of this seemed possible with a build
system I am familiar: Rake.

This was my preliminary spec:

1. Build and compile assets, move to src folder
2. Build and compile list of templates and partials
3. Go through each of the files and assign templates and build partials according to their folder structure
4. Start server

However, midway through the build process I came upon Middleman.
Middleman does exactly what I wanted it to do. It's a static site build process
built around file-system folders.

I understand it as Jekyll unconstrained. Wheras Jekyll boxes you into this
blogging format, Middleman allows you to think of Jekyll as a plugin.
Pages take the front seat and now both my marketing and development goals
are satisfied.

How did I actually build my site in Middleman?
What were the potholes along the way?
How did I plug them?
Where was the documentation poor and/or missing?

I'll have a post up abou this in the next few days with more details.

Thanks for visiting!
