import arrow1 from '../../assets/images/flecha-cima.png'
import arrow2 from '../../assets/images/flecha-baixo.png'

// Social
import home from '../../assets/images/social/home.png'
import facebook from '../../assets/images/social/facebook.png'
import twitter from '../../assets/images/social/twitter.png'
import youtube from '../../assets/images/social/youtube.png'
import reddit from '../../assets/images/social/reddit.png'
import instagram from '../../assets/images/social/instagram.png'

function Conect(){
return /*html*/`
<section class=" bg-bgMain">
  <img class="w-screen mb-10" src=${arrow1}>
  <div class="max-w-xl p-15 mx-auto">
    <h2 class="text-center text-textConect text-2xl">Conecte-se</h2>
    <div>
      <nav>
        <ul class="flex justify-center gap-3 mt-5">
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6" src=${home}></a>
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6"  src=${facebook}></a>
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6"  src=${twitter}></a>
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6"  src=${youtube}></a>
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6"  src=${reddit}></a>
          <li><a href="https://dragonflight.blizzard.com/pt-br?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=social-link-official-website"><img class="w-6"  src=${instagram}></a>
        </ul>
      </nav>
    </div>
  </div>
  <img class="w-screen mt-10" src=${arrow2}>
</section>
`
}
export default Conect