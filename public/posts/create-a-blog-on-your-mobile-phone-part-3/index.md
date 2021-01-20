---
date: 2020-12-20
title: Create A Blog On Your Mobile Phone With Jekyll On Github
author: Spruce
author_link: spruce.emma
summary: >
  Have you ever wanted to own your own blog? Well if you have, this series will get you started immediately
tags: Featured
preview: img/spck-post.png
sharing:
  twitter: Create A Blog On Your Mobile Phone With Jekyll On Github
  facebook: Create A Blog On Your Mobile Phone With Jekyll On Github
---

<p class="p-article__lead">
Welcome to the series <b>"How to create a blog on your mobile phone with Jekyll on Github"</b>
</p>

<p>
Yep i said it... You can create a free blog from your mobile phone, so get ready to start your journey as a blogger...  
</p>
<p>
a lot of people do ask:
<ol class='p-article__items'>
<li>
How can i create a website with my phone?
</li>
<li>
Can we blog from mobile?
</li>
<li>
what is the best phone for blogging?
</li>
</ol>
</p>
<p>
Yes, Yes and Yes you can create a website with your phone, you can blog from your mobile phone and you dont need a special phone for  blogging. 
</p>

<h1>
What is moblie bloging?
</h1>
<p>
Mobile blogging is a method of <b>publishing to a website or blog from a mobile phone or other handheld device.</b> A mobile blogs help habitual bloggers to post write-ups directly from their phones even when on the move.
</p>
<p>
Well i hope from the defination you understand what a mobile blog is and what we are trying to do here...
well as you might have guessed we are trying to create a free website or blog which you can update, design and post to directly from your mobile phone. 
</p>

<h2>
Requirements:
</h2>
<ol class='p-article__items'>
<li>
HTML
</li>
<li>
CSS
</li>
<li>
JAVASCRIPT (optional)
</li>
<li>
Github account
</li>
<li>
SPCK Editor
</li>
</ol>
<p>
Before you beging this series with me, it is required you just have a basic knowledge of Html, Css, and javascript is optional for now, well if you dont have a basic knowledge and you are just hearing about all this for the first time, dont worry this articles <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"> Getting Started With The Web </a>, <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">Structuring the web with HTML </a> should basically get you started. 
</p>

<p>
Other requirements are the github account: Github is a subsidiary of Microsoft which provides hosting for software development and version control using Git. <br>
Now dont worry about the defination, you probably will never need it anyway. All you need is to Create an Account(which is totally free), head over to <a href="https://github.com">Github.com</a> and create an account. 
</p>
<p>
Then <a href="https://spck.io">Spck Editor</a>, this is just a really cool code editor and js sandbox, this is the closest thing that is close to vscode on a mobile phone. <br>
Head over to play store search for "Spck editor" and install it. This editor is what we'll use to write to our blog...
</p>

 <div class="info info--note">
   <div class="info__content">
       <strong>Note:</strong> It is required that you create a github account, and have downloaded and installed the app before you continue. <br>
       Please don't use Opera Mini, use a modern browser like Chrome or Firefox
                </div>
          </div>

<h3>
Getting Started
</h3>
<p>
Now make sure you have created your Github account by signing up <br>
Now Click below link (Open in a different tab) <br>
<a href="https://github.com/barryclark/jekyll-now">Jekyll now starter theme
</a>
</p>
<figure class="p-article__img">
  <img src="/img/jekyll-theme.png" alt="Jekyll now starter theme" />

  <figcaption>
    You should see a page that looks like this
  </figcaption>
 </figure>
 <p>
  Now its time to <b>Fork</b> the starter theme <br>
  click on the <b>Forks icon</b> 
 </p>
 <figure class="p-article__img">
  <img src="/img/click-forks.png" alt="Jekyll now fork icon" />

  <figcaption>
    Click on the forks icon
  </figcaption>
 </figure>
<p>
The page would reload and you would see a desktop view of the page, just look at the right side of the page at the header (top of the webpage) and click on <b>fork</b>
</p>
<figure class="p-article__img">
  <img src="/img/fork-theme.png" alt="Jekyll now starter theme" />

  <figcaption>
    Click the fork icon there
  </figcaption>
 </figure>

 <p>
After doing that the next page you are going to see would ask you to change your <b>Forked theme name</b> <br>
Now change the name of the website to: "github-username.github.io"
 </p>
 <figure class="p-article__img">
  <img src="/img/rename-theme.png" alt="Jekyll now starter theme" />

  <figcaption>
   Old one looks like this
  </figcaption>
 </figure>

 <figure class="p-article__img">
  <img src="/img/rename-theme-me.png" alt="rename Jekyll now starter theme" />

  <figcaption>
   Change it to something like this "with your own github username"
  </figcaption>
 </figure>

 <p>
