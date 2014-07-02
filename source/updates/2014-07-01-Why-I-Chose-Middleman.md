---
published: false
---
Defaults, Defaults: Why I chose Middleman over Jekyll to build a website
========================================================================

Content! Content! Content!

I've been dying to make and update the content on my website for some time.

Now that I'm back in the development time, there were lots of choices,
a few things stood out:

Free! Free! Free!

As of writing this I had my website on Heroku and it was built as a Rails app.
It was a large improvement over my first website into web development
where I grepped, perled and s/change/content/days.

But still, it felt clunky and I knew it.

Fast forward a year and Jekyll has become more and more of a fixture in
the personal website/blogosphere.

But as I wrote and considered my project, I realized that Jekyll
didn't really cut it
***because I did not want my personal website to be a blog.***

A blog values rececny over your greatest hits.
A blog segways attention from your best work.
A blog as the centerpiece makes people less-consider the portfolio.

Luckily Jekyll allowed for the creation of personal pages,
pages as they were so called. And for a good while I was pretty sure
I was going to end up using it. Turns out that Jekyll's attitude of least
surprise was suprising. The deafults never worked. Having to declare
everything in YAML front matter seemed like very poor design.

And by design I actually mean it. I went through the GitHub issues and Jekyll's
focus on blogging meant that any extraneous pages were left out in the dark.
They even mention how much of a pain was to add a NONE layout and how the
Pages dont have layout.^(footnote: apparently this will be fixed in the next
version via collections. The Middleman approach is however better.)

And so began my search for a new framework. It began as a search and I
became attracted in Assemble after Patrick Burtchaell's awesome presentation
on Gulp and how this framewrok Assemble was trying to be built by it.

However the documentation was poor and once again there was this focus on
building collections when we already have a great model to do this: folders.
It was unclear whether Assemble was using folders or something else. By this
point however I grew confident, I was going to roll my own. I implemented a
function to recusivley `readdir` and selectivley choose to read files.
I came up with a long list of variables I wanted each page to have. A blog,
all is simply a folder which lives at pretty much one level. I was between
using Rake and Gulp and decided upon Rake because of its legibility.

However, midway through the build process I came upon Middleman.
Middleman does exactly what I wanted it to do.
Basically it does a build process by filtering folders and files based on the
config. Nothing fancy.

This is really Jekyll unconstrained. Wheras Jekyll boxes you into this
blogging format, Middleman allows you to think of Jekyll as a plugin.
Not that Jekyll allows itself as a plugin, but on a personal website
that's really what the role of Jekyll and a blog should be.


How did I actually build my site in Middleman?
How did I plug the potholes?
Where was the documentation poor and/or missing?
Subsribe and I'll tell you when the post is up in the next few days.

Thanks for visiting!
