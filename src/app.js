import {createApp} from "petite-vue";
import gsap from "gsap";
import "./style/style.scss"

// 全域使用 petite vue

// 輪播圖
function carousel () {
    return {
        carouselEl: null,
        container: null,
        items: null,
        total: 0,
        current:0,
        isRunning: false,
        isLast() {
            return this.total && this.current === this.items.length - 1
        },
        next() {
            if (this.isRunning || this.current === this.items.length - 1) {
                // backToZero()
                return
            }
            this.isRunning = true
            const currentItem = this.items[this.current]
            const moveDistance = currentItem.getBoundingClientRect().width
            gsap.to(this.container, {x: `-=${moveDistance}`}).then(() => {
                this.current++
                this.isRunning = false
            })
        },
        prev() {
            const {isRunning, current, items, container } = this
            if (isRunning || current === 0) {
                return
            }
            this.isRunning = true
            const currentItem = items[current]
            const lastItem = items[current - 1]
            const moveDistance = lastItem.getBoundingClientRect().width
            gsap.to(container, {x: `+=${moveDistance}`}).then(() => {
                this.current--
                this.isRunning = false
            })
        },
        mounted($el) {
            if (!$el) return
            this.carouselEl = $el.querySelector("._carousel")
            if (!this.carouselEl) return;
            this.container = this.carouselEl.querySelector(".carousel-container")
            this.items = this.container.querySelectorAll(":scope > .carousel-item")
            this.total = this.items.length
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


