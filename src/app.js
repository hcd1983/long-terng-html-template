import {createApp} from "petite-vue";
import "./style/style.scss"

// 全域使用 petite vue

// 輪播圖
function carousel (props) {
    return {
        total: 5,
        current:0,
        next() {
            this.current ++
        }
    }
}
// svg - 按鈕
function arrBtn (props = {}) {
    return {
        $template: '#svg_arrow_button',
        direction: props.direction || "right",
    }
}

// 斜線小數字
function smallNum( num = '01' ) {
    return {
        $template: '#small_number',
        num
    }
}


createApp({
    count: 0,
    carousel,
    arrBtn,
    smallNum,
   mobileMenuActive: false,
    alertMe() {
      alert('works')
    },
    tester: ['A', 'B', 'C'],
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
    },
    handleContactFormSumbit(e) {
       e.preventDefault()
       console.log(e)
    }
}).mount()


