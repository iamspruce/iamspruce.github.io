---
date: 2020-12-21
title: Create A Blog On Your Mobile Phone Part 2 
author: Spruce
author_link: spruce.emma
summary: >
  Welcome to the second part of "how to create a blog on your mobile phone with jekyll on github", In this part you will learn hot to perform "GIT" actions with your phone. 
tags: Featured
preview: img/project-pushing.png
sharing:
  twitter: Create A Blog On Your Mobile Phone Part 2
  facebook: Create A Blog On Your Mobile Phone Part 2
---

<p>
Hello dear reader and welcome to the second part of this web series on how to create a website or blog right from your mobile phone.  
</p>
<h1>
Quick Recap
</h1>
<p>
Like i said this is the second part of this series, incase you missed the first part you can always go back and read it here: <br> <br>
<a href="/blog/create-a-blog-on-your-mobile-phone-with-jekyll-on-github.html">Create a blog on your mobile phone part 1</a>. <br>
Talking about reading the other article, You should really read that article up as this one is just building on what we learned in the orther article <br>
<ol>
We learn't a few and very essentials things though:
<p></p>
<li>
concept of mobile blogging
</li>
<li>
how to create a free website/blog
</li>
<li>
how to clone your website/blog to your mobile phone
</li>
<li>
and quit a all lot of other things
</li>
</ol>
<br>
Don't just take my word for it, you should read it up yourself.
</p>
<h2>
Requirements
</h2>
<p>
Before you continue on this tutorial you should have at least a basic knowledge of the things listed below
</p>
<ol>
<li>
HTML
</li>
<li>
How the web works (refer to part 1)
</li>
</ol>
<p>
Yep thats all you will be needing for this part of the series...
</p>

<h3>
Welcome to jekyll
</h3>
<p>
If you are the curious type like me, you would have asked yourself, what is <b>JEKYLL</b>
</p>
<h4>
What really is Jekyll?
</h4>
<blockqoute>
<a href="https://jekyllrb.com/">Jekyll</a> is a static site generator. it takes text written in your favorite markup language and uses layouts to create a static website. You can <b>tweak the sites's look and feel</b>, URLs, the data displayed on the page and more 
</blockqoute>

<p>
From the defination you get the idea... Jekyll is just plain html text that are converted to static website's. <br>
Well <b>static</b> is the opposite of <b>Dynamic</b>, think of jekyll as the opposite of Dynamic websites built on WordPress and other dynamic websites... <br>
of course being static is one of the features i like about jekyll, being static means your pages load super fast, no third party content(You own your contents and codes), and easy set up and customization, like you create a website with just Html, Css and js, Jeez how super fast is that...
</p>
<p>
In addition to all its other cools features and plugins, it also uses the <b>Shopify Liquid:</b> <br>
<b>Lquid</b> is an open-source template language created by shopify and written in Ruby. <br><br>
Did i also mention that jekyll and github are completely free? <br>
Yep they sure are.

</p>
<h5>
Resources to learn jekyll
</h5>
<p>
you can learn all about jekyll and liquid from the below links
</p>
<ol>
<li>
<a href="https://jekyllrb.com/docs/">jekyll official documentation</a>
</li>
<li>
<a href="https://shopify.github.io/liquid/basics/introduction/">liquid official documentation</a>
</li>
</ol>

