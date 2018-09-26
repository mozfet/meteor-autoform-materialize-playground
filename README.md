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

Version 4.0.6 of this demo app was manual smoke tested with:
+ OSX High Sierra 10.13.6
+ Chrome Version 62.0.3497.81 (Official Build) (64-bit)
+ Meteor 1.7.0.5
+ Simple Schema 0.5 (NPM Package)
+ Materialize CSS 1.0.0-rc2 (NPM Package)
+ Hammerjs 2.0.8 (NPM Package)
+ Aldeed Autoform 6.3.0 (Atmosphere Package)
+ Aldeed Collection2 2.1.2 (Atmosphere Package)
+ Mozfet Autoform Materialize Modals 1.1.5 (Atmosphere Package)
+ Mozfet Autoform Materialize Files 2.1.0 (Atmosphere Package)
+ Mozfet Autoform Medium 2.0.4 (Atmosphere Package)
+ Mozfet Material Icons 1.0.1 (Atmosphere Package)
+ Ostrio Files 1.10.2 (Atmosphere Package)
+ FourSeven SCSS 4.9.0 (Atmosphere Package)
+ NoUiSlider 0.5.0 (NPM Package)
+ Wnumb 1.1.0 (GIT Repo)
+ Material Design Icons Fonts 3.0.1 (Atmosphere)

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
