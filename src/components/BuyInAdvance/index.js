
import purchaseImage from "../../assets/images/up.png";


function BuyInAdvance(){
return /*html*/`
  <section class=" bg-bgMain">
    <img class="w-screen" src=${purchaseImage} alt="Imagem promocional">

    <div class="max-w-xl p-15 mx-auto">
        <h1 class="titleDefault">compre antecipadamente dragonflight para desbloquear a mascote drakks</h1>

      <div class=" mt-3 p-5 ">
        <p class="text-textDefault ">Aproveite ao máximo a jornada que se anuncia desbloqueando itens raros fabulosos disponíveis nas edições de <span>World of Warcraft: Dragonflight</span>. Não se esqueça de <span class="textBold">adquirir qualquer edição de Dragonflight na pré-venda</span> para garantir <span class="textBold">uma mascote Drakks exclusiva de pré-venda</span>, um novo draconiano pronto para a batalha que permanecerá ao seu lado aonde você for. Com a pré-venda, você também terá acesso ao novo <span class="textBold">Conjurante Dracthyr</span> a partir de <span class="textBold">15 de novembro</span>.</p>
      </div>

      <div class=" mt-3 p-5 ">
        <h2 class="textBold">Dragonflight - Heroic Edition:</h2>
        <nav>
          <ul class=" flex flex-col list-disc p-10 gap-2">
            <li class="text-textDefault">Dragonflight - Base Edition</li>
            <li class="text-textDefault">Mascote Murxstrasza</li>
            <li class="text-textDefault">Montaria Tece-sonhos Emaranhado</li>
            <li class="text-textDefault">Upgrade de personagem para o nível 60</li>
          </ul>
        </nav>
      </div>

      <div class="p-5 ">
      <h2 class="textBold">Dragonflight - Epic Edition:</h2>
      <nav>
        <ul class=" flex flex-col list-disc p-10 gap-2">
          <li class="text-textDefault">Todo o conteúdo da Heroic Edition</li>
          <li class="text-textDefault">30 dias de jogo</li>
          <li class="text-textDefault">Asas do Despertar (transmogrificação para as costas com 5 cores)</li>
          <li class="text-textDefault">Diadema do Guardião de Feitiços (transmogrificação para a cabeça usada por Sindragosa)</li>
          <li class="text-textDefault">Efeito Pedra de Regresso do Andarilho do Tempo</li>
        </ul>
      </nav>
    </div>

    <div class="flex justify-center mt-5">
      <a class="uppercase text-textBlack px-8 py-4 borderBtn bgBtn font-bold	w-25" href="https://us.shop.battle.net/pt-br/product/world-of-warcraft-subscription?utm_source=wow-12-month-sub-bundle-3-20221101&utm_medium=email&utm_campaign=marketing-br-3&utm_content=button-link-prepurchase-today">compre hoje na pré-venda</a>
    </div>

    <div class="flex justify-center mt-5 flex-col gap-5 pb-10">
      <p class="text-textDefault italic text-xs text-center mt-2"> Requer assinatura ou tempo de jogo de World of Warcraft. Itens de jogo e Upgrade de Personagem para o Nível de Dragonflight indisponíveis em World of Warcraft: Classic, e o Upgrade de Personagem para o nível de Dragonflight só pode ser usado na conta de WoW para a qual foi comprado ou resgatado. A Epic Edition não concede novamente itens já desbloqueados na sua conta.</p>
      <p class="text-textDefault italic text-xs text-center"> A mascote Drakks como bônus da compra está disponível em todas as edições de World of Warcraft: Dragonflight. A Oferta termina com o lançamento de World of Warcraft: Dragonflight em 28 de novembro.</p>
    </div>
    </div>
  </section>
`
}
export default BuyInAdvance