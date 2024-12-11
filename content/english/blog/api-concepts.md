---
title: "Concepts"
categories: ["Guides"]
author: "Geofrey Ernest"
tags: ["api"]
draft: false
date: "2024-12-11"
---



<!--more-->

Each request requires a `site_id` parameter which is the domain of your site as configured in Vince. If you're unsure, navigate to your site
settings in Vince and grab the value of the `domain` field.

## Metrics

You can specify a `metrics` option in the query, to choose the metrics for each instance returned. See here for a full overview of [metrics and their definitions](/blog/api-metrics-and-definitions). The metrics currently supported in Stats API are:

| Metric            | Description                                                                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `visitors`        | The number of unique visitors.                                                                                                                            |
| `visits`          | The number of visits/sessions                                                                                                                             |
| `pageviews`       | The number of pageview events                                                                                                                             |
| `views_per_visit` | The number of pageviews divided by the number of visits. Returns a floating point number. Currently only supported in Aggregate and Timeseries endpoints. |
| `bounce_rate`     | Bounce rate percentage                                                                                                                                    |
| `visit_duration`  | Visit duration in seconds                                                                                                                                 |
| `events`          | The number of events (pageviews + custom events). When filtering by a goal, this metric corresponds to "Total Conversions" in the dashboard.              |
| `conversion_rate` | The percentage of visitors who completed the goal. Requires an `event:goal` filter or `event:goal` property in the breakdown endpoint                     |
| `time_on_page`    | The average time users spend on viewing a single page. Requires an `event:page` filter or `event:page` property in the breakdown endpoint.                |

## Time periods

The options are identical for each endpoint that supports configurable time periods. Each period is relative to a `date` parameter. The date should follow the standard ISO-8601 format. When not specified, the `date` field defaults to `today(site.timezone)`.
All time calculations on our backend are done in the time zone that the site is configured in.

* `12mo,6mo` - Last n calendar months relative to `date`.
* `month` - The calendar month that `date` falls into.
* `30d,7d` - Last n days relative to `date`.
* `day` - Stats for the full day specified in `date`.
* `custom` - Provide a custom range in the `date` parameter.

When using a custom range, the `date` parameter expects two ISO-8601 formatted dates joined with a comma as follows `?period=custom&date=2021-01-01,2021-01-31`.
Stats will be returned for the whole date range inclusive of the start and end dates.

## Properties

Each pageview and custom event in our database has some predefined _properties_ associated with it. In other analytics tools, these
are often referred to as _dimensions_ as well. Properties can be used for filtering and breaking down your stats to drill into
more depth. Here's the full list of properties we collect automatically:

| Property                | Example                       | Description                                                                                                                             |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `event:goal`            | Register                      | A custom action that you want your users to take. To use this property, you first need to configure some goals in the [site settings](/blog/website-settings), or via the [Sites API](/blog/sites-api). The value is the goal's `display_name`. Learn more about goals [here](/blog/goal-conversions).                            |
| `event:page`            | /blog/remove-google-analytics | Pathname of the page where the event is triggered. You can also use an asterisk to group multiple pages (`/blog*`)                      |
| `event:hostname`        | example.com                   | Hostname of the event. At this stage, breaking down on hostname is not supported and you can only use this property for filtering. Use an asterisk to filter by multiple hostnames at once, e.g. `*.example.com`.
| `visit:entry_page`      | /home                         | Page on which the visit session started (landing page).                                                                                 |
| `visit:exit_page`       | /home                         | Page on which the visit session ended (last page viewed).                                                                               |
| `visit:source`          | Twitter                       | Visit source, populated from an url query parameter tag (`utm_source`, `source` or `ref`) or the `Referer` HTTP header.                 |
| `visit:referrer`        | t.co/fzWTE9OTPt               | Raw `Referer` header without `http://`, `http://` or `www.`.                                                                            |
| `visit:utm_medium`      | social                        | Raw value of the `utm_medium` query param on the entry page.                                                                            |
| `visit:utm_source`      | twitter                       | Raw value of the `utm_source` query param on the entry page.                                                                            |
| `visit:utm_campaign`    | profile                       | Raw value of the `utm_campaign` query param on the entry page.                                                                          |
| `visit:utm_content`     | banner                        | Raw value of the `utm_content` query param on the entry page.                                                                           |
| `visit:utm_term`        | keyword                       | Raw value of the `utm_term` query param on the entry page.                                                                              |
| `visit:device`          | Desktop                       | Device type. Possible values are `Desktop`, `Laptop`, `Tablet` and `Mobile`.                                                            |
| `visit:browser`         | Chrome                        | Name of the browser vendor. Most popular ones are `Chrome`, `Safari` and `Firefox`.                                                     |
| `visit:browser_version` | 88.0.4324.146                 | Version number of the browser used by the visitor.                                                                                      |
| `visit:os`              | Mac                           | Name of the operating system. Most popular ones are `Mac`, `Windows`, `iOS` and `Android`. Linux distributions are reported separately. |
| `visit:os_version`      | 10.6                          | Version number of the operating system used by the visitor.                                                                             |
| `visit:country`         | US                            | ISO 3166-1 alpha-2 code of the visitor country.                                                                                         |
| `visit:region`          | US-MD                         | ISO 3166-2 code of the visitor region.                                                                                                  |
| `visit:city`            | 4347778                       | [GeoName ID](https://www.geonames.org/) of the visitor city.                                                                            |

### Custom properties

In addition to properties that are collected automatically, you can also query for [custom properties](/blog/custom-props/introduction).
To filter or break down by a custom property, use the key `event:props:<custom_prop_name>`. [See example](#breakdown-custom-event-by-custom-properties) for how to use it.

## Filtering

Most endpoints support a `filters` query parameter to drill down into your data. You can filter by all properties described in the [Properties table](#properties), using the following operators:

| Operator        | Usage example                              | Explanation                                                               |
|-----------------|--------------------------------------------|---------------------------------------------------------------------------|
| `==`            | `event:goal==Signup`                       | Simple equality - completed goal "Signup"                                 |
| `!=`            | `visit:country!=FR`                        | Simple inequality - country is not France                                 |
| <code>\|</code> | <code>visit:source==Github\|Twitter</code> | IN expression - visit source is Github or Twitter.                        |
| `;`             | `event:goal==Signup;visit:country==DE`     | AND expression - completed goal "Signup" and country is Germany           |
| `*`             | `event:page==/blog/*`                      | Wildcard - matches any character                                          |

:::tip Want to use the `|` character in a filter value?
You can escape it with a backslash. For example, `visit:utm_campaign==campaign\|one` will let you filter by the literal `campaign|one` value
:::

## Limitations

* It is currently possible to exclude only one value at a time (e.g. `visit:browser!=Chrome|Safari` is not yet supported)
* Wildcard characters cannot be used in combination with an IN expression (except for pageview goals - e.g. `event:goal==Signup|Visit+/register` is supported)
* Inequality `!=` operator is currently not supported for goals

