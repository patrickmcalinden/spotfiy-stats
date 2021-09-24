gsap.registerPlugin(ScrollTrigger);
var view = gsap.timeline();
ScrollTrigger.saveStyles("");

gsap.from('.navbar',{
    opacity: 0,
    duration: 1,
    y: -3100});
gsap.from('.first',{
    opacity: 0,
    duration: 1,
    x: -3100});
gsap.from('.greeting-name',{
    opacity: 0,
    duration: 1,
    x: 3100});
gsap.from('.comma',{
    opacity: 0,
    duration: 1,
    x: 3100});
gsap.from('.scroll-down-message',{
    opacity: 0,
    duration: 1,
    y: 3100});
    