<h6>
Intro to git 
</h6>
<p>
What is git? <br><br>
Git is a distributed version-control system for tracking changes in any set of files... and so on 
</p>
<p>
Basically git is just meant and used to <b>commit</b>, pull and <b>push</b> changes to your <b>remote repository</b>
</p>
<p>
a
A lot of terminologies used here, dont worry about that, you will soon see them in action very soon, but before then let me introduce you to what they are and how they are connected to creating a site on your mobile phone
</p>
<ol>
<li>
<strong>COMMIT:</strong> this command is used to save your changes to your local repository (the site you cloned to your mobile phone in the part 1 of this series)
</li>
<li>
<strong>PUSH:</strong> this command is used to push(as the name implies) all the files you have commited to your remote repository
</li>
<li>
<strong>REMOTE REPO:</strong> This is a common repository that all team members use to exchange their changes. This repository is stored on a code hosting service like Github(That's where github comes in)
</li>
</ol>
<h6>
Conncecting the dots...
</h6>
<p>
You may be wondering, how does this have to do with blogging from mobile phone... <br>
well from the explanations above, you only need two things
<ol>
<li>
Remote Repository
</li>
<li>
A place to run Git commands from
</li>
</ol>
</p>
<p>
you already have a remote repo, so you shouldn't worry about that, what i will introduce to you is <b>how you can execute git commands on your mobile phone</b>
</p>
<h6>
I guess we are done talking...
</h6>
<p>
Too much talk and explanations (I really hope you get the idea), now lets stop talking and start showing how things work
</p>
<p>
Go ahead and lunch your spck editor, <a href="/blog/create-a-blog-on-your-mobile-phone-with-jekyll-on-github.html">[The one you downloaded on the previous post]</a>
</p>
<figure class="p-article__img">
  <img src="/img/project-preview.png" alt="Jekyll project on spck editor" />

  <figcaption>
    Your cloned project should look like this
  </figcaption>
 </figure>
 <p>
Now its time to upload your own contents <br> <br>
Scroll down to the images folder and select it
 </p>
 <figure class="p-article__img">
  <img src="/img/project-img.png" alt="Jekyll image folder in spck editor" />

  <figcaption>
   Image folder looks like this
  </figcaption>
 </figure>
 <p>
Click on the three dots(menu of the image folder),and click on Upload File
 </p>
 <figure class="p-article__img">
  <img src="/img/project-img-upload.png" alt="Jekyll upload image in Spck editor" />

  <figcaption>
    Click on upload file
  </figcaption>
 </figure>
 <p>
Now upload a loving photo of your self, or your website logo.. <br>
Now its time to edit the config file and customize the site to display your own info
 </p>

 <p>
Now close your image folder and look for and open the file called <br>
<b>_config.yml</b> <br>
when you open it, you should see something like this below
 </p>
 <figure class="p-article__img">
  <img src="/img/project-config.png" alt="Jekyll Config file in spck editor" />

  <figcaption>
    Your config file looks like this
  </figcaption>
 </figure>
 <p>
basically anything you edit here affects your site drastically, so be careful of what you touch in here
 </p>
 <p>
First thing you should change is name, in your config file change your name
 </p>

 <pre class="language-yml">
<code class="language-yml">
name: your name
#Change it to the name you want to use
#name: Spruce
</code>
 </pre>

 <p>
Change the description too
 </p>

 <pre class="language-yml">
<code class="language-yml">
description: web developer from somewhere
#Change it to anything you want, just dont make it too look (seo issues)
#description: web developer based in Edo, Nigeria
</code>
 </pre>
<p>
Do you remember the image you uploaded? yep you do, its time to use it. From the <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"> Getting Started With The Web </a> you read in the first part of this series i assume you now know how the web work...
 </p>

 <pre class="language-yml">
<code class="language-yml">
avatar: https://....
#Change it to the file you uploaded earlier
avatar: /images/spruce.jpg #in my case
</code>
 </pre>

 <p>
Edit your footer links, add your social media liks to the footer links
 </p>

 <pre class="language-yml">
<code class="language-yml">
footer-links:
  dribble: dribble username
  email:
  facebook:
  ..... etc
</code>
 </pre>

 <p>
Change your url to your site url
 </p>

 <pre class="language-yml">
<code class="language-yml">
url: github-username.github.io
#where github username is changed to your username
url: sprucestatic.github.io #in my case 
</code>
 </pre>

 <div class="info info--note">
   <div class="info__content">
       <strong>Note:</strong> Leave the baseurl feed empty if your site is "github-username.github.io", but if your site is "github-username/static-site-name" add "/static-site-name" to the baseurl <br>
       but if you have followed this series from the beginning please leave baseurl empty...
                </div>
          </div>
<p>
Now its time to use the Git commands we explained before now <br>
in the <b>spck editor</b> <br> <br>
Click on the last fork icon at the bottom of the editor
</p>
<figure class="p-article__img">
  <img src="/img/project-fork.png" alt="fork icon in spck editor" />

  <figcaption>
    Click on the last fork icon to your right
  </figcaption>
 </figure>
 <p>
Once you have click on the fork icon, you should see something that looks like the one below 
 </p>

 <figure class="p-article__img">
  <img src="/img/project-commit.png" alt="Spck editor commit" />

  <figcaption>
    Click on the commit all
  </figcaption>
 </figure>
 <p>
the next steps are easy
 </p>
 <ol>
<li>
Click on Commit All
</li>
<li>
Enter commit Message
</li>
<p>
You can enter anything in your commit message, but that dosen't mean you should just write a bunch of anything you think of, a commit message should briefly explain the changes you made to your project.
</p>
 </ol>
 <p>
Remember from our defination of commit, it just save the changes to your local computer, in our case your mobile phone, that is the changes wont reflect on the web just yet, Now that is where <b>GIT PUSH</b> comes in the picture... Push as the name implies pushes your saved commit to your remote repo (the one hosted on github) so that people can view it on the web. 
 </p>
 <p>
As you might have noticed, editing, uploading and committing to your cloned project dosen't require any data Connection. But when pushing your changes, you need a data connection, So go ahead and switch on your data connection and follow the below steps
 </p>
 <ol>
To push your changes follow this steps: <br><br>
<li>
Click on the last fork icon again
</li>
<li>
Click on push
</li>
<li>
Click Ok
</li>
 </ol>
 <figure class="p-article__img">
  <img src="/img/project-pushing.png" alt="Spck editor Git push on mobile" />

  <figcaption>
   Wait for it to push your changes
  </figcaption>
 </figure>

 <p>
Boom and there you go, your websites should be live with your changes on the web in a minute... <br>
Go ahead and preview your website
 </p>

 <figure class="p-article__img">
  <img src="/img/preview-mobile.png" alt="Mobile Preview of your free website" />

  <figcaption>
    On mobile phone your site looks like this
  </figcaption>
 </figure>
 <p>
 </p>
 <figure class="p-article__img">
  <img src="/img/preview-web.png" alt="Web Preview of your free website" />

  <figcaption>
    On a pc your site looks like this
  </figcaption>
 </figure>

 <p>
Well thats the end of this part of the series... Next stop is <b>Blogging</b>, Thanks for reading...
 </p>

 <h6>
Previous parts of this series
 </h6>
 <p>
<a href="/img/create-a-blog-on-your-mobile-phone-with-jekyll-on-github.html">Create a blog on your mobile phone part 1</a>
 </p>
