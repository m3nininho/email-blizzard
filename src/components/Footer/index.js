import logo from '../../assets/images/logo.png'

function Footer(){

  return /*html*/`
  
  <footer class="bg-bgMain">
    <img class="mx-auto w-40" src=${logo}>
    <div class="max-w-xl p-15 mx-auto">

    <div>
      <nav>
        <ul class="flex justify-center mt-10 gap-5">
          <li><a class=" text-textFooter text-xs font-bold" href="https://careers.blizzard.com/br/pt?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=text-link-footer-careers">Empregos</a></li>

          <li><a class=" text-textFooter text-xs font-bold" href="https://www.blizzard.com/pt-br/company/about/?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=text-link-footer-about">Sobre</a></li>

          <li><a class=" text-textFooter text-xs font-bold" href="https://www.blizzard.com/pt-br/legal/bbee59bd-7386-4098-b584-d79a2d439fdb/politica-de-privacidade-da-blizzard-entertainment">Privacidade</a></li>

          <li><a class=" text-textFooter text-xs font-bold" href="https://www.blizzard.com/pt-br/legal/c703cd95-b650-4721-8e77-934c217e9096/termos-de-uso-do-site-da-blizzard">Termos</a></li>

          <li><a class=" text-textFooter text-xs font-bold" href="https://us.battle.net/support/pt/">Suporte</a></li>
        </ul>
      </nav>
    </div>

    <div class=" mt-8 p-5">
      <p class=" text-textFooter2 text-xs">Se não quiser receber o boletim eletrônico nem informações sobre os produtos da <span class=" bg-bgTextFooter">Blizzard</span>, <a class=" text-textBoldWhite" href="https://03.emailinboundprocessing.com/enc_user/unsubscribe?d=%241%24waNZGt%2B4s9apj7ojBwD5wA%3D%3D%24k8z6FSvNS1Sngf80hXSz80WnH%2BmHaI5Ks7%2BXYpZXQnLLrfsipW123R6vNxFK%0ACATyVw%2BKtoEiaGX7ijuvhymdIByOTyGMeYM%2B39wIHmCrMcg8ftoq%2B3Uabuwa%0AIZQRY8KikoMZGKdaEW02wgKyPkAta%2Fq%2FybA3OpXMPx0Hs6G4ssocJyKLlRv%2F%0A3MtIMvojV9UM0u3Xyxtun4uCfR%2BlcJqw7buIJ5NQtzwQxDJztBDSagxF1mX2%0AiNpJBXnDuDImza2SRpyVQMpkaCmTiLJzMGC9YmAkzLP9DibqhFkQdE%2FIGP8%3D&1=1">clique aqui.</a></p>

      <p class=" text-textFooter2 text-xs leading-5 mt-5">© 2022 <span class=" bg-bgTextFooter">Blizzard</span> Entertainment, Inc. Dragonflight é uma marca e World of Warcraft, Warcraft, WoW e <span class=" bg-bgTextFooter">Blizzard</span> Entertainment são marcas registradas da <span class=" bg-bgTextFooter">Blizzard</span> Entertainment, Inc. nos EUA e/ou em outros países. Todas as outras marcas registradas aqui mencionadas pertencem aos seus respectivos proprietários.</p>

      <p class=" text-textFooter2 text-xs  mt-5"><span class=" bg-bgTextFooter">Blizzard</span> Entertainment, P.O. Box 18979, Irvine, CA 92623
      </p>
    </div>

    </div>
  </footer>
  `
}

export default Footer