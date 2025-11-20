import React from 'react';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const FAQ = () => {
    return (
        <div className=' flex flex-col justify-center items-center space-y-3'>
            <h1 className='font-bold text-3xl text-secondary'>Frequently Asked Question (FAQ)</h1>
        <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
<div className='w-[1250px] space-y-4'>
    
        <div className='collapse collapse-arrow bg-[#E6F2F3] rounded-2xl space-y-5 p-2 '>
     <input type="checkbox" className='' />
            <h2 className='collapse-title text-2xl font-semibold'>How does this posture corrector work?</h2>
            <p className='collapse-content'>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p>
        </div>
        <div className='collapse collapse-arrow bg-[#E6F2F3] rounded-2xl space-y-5 p-2 '>
     <input type="checkbox" />
            <h2 className='collapse-title text-2xl font-semibold'>Does it really help with back pain and posture improvement?</h2>
            <p className='collapse-content'>yes, a posture corrector can help somewhat, but it's not a miracle cure. It depends a lot on how you use it, why you're using it, and whether you're combining it with other good habits.</p>
        </div>
        <div className='collapse collapse-arrow bg-[#E6F2F3] rounded-2xl space-y-5 p-2 '>
     <input type="checkbox" />
            <h2 className='collapse-title text-2xl font-semibold'>Does it really help with back pain and posture improvement?</h2>
            <p className='collapse-content'>A posture corrector can help by gently supporting your shoulders and upper back, reminding you to sit or stand straight, and sometimes reducing mild neck, shoulder, or upper back pain. However, it’s not a permanent solution—once you stop wearing it, your posture may revert, and overuse can weaken your muscles. It also won’t fix serious back problems on its own. The best results come when it’s used for short periods (around 30–60 minutes a day) combined with core and back strengthening exercises, stretching, and proper ergonomic habits.</p>
        </div>
        <div className='collapse collapse-arrow bg-[#E6F2F3] rounded-2xl space-y-5 p-2 '>
     <input type="checkbox" />
            <h2 className='collapse-title text-2xl font-semibold'>Does it have smart features like vibration alerts?</h2>
            <p className='collapse-content'>Yes — smart posture correctors with vibration alerts are quite common and can give real-time feedback to help improve your posture. But they’re most effective when used together with posture exercises and awareness, not as the only solution.</p>
        </div>
        <div className='collapse collapse-arrow bg-[#E6F2F3] rounded-2xl space-y-5 p-2 '>
     <input type="checkbox" />
            <h2 className='collapse-title text-2xl font-semibold'>How will I be notified when the product is back in stock?</h2>
            <p className='collapse-content'>When a product is out of stock and you sign up for a back-in-stock alert, you’ll typically be notified via email, which informs you as soon as the item becomes available again. Some stores may also send notifications through SMS or push notifications if they have a mobile app or browser alerts. This way, you can quickly know when the product is restocked and place your order before it sells out again.</p>
        </div>

</div>
<div className=' flex gap-1 '>
    <button className='bg-primary text-black rounded-2xl p-3 px-5'>See More FAQ’s  </button>
<FaSquareArrowUpRight className=' rounded-full m-2 w-[30px] h-[30px]' />
</div>
</div>
    
    );
};

export default FAQ;