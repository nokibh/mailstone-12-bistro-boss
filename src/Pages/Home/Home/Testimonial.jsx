import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:7000/review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section className="mt-20 p-6">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div>
              <p>{review.details}</p>
              <p className="text-2xl text-orange-400 text-center">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </section>
  );
};

export default Testimonial;
