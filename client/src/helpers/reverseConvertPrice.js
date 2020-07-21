export default function convertPrice(str = '') {
   return Number(str.replace(/\D+/g, ''))
}