<script lang="ts">
  import MenuEntry from "./menu_entry.svelte";
</script>

<!--Home-->
<div class="flex flex-row">
  <!--Informations-->
  <div class="m-2 flex w-2/6 justify-center px-4">
    <div class="shadown-2x1 flex w-64 justify-center space-y-6 rounded-lg border border-black bg-[#8F9BBA]">
      <div class="flex flex-col space-y-6">
        <div class="w-80 overflow-visible rounded-lg border border-black bg-[#6B7FB3] text-white shadow-2xl">
          <h1 class="p-4 text-center text-2xl font-normal">Informations:</h1>
        </div>
        <div class="shadow-2x1 w-80 overflow-visible rounded-lg border border-black bg-[#A8B4D1]">
          <p class="text-center text-xl text-white">Name:</p>
        </div>
        <p class="text-center text-white">Louis T.</p>
        <div class="shadow-2x1 w-80 overflow-visible rounded-lg border border-black bg-[#A8B4D1]">
          <p class="text-center text-xl text-white">Hobbys:</p>
        </div>
        <ul class="list-inside list-disc text-center">
          <li class="text-white">Brazilian Jiu Jitsu</li>
          <li class="text-white">Programming</li>
        </ul>
        <div class="shadow-2x1 w-80 overflow-visible rounded-lg border border-black bg-[#A8B4D1]">
          <p class="text-center text-xl text-white">Danke an:</p>
        </div>
        <ul class="list-inside list-disc text-center text-white underline underline-offset-1">
          <li><a href="https://mikecraft1224.tk" class="text-white">Mars#1224</a></li>
          <li><a href="https://Fabian9799.de" class="text-white">Fabian#9799</a></li>
          <li><a href="http://play.devin6076.de/" class="text-white">BiCrazy#6076</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!--Name+Bild-->
  <div class="m-2 flex w-2/6 justify-center px-4">
    <div class="shadown-2x1 flex w-64 justify-center space-y-6 rounded-lg border border-black bg-[#8F9BBA]">
      <div class="flex flex-col space-y-6">
        <div class="w-80 overflow-visible rounded-lg border border-black bg-[#6B7FB3] text-white shadow-2xl">
          <h1 class="p-4 text-center text-2xl font-normal">Louis T.#2469</h1>
        </div>
        <div class="flex justify-center">
          <img src='' alt="logo" class="" />
        </div>
      </div>
    </div>
  </div>
  <!--Projekte-->
  <div class="m-2 flex w-2/6 justify-center px-4">
    <div class="shadown-2x1 flex w-64 justify-center space-y-6 rounded-lg border border-black bg-[#8F9BBA]">
      <div class="flex flex-col space-y-6">
        <div class="w-80 overflow-visible rounded-lg border border-black bg-[#6B7FB3] text-white shadow-2xl">
          <h1 class="p-4 text-center text-2xl font-normal">Projekte:</h1>
        </div>
        <MenuEntry name="Schulübersicht" type="t">
          <div slot="content">
            <MenuEntry name="Infotext zu A" type="c">
              <div slot="content">
                <p>Louis T.</p>
              </div>
            </MenuEntry>
          </div>
        </MenuEntry>
        <MenuEntry name="Websites" type="t">
          <div slot="content">
            <MenuEntry name="Test" type="c">
              <div slot="content">
                <ul class="list-inside list-disc underline underline-offset-1">
                  <li><a href="https://first-louist.netlify.app">Erste-Website</a></li>
                  <li><a href="https://second-louist.netlify.app/index.html">Zweite-Website</a></li>
                  <li><a href="https://third-louist.netlify.app">Dritte-Website</a></li>
                  <li><a href="https://fourth-louist.netlify.app">Vierte-Website</a></li>
                  <li><a href="https://bjjj-louist.netlify.app/">Brazilian-Jiu-Jitsu</a></li>
                </ul>
              </div>
            </MenuEntry>
          </div>
        </MenuEntry>
        <MenuEntry name="Hypixel-Stats" type="t">
          <div slot="content">
            <MenuEntry name="Test" type="c">
              <div slot="content">
                <p>Louis T.</p>
              </div>
            </MenuEntry>
          </div>
        </MenuEntry>
     </div>
    </div>
  </div>
</div>
<br />
