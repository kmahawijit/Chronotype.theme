Chronotype.theme ([DEMO](http://jtheissen.com/ios/Chronotype.theme/))
================

A text based clock widget for jailbroken iOS devices (Winterboard and PPH)
-------------------------------------------------------------------------------------------------------

A jQuery based typographic clock for use as a page widget (PerPageHtml) (or, possibly, a Lock Screen [Winterboard]) on jailbroken iPhones.

Why?

The purpose of this little project was really just to mess around in JS and try out the slabtext plugin. There are a couple dozen things you'll find in runClock.js that could be done a lot better. The decision to use slabtext at all being chief among them - but that was really my goal when I started. I also added ideas randomly and with little or no forethought so it became a mess of ideas chopped into one another haphazardly and has only been improved slightly since. At some point I may go back and rewrite the core pieces of the code so things happen in a more logical progression - this should also eliminate all of my little quick fixes.

Libraries Used: [jQuery](http://jquery.com) and [slabText](http://www.frequency-decoder.com/demo/slabText/)

To Install:

- Download and unzip using iFile
- Copy the Chronotype.theme folder into either PerPageHtml (/var/mobile/Library/PerPageHTML) or Winterboard (/var/stash/Themes.xxxxxx)
- Edit the options in configure.js to customize
- Activate in either Winterboard or PPH

Known issues:

- Needs a background image for Winterboard lock screen
- Top Margin on lockscreen also needs tweaking
- More theme options ... maybe weather or some other info

