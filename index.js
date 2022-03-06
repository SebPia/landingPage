const hamburger = document.querySelector( ".menu" );
const menuItems = document.querySelectorAll( 'body > header > nav > ol > li' )

const fixLayout = () =>
{
   const windowW = window.innerWidth;
   const offSet = 1920 - windowW;

   //str 1
   const phone_hand = document.querySelector( '#rightPart' )
   if ( windowW < 1000 ) phone_hand.style.transform = `scale(0.9) translateX(${ offSet / 15 }px)`

   //str 2
   const p2_images = document.querySelectorAll( '#p2 > article > .phone_pic' )
   const transform_1 = `scale(0.8) rotate(-20.2deg) translateX(-${ offSet / 5 }px)`
   const transform_3 = `scale(0.8) translateX(-${ offSet / 8 }px)`
   p2_images[0].style.transform = transform_1
   p2_images[2].style.transform = transform_3
}

function scrollToTarget ( e )
{
   let id;
   let element;
   id = e.target.id;
   if ( id === '' ) id = e.target.parentElement.id
   document.activeElement.blur();

   switch ( id )
   {
      case 'start':
         element = document.querySelector( "#p1" )
         window.innerWidth <= 1120 && handleHamburgerClick()
         element.scrollIntoView( { behavior: "smooth" } );
         break

      case 'jakToDziala':
         element = document.querySelector( "#p2" )
         window.innerWidth <= 1120 && handleHamburgerClick()
         element.scrollIntoView( { behavior: "smooth" } );
         break

      case 'cennik':
         element = document.querySelector( "#p3" )
         window.innerWidth <= 1120 && handleHamburgerClick()
         element.scrollIntoView( { behavior: "smooth" } );
         break

      case 'logowanie':
         window.innerWidth <= 1120 && handleHamburgerClick()
         window.location.href = "#logowanie"
         break

      case 'rejestracja':
         window.innerWidth <= 1120 && handleHamburgerClick()
         window.location.href = "#rejestracja"
         break

      default:
         break;
   }
}


function handleHamburgerClick ( e ) 
{
   const ol = document.querySelector( "nav > ol" )

   if ( ol.style.display !== "flex" )
   {
      hamburger.classList.add( 'opened' )
      ol.style.display = 'flex'
   }
   else
   {
      hamburger.classList.remove( 'opened' )
      ol.style.display = 'none'
   }
}


function addPopUp ()
{
   // Czyszczenie
   const isExist = document.querySelector( '.formContainer' )
   if ( isExist ) isExist.remove()


   // Dodawanie ;)
   const path = window.location.hash

   if ( path === "#logowanie" || path === "#rejestracja" )
   {

      const header = () => path === "#logowanie" ? "Logowanie" : "Rejestracja";
      const passwordInput2 = () => path === "#rejestracja" ? `<input type="password" placeholder="powtórz hasło" />` : '';

      const form = ` 
      <form class="form">
         <button id="zamknij_pop_up" onclick="closePopUp()">X</button>
         <header id="form_header">
            ${ header() }
         </header>
         <input type="email"  placeholder="E-mail"/>
         <input type="password"  placeholder="Hasło"/> 
         ${ passwordInput2() }
         <input type="submit" value="${ path === "#logowanie" ? `Zaloguj mnie!` : `Zarejestuj mnnie!` }"/>
      </form>
      `
      const formContainer = document.createElement( "div" )
      formContainer.innerHTML = form
      formContainer.classList.add( "formContainer" )
      document.body.appendChild( formContainer )

   }
}


function closePopUp ()
{
   history.replaceState( {}, document.title, window.location.href.split( '#' )[0] );
}

window.addEventListener( 'resize', fixLayout )
window.addEventListener( "hashchange", addPopUp )
window.addEventListener( 'load', () =>
{
   fixLayout()
   addPopUp()
} )


hamburger.addEventListener( 'click', handleHamburgerClick )
menuItems.forEach( item =>
{
   item.addEventListener( 'click', ( e ) => scrollToTarget( e ) )
} )



// Obsługa menu klawiaturą (kliknięcie entera)
document.addEventListener( "keypress", function ( e )
{
   if ( e.key === "Enter" ) document.activeElement.tagName === "LI" && document.activeElement.click()
} );
