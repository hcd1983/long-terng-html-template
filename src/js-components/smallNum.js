export default function (num = '01') {
    const template = `
    <svg class="w-full h-full" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.0625 22.9496H9.41251L21.3125 2.34961H19.9625L8.0625 22.9496Z" fill="#202124"/>
        <text v-if="num" text-anchor="start" x="0" y="9" fill="#202124" font-size="9px" letter-spacing="0.35" font-weight="bolder">{{ num }}</text>
    </svg>
    `
    return {
        $template: template,
        num
    }
}
