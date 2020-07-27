export default function averageRating(countRate, oldRate, rating = 5) {
   return (oldRate + rating) / (countRate + 1)
}