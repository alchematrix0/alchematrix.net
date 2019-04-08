---
path: '/portfolio/createbetter'
date: '2019-04-01'
title: 'Create Better'
subtitle: 'Boosting the Create Better newsletter with referrals'
subject: 'referral program'
class: 'work'
excerpt: 'Ora Organic, an organic supplements company started a weekly newsletter, Create Better and wanted to implement a referral program'
author: 'alexmatrix'
image: './createbetter-screen.png'
cover: './createbetter-screen-dash.png'
---
###### <a target="_blank" rel="noopener noreferrer" href="https://createbetter.com">View Website</a>

<a target="_blank" rel="noopener noreferrer" href="https://ora.organic">Ora Organic</a>, an organic supplements company started a weekly newsletter, Create Better, and wanted to implement a referral program. They modeled it off of an existing weekly newsletter called morning brew and asked me to implement their vision. This was a unique project firstly because we connected online through [AngelList](angel.co) and never met in person as I was traveling in New Mexico at the time. As I write this, I have a meeting scheduled for tomorrow, incidentally, with my person of contact at the company where we will meet for the first time but the entire thing was done, delivered and paid for 100% remotely. I suppose that's not that special in contract work but anyway I thought it was pretty cool because I am so into remote work that the idea of finding work as I am traveling is just so tantalizing.

Beyond that, I was able to make use of Create React App to bootstrap this project. I initially built it with Next.JS but the server rendering presented issues as we are using the URL to access a unique ID which we then use to ask our database for the referrals that belong to this user. Server rendered apps thrive on putting together web pages on the server and sending over the whole package, so this approach didn't lend itself to a database query that was fueled by information coming from the client :( Oh well. I still would totally recommend <a href="nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a>(nextjs.org) from the amazing team at <a rel="noopener noreferrer" target="_blank" href="zeit.co">Zeit</a> and I still used Zeit (their Now platform) to host the micro-services that power this app.

Beyond that, the dashboard had to be hosted on an existing WordPress (eye roll). I actually have made peace with Wordpress at this point, and we may even move the thing over to headless CMS (ie using Wordpress back end to get article data, enabling them to publish articles in a familiar environment while having a total custom view layer 🚀). Anyway, having done this before, it only took me a morning to get my code running in a Wordpress page, something I should probably create a blog article about unto itself for other developers who find themselves having to do this!

The look and feel of CreateBetter came entirely from the client which was cool. They sent over Sketch files and I just had to implement the design and make sure everything on the back end was working correctly in terms of counting referrals, showing this to the user and also knowing when to issue certain rewards depending on the total referrals. There's also a bunch of stuff relating to subscribing to the newsletter and sending the "Your friend thinks you'd like this newsletter" email, as well as email validation and a few other pieces, all in all it was a really fun month working on this project and means I won't have to stress about doing all the maintenance on my truck that I want to do after driving it for 8000 km this Winter! 🚙
