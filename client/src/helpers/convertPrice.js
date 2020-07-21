export default function convertPrice(price = 0, currency = "Rp") {
   price = price
      .toString()
      .replace(/\D/g, "") //replace non-digit character
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // formatting number in JavaScript
   price = price && `${currency} ${price}`;
   return price;
}