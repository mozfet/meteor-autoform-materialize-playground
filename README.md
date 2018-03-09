# Meteor AutoForm Materialize Playground

Playground and reference implementation for AutoForm Materialize suite.

> **Thank You** This suite of packages is maintained by [ExpertBox.com](http://www.ExpertBox.com) as a thank you to the Open Source community.

## This package is part of a suite ##

[mozfet:meteor-autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize)
[mozfet:meteor-autoform-materialize-modals](https://github.com/mozfet/meteor-autoform-materialize-modals)
[mozfet:meteor-autoform-nouislider](https://github.com/mozfet/meteor-autoform-nouislider)
[mozfet:meteor-autoform-medium](https://github.com/mozfet/meteor-autoform-medium)
[mozfet:meteor-autoform-materialize-playground](https://github.com/mozfet/meteor-autoform-materialize-playground)

## Dependancies

Version 3.6.2 of this example app was manual smoke tested using:
+ Chrome Version 62.0.3202.94 (Official Build) (64-bit)
+ Meteor 1.6.0.1
+ Simple Schema 0.5 (NPM Package)
+ Materialize CSS 0.100.2 (NPM Package)
+ Autoform 6.2.0 (Atmosphere Package)
+ Autoform Materialize 3.6.3 (Atmosphere Package)
+ Autoform Materialize Modals 1.1.5 (Atmosphere Package)
+ Autoform Materialize File 2.0.5 (Atmosphere Package)
+ FourSeven SCSS 4.5.4 (Atmosphere Package)

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

## Todo ##

 - Upgrade to noUiSlider 10.0.0. This is needed to remove non critical warning on client console:
 ```
 [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive.
 ```
 - See the (issue on github)[https://github.com/leongersen/noUiSlider/issues/785]