Now its time to create a github token for the spck editor app you downloaded earlier... <br>
click on the dropdown menu at the top of the page
 </p>
 <figure class="p-article__img">
  <img src="/img/click-settings.png" alt="Click on settings" />

  <figcaption>
  Dropdown menu
  </figcaption>
 </figure>
 <p>
 <ol>
 from the dropdown: 
 <br>
<li> Click on settings </li>
<li> developer settings </li>
<li> personal access tokens </li>
<li> Generate New Token </li>
<li> You may be asked for password, just enter your github password and continue </li> 

 <ol>
<li> Give it a note: Spck editor </li>
<li>click on the repo box (select everything under it) </li>
<li>Scroll select <b>write:packages</b> and <b> admin:org</b> </li>
<li>Click "Generate Token"</li>
 </ol>
 </ol>
 </p>
 <figure class="p-article__img">
  <img src="/img/spck-token.png" alt="Set up github personal token" />

  <figcaption>
 Select the repo box
  </figcaption>
 </figure>
 <p>
After you have generated your token ensure you copy it to your phone clipboard because you wont see again unless you re-generate it.
 </p>
  <figure class="p-article__img">
  <img src="/img/spck-token-sucess.png" alt="copy the github personal token" />

  <figcaption>
 Ensure you copy the token
  </figcaption>
 </figure>

 <p>
If you have followed this guide perfectly, you are just a few steps away from your newly phone managed blog or website.
 </p>

 <p>
Moving on, Do you remember the "Spck editor" you downloaded earlier? Yep i guess you do <br>
Now open it up <br>
And you should see something that looks like this image below
 </p>
 <figure class="p-article__img">
  <img src="/img/spck-editor.png" alt="Open Spck editor" />

  <figcaption>
 Yep. Click on the first tab and you should see this
  </figcaption>
 </figure>
 <p>
Next step is to look at the <b>PROJECTS</b> tab <br>
Click on the third icon (The fork icon)
 </p>
 <figure class="p-article__img">
  <img src="/img/spck-editor-fork.png" alt="Open Spck editor fork icon" />

  <figcaption>
 On the projects tab, click the fork icon (the third icon)
  </figcaption>
 </figure>
 <p>
When you click on fork icon <br>
Select credentials <br> 
Set up your Credentials as follows: <br> 
name: Github username <br> 
password/token: The token you Generated earlier (The one you copied) <br> 
email: for email (The one used in opening your github account) <br>
Then just Click on "OK"
 </p>
 <p>
Now its time to clone your website to your mobile phone <br>
Click on the Fork icon again <br>
Just enter your Url like this </p> 
<figure class="p-article__img">
  <img src="/img/spck-clone.png" alt="clone website on Spck editor" />

  <figcaption>
 Enter your repo link 
  </figcaption>
 </figure>
 <p>
 url: https://github.com/github-username/github-username.github.io 
 <br>
just change "github-username" to your own github username <br>
then just Click on "OK" <br>
and wait for your website to clone (Speed depends on your internet connection, mine took a few seconds)
 </p>
 <figure class="p-article__img">
  <img src="/img/spck-editor-success.png" alt="Successfully clone website on Spck editor" />

  <figcaption>
 After you have finished cloning you should see something like this
  </figcaption>
 </figure>
 <p>
Yep, You guessed it, that's all. If you followed the steps correctly then i congratulate you(yeah you can feel proud). You have created a free website, and you can now manage, edit and design it on your mob ile phone.   
 </p>

 <p>
To view your website <br>
go to your browser <br>
type in your website url <br>
"github-username.github.io" <br>
in my case "sprucestatic.github.io"
 </p>
 <figure class="p-article__img">
  <img src="/img/theme-preview.png" alt="Free website created with jekyll on github" />

  <figcaption>
Your new site should look like this
  </figcaption>
 </figure>
 <p>
Honestly you should be proud now. Welcome to the bloggers and website owners association of the world. <br>
Now you can go and tell your family members, friends, share it on facebook and twitter, about your new website...  
 </p>
<p>
Though not really much now, Before the end of this series you will learn how to create and update a fully functional blog from your mobile phone...
</p>
 <p>
  Next step is Customizing your new website, and introducing you to <b>GIT</b> on your mobile phone... Thanks for reading.
 </p>
 
<h6>
Next part of this series
</h6>
<p>
<a href="/blog/create-a-blog-on-your-mobile-phone-with-jekyll-on-github-part-2.html">Create a blog on your mobile phone part 2</a>
</p>




