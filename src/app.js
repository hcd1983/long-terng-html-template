import {createApp} from "petite-vue";
import gsap from "gsap";
import smallNum from "./js-components/smallNum";
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
        isFirst() {
            return this.total && this.current === 0
        },
        next() {
            console.log(this.container)
            if (this.isRunning || this.current === this.items.length - 1) {
                // backToZero()
                return
            }
            this.isRunning = true
            const nextItem = this.items[this.current + 1]
            const moveDistance = nextItem.getBoundingClientRect().left - this.carouselEl.getBoundingClientRect().left
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
            const lastItem = items[current - 1]
            const moveDistance = -(lastItem.getBoundingClientRect().left - this.carouselEl.getBoundingClientRect().left)
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
            window.carouselEl = this.carouselEl
            window.container = this.container
            window.items = this.items
            console.log(this.container)
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


