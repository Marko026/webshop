export const StarRating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i key={i} className="fas fa-star text-warning"></i>)
  }
  return (
    <div>
      {stars}
    </div>
  )
}