---
title: My Why of Programming and Car Maintenance
---

My Why of Programming and Car Maintenance
=========================================

I program to save time. If you are a non-programmer, this may not seem as obvious to you. Programmers are usually talked about start-up ideas and understood through products like Facebook and Google. The reality for me is a little bit different.

In my quest to purchase a car, I came upon this [table](http://bmw.e30tuner.com/my318is_maintlog.php) which details the maintenance costs for a particular BMW E30. I was trying to peg an estimate as to how much this car would cost me in total. A non-programmer would look at this and would spend 5-10 minutes doing a copy paste. It could be over that if this person does not know Excel shortcuts. Still, the work is repetive and perhaps a little dull.

As a programmer, this took on the order of five minutes, felt intellectually engaging, and there was very little room for a mistake. Let me walk you through my code.

First, I grab all the maintenance dollar. Because I viewed the source or blueprint for how the page is written, I realized that all these dollar numbers were associated were of this type (or class for the programmers out there): `maint_icst`.

I then told the computer to collect these in a list for me:

	maintElements = document.getElementsByClassName("maint_icst")

The list looks something like this:

	[
	<li class=​"maint_icst">​Cost</li>​
	,
	<li class=​"maint_icst">​…​</li>​
	,
	<li class=​"maint_icst">​$0​</li>​
	,
	<li class=​"maint_icst">​$20​</li>​
	,
	<li class=​"maint_icst">​N/A​</li>​
	,
	<li class=​"maint_icst">​$2000​</li>​
	]

It's pretty easy to tell that `maint_icst` is in all of them, but why does it pull up this `<li class="maint_icst">` at the beginning and `</li>` at the end? This is html and is used as a way of structuring the page. The li, if you will, is a type of structure in HTML in the same way a plank of wood is part of the structure for a house.

Unlike the house, the content is sandwiches between these two planks of wood. This is like the wood in a house. The `<li ...>` is the plank of wood at the front of the house, and the `</li>` is the plank of wood at the back of the house. All the good stuff is sandwiched in bewteen.

In this case the good stuff is text. This next line shows you how to extract the text from between these planks of wood.

    maintCostsList = Array.prototype.map.call(maintElements, function(e){return e.textContent})

Map allows us to work on each element between the two pairs of planks on a case by case basis. The code is a little bit advanced here, but the idea is pretty simple. Keep going and revisit the code again. It's hard! But I'm pretty sure you'll get it soon. Here is what we pull out with that line:

	["Cost", "...", "$0", "$20", "N/A", "$2000", ...]

Notice one problem though. And this is where computers are a little finicky. There is text: `Cost`, an ellipsis: `...` and a `N/A` in the code. If we wanted to add these together, we would have to convert these to. Because of their nature, we can assume it is `0`. Note, `Cost + 2 = ???` unless `Cost` is defined as something in algebra. This next line is how the computer makes sure that we only have a number to interpret.

	parseFloat(e.textContent.replace('$','')

We need to pair this with map so that we can do this for each bill in the maintenance costs.

	maintCostsList2 = Array.prototype.map.call(maintCosts, function(e){return e.textContent.replace('$','')}

This is a pretty simple task though. Why can't we just do it in one step. It turns out we can! This next line does the last two tasks together.

	maintCosts = Array.prototype.map.call(maintElements, function(e){return parseFloat(e.textContent.replace('$',''))})

Here's the return.

	[NaN, NaN, 0, 20, NaN, 2000, ...]

Return in this case is a noun. It is also a list. Start thinking of return as a noun!

Notice in the return that we have this `NaN` funny business. This is important.

If we tried to go element by element and added all of these together, this would not work.

	total = 0
	Array.prototype.forEach.call(maintCostsList, function(e){total += e)}

`NaN` stands for "not a number." The computer will assume that there is some value there though, and for the purposes of our sum, it will tell us it is `NaN` or `Not A Number` as well. This is called playing it safe. We need to explicitly tell the computer that it can add these together. Computers are dumb and can't understand that this `NaN`is not important and can be thrown away.

Here we will call `filter` on the maintenance cost list again and throw away all those things which are not a number.

	cleanArray = Array.prototype.filter.call(maintCostsList, function(e){return !isNaN(e)})

The return in this case is another list without `NaN`s.


	[ 0, 20, 2000, ...]

Now we can sum these together and get a real total number. First create a total variable like you did in algebra.

	total = 0

And now use map and add it onto total one at a time.

	Array.prototype.map.call(cleanArray, function(e){total += e})

You'll notice this returns a list.

	[undefined, undefined, undefined, ...]

Where is out total?

Simple. Just type in total and it returns the value. When I did it the number was `10460`.

If you want to actually see the `map` function at work...

Reassign total to 0

	total = 0

And recalculate but use add return inside the process you will use on each element.

	Array.prototype.map.call(cleanArray, function(e){return total += e})

Now you'll get something like:

	[ 0, 20, 2020, ...]

That's it!

This is how I calculated everything using copy paste. The good thing is, if the webpage is updated, I don't need to go through copy paste again. I can just do it right in my browser. The process is easily adaptable to similar pages...just check out what they are using instead of `maint_icst`.

Enjoy your efficiency!
