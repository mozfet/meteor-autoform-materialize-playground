# Meteor AutoForm Materialize Playground
Playground and reference implementation for AutoForm Materialize suite.

Version 3.3.0 of this app was manual smoke tested and seemed to work ok on 6 December 2017 using:
+ Latest stable version of Chrome on latest stable version iOS
+ Meteor 1.6
+ Simple Schema 0.5
+ Materialize CSS 0.100.2
+ Autoform 6.2.0
+ Autoform Materialize Modals 1.1.2

## Installation ##
in your projects directory
```
$ git clone https://github.com/mozfet/meteor-autoform-materialize-playground.git
$ cd meteor-autoform-materialize-playground
$ meteor npm install
$ meteor
```

## Useage ##
1. open localhost:3000 using a browser
2. click the example you want to see
3. play with the examples
4. look at the code

## This package is part of a suite ##
[mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
[mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
[mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
[mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
[mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)

## Todo ##
 - Upgrade to noUiSlider 10.0.0. This is needed to remove non critical warning on client console:
 ```
 [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive.
 ```
 - See the (issue on github)[https://github.com/leongersen/noUiSlider/issues/785]
