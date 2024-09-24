vince is a self hosted web analytics server that is fully open source under AGPLv3 license. While open source, a license is needed to start/operate the server. This post highlights some of the reasons why we choose this path.

vince started as a Go port of [Plausible](https://github.com/plausible/analytics) which is written in elixir. I wanted to use the dashboard  for my personal websites and self hosting elixir application that requires two database for this task was an overkill. To keep the open source spirit alive I released `vince` with the same license as `Plausible` **AGPLv3**

Here are some of the reasons why I choose to impose a license requirement to run the `vince` binary.

## Niche storage technology
It took me three years to arrive at the current storage solution used  by vince. We use `RoaringBitmaps` to efficiently store both data and index of web analytics events. The idea is based on [FeatureBase](https://github.com/FeatureBaseDB/featurebase) but custom designed to work with web events.

This leaves little room for external contributors. Knowledge of Go is not enough to touch this part of the codebase and I can't imagine someone investing  time to learn and be productive enough to help.

**I am not expecting the burden of maintaining the core of `vince` to be shared with the open source commmunity**

`RoaringBitmaps` allows us to store and search billions of events in a cheap commodity server. I will find time in the future to write more about the design and implementation of `RoaringBitmaps` based storage on top of a persistent key value store in pure `Go`.

## Donations come with expectations
There is always an option of not requiring a license but accept donations instead. `vince` is a lobour of love, I would like to keep it this way. I have a vision of what `vince` ought to be.


## Self sustainable
My goal is to eventualy be able to pay people to work on vince.




## Conclusion
It is not possible for someone else to commit to improving/maintining vince without getting paid. A license ensures  the project is sustainable and reduces maintanance burden.