---
title: Pageview goals 
author: "Geofrey Ernest"
categories: ["Guides"]
tags: ["goals"]
---

<!--more-->

Pageview goals allow you to measure how many people visit a specific section of your site (for instance dynamically created checkout pages for ecommerce) and get referral sources and other details for those conversions. 

Since page views are collected automatically, you don’t need to change your website’s code to measure page URL goals.

To get started with "**Pageview Goals**", go to [your website's settings](/blog/website-settings) in Vince Analytics instance and visit the "**Goals**" section. You should see an empty list with a prompt to add a goal.

{{< image src="images/guides/goal_conversions.png" >}}

Click on the "**+ Add goal**" button to go to the goal creation form.

Select `Pageview` as the goal trigger and enter the pathname of the page you would like your visitors to hit. The pathname must match the page path you can see in your Vince Analytics dashboard.

{{< image src="images/guides/goal_pageview.png" >}}

Next, click on the "**Add goal**" button and you’ll be taken back to the goals page. When you navigate back to your Vince Analytics dashboard, you should see the number of visitors who reached the specified page or group of pages. Goal conversions are listed at the very bottom of the dashboard.

## Group your pages using wildcards

Do you want to analyze the total traffic to specific sections of your site or to group your dynamically created pages? You can use regular expressions to match patterns in your page path URLs. eg `/blog*` full regular expression syntax is supported, there are no limitations.
