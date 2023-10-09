import './Offer.css';

const Offer = () => {
    return (
        <div className='offer-item bg-cover bg-fixed pt-8 my-16 shadow-2xl md:mx-20'>
            <div className='uppercase px-36 py-10'>
                <h2 className='font-semibold text-3xl py-5'>Mother's Day</h2>
                <h1 className='text-7xl text-[#a2864e] pb-4'>Sale</h1>
                <h4 className='text-2xl'>Up tO 30% OFF</h4>
                <button className='btn-buy mt-5'>Shop Now</button>
            </div>
        </div>
    );
};

export default Offer;