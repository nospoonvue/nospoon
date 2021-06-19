
<template>
    <div id="app">
      	<div id="wrapper">
				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<header id="header" class="notranslate">
									<a href="index.html" class="logo "><strong>noSpoon Media, education for the future...</strong></a>
									<ul class="icons">
										<!-- <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>-->
										<li><a href="https://www.facebook.com/nospooneducation" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="https://www.linkedin.com/company/nospoonmedia/" target="_blank" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>									
										<li><a href="https://www.instagram.com/starbase18/" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="https://www.youtube.com/channel/" target="_blank" class="icon brands fa-youtube"><span class="label">YouTube</span></a></li>
										
										<!-- <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>		-->
                   						<li><nav id="nav"><router-link to="/login"><div id="un">{{loginLabel}}</div></router-link></nav></li>
										<li>
											<a @click="setLanguage('ENG')" ><img  src="images/united-kingdom.svg" class="flag"></a>
											<a @click="setLanguage('NL')"><img src="images/netherlands.svg" class="flag"></a>
											<a @click="setLanguage('PT')" ><img src="images/portugal.svg" class="flag"></a>
										</li>
									</ul>

								</header>

              					<router-view/>

						</div>
					</div>

				<!-- Sidebar -->
				<section>
					<div id="sidebar">
						<div class="inner">
							<div id="logo" style="width:100%;text-align:center">
							<img src="images/nospoon-logo.png" style="max-width:100px; ">
							<div>noSpoon.nl</div>
							</div>
							
							<!-- Search 
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>
							-->
							<div id="cMenu" style="display:none;">

							</div>

							<!-- Menu -->
							
              				 <MenuGenerator :id="2" :iets="iets"></MenuGenerator>
							     
						</div>
						<div id="google_translate_element" style="width:150px;margin-left: auto; margin-right: 0;visibility: hidden;"></div>
                	</div>
				</section>
	 	</div>
		
	</div>

</template>
<style scoped>
.flag
{
	width:20px;
	height:20px;
	padding:1px;
	cursor: pointer;
	text-decoration: none

}
</style>
<script>
//import something from "./assets/js/something.js"
//import "./assets/js/jquery.min.js"
import sideBar from "./assets/js/main.js"
import "./assets/css/main.css"
//import "./assets/css/sss.css"
import MenuGenerator from '@/components/MenuGenerator.vue'





export default {
	components: {MenuGenerator},
	 data() {
		 return {
			 user: {},
			 loginLabel:'Login',
			 keyId: 1,
			 iets:4
		 }
   	}
 ,
  mounted() {

      let translateScript = document.createElement('script');
      translateScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.head.appendChild(translateScript);

   
	sideBar();
	

  },
   methods: {
		sideBar,
		setLanguage: function(lang)
		{
			
			this.$store.commit('setLanguage',lang);		
			this.keyId++;
			var menuItems = document.getElementsByClassName('goog-te-menu-frame skiptranslate')[0].contentWindow.document.querySelectorAll("[class^='goog-te-menu2-item']");
			menuItems.forEach(element => {
				if(element.firstElementChild.innerHTML.indexOf('Dutch')>-1 && lang == "NL")
				{
					element.click();	
					return;				
				}
				else if(element.firstElementChild.innerHTML.indexOf('Portuguese')>-1 && lang == "PT")
				{
					element.click();	
					return;				
				}
				else if(element.firstElementChild.innerHTML.indexOf('English')>-1 && lang == "ENG")
				{
					//Eng, default
					document.getElementById(':2.container').contentWindow.document.getElementById(':2.close').click();
				}
			});

		}   
      
   },
   created() 
    {		
		this.iets = 4;
	
		if(localStorage.user)
		{
		this.user = JSON.parse(localStorage.user);

		if(this.user.Name)
		{
			this.loginLabel = this.user.Name;
		}
		}
	

    }
}

</script>


