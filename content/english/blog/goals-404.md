---
title: 404 error pages tracking
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["goals"]
---


<!--more-->


Tracking 404 error pages is essential for many site owners and Vince helps you automate this process. With our "**404 Error Pages Tracking**" you can:

* Get an easy overview of which 404 pages are accessed by your visitors
* See where visitors find broken links to your 404 error pages
* Then you can manually fix broken links and redirect error pages


If you want to track 404 error pages on your site, here's what you need to do:

## 1. Make sure your tracking setup includes the second line

First, make sure your tracking setup for Vince Analytics includes the second line as shown below:

```html
<script defer data-domain="yourdomain.com" src="http://localhost:8080/js/script.js"></script>
<script>window.vince = window.vince || function() { (window.vince.q = window.vince.q || []).push(arguments) }</script>
```

You need to place your Vince Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

## 2. Paste this piece of code to your 404 page template

Add this code to your 404 page. For instance, if you're using WordPress, your 404 page template will be called `404.php`. It will be located within your theme files.

```html
<script>document.addEventListener('DOMContentLoaded', function () { vince('404') });</script>
```

You can place this code anywhere in the `<head>` or `<body>` section of your 404 page template.

## 3: Create a custom event goal in your Vince Analytics account

404 error pages won't show up automatically. You'll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to [your website's settings](/website-settings) in your Vince Analytics account and visit the "**Goals**" section. You should see a prompt to add a goal.


{{< image src="images/guides/goal_conversions.png" >}}

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `404`.


{{< image src="images/guides/goals_404.png" >}}

Next, click on the "**Add goal**" button, and you'll be taken back to the Goals page. After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "**Goal Conversions**" report of your Vince Analytics dashboard. You'll see "**404**" goal as soon as the first visit on an error page has been tracked.

Click on "**404**" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

