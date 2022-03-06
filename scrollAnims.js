// Prosciutkie animacje z gsapem.

gsap.registerPlugin( ScrollTrigger )

//  ----------------- STR 1

const btns_container = document.querySelector( '.btns_container' )
const left_part = document.querySelector( '#left_part' )
// const rightPart = document.querySelector( '#rightPart' )
gsap.fromTo( left_part, { opacity: 0, x: "-=150" }, { opacity: 1, x: 0, scrollTrigger: { trigger: left_part, start: 'top bottom' } } )
gsap.fromTo( btns_container, { opacity: 0, y: "+=150" }, { opacity: 1, y: 0, scrollTrigger: { trigger: btns_container, start: 'top bottom' } } )

//  ----------------- STR 2
const p2_articles_headers = document.querySelectorAll( "#p2 > article > header" )
const p2_articles_texts = document.querySelectorAll( "#p2 > article > p" )
const p2_articles_arrows = document.querySelectorAll( "#p2 > article > .arrow" )
const p2_articles_images = document.querySelectorAll( "#p2 > article > .phone_pic" )


p2_articles_headers.forEach( header =>
{
   gsap.fromTo( header, { opacity: 0, y: "+=20" }, { opacity: 1, y: 0, scrollTrigger: { trigger: header, start: 'top 90%' } } )
} )


p2_articles_texts.forEach( text =>
{
   gsap.fromTo( text, { opacity: 0, x: "+=20" }, { opacity: 1, x: 0, scrollTrigger: { trigger: text, start: 'top 90%' } } )
} )


p2_articles_arrows.forEach( arrow =>
{
   gsap.fromTo( arrow, { opacity: 0, x: "-=20" }, { opacity: 1, x: 0, duration: 0.2, scrollTrigger: { trigger: arrow, start: 'top 90%' } } )
} )



//  ----------------- STR 3

const smallPic = document.querySelector( '#white_container_top_header > img:nth-child(1)' )
gsap.fromTo( smallPic, { opacity: 0, x: "-=20", y: "-20%" }, { opacity: 1, x: 0, y: "-37%", duration: 0.4, scrollTrigger: { trigger: smallPic, start: 'top bottom' } } )