# Meteor AutoForm Materialize Playground
Playground and reference implementation for AutoForm Materialize suite.

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
3. play...
4. look at the code

## This package is part of a suite ##
[mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
[mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
[mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
[mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
[mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)

No longer maintained
- [mozfet:meteor-autoform-modals-materialize](https://github.com/mozfet/meteor-autoform-modals-materialize)
- [mozfet:meteor-materialize-time-picker](https://github.com/mozfet/meteor-autoform-modals-materialize)

## Todo ##
 - Upgrade to Meteor 1.5
 - Upgrade to noUiSlider 10.0.0. This is needed to remove non critical warning on client console:
 ```
 [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive.
 ```
 - See the (issue on github)[https://github.com/leongersen/noUiSlider/issues/785]
