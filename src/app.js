import {createApp} from "petite-vue";
import "./style/style.scss"
createApp({
   mobileMenuActive: false,
    alertMe() {
      alert('works')
    },
    mounted() {
        document.body.classList.remove('opacity-0')
    },
    menuInit(el) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > el.getBoundingClientRect().height) {
                el.classList.add("bg-white")
            } else {
                el.classList.remove("bg-white")
            }
        })
    }

}).mount()
