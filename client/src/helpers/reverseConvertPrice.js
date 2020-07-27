export default function reverseConvertPrice(str = '') {
   return Number(str.replace(/\D+/g, ''))
}