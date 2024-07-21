import React from 'react';
import '../styles/PlanBanner.scss';
const PlanBanner: React.FC = () => {
return (
<section className='plan-main'>
   <section id="plan">
      <div className="container">
         <div className="row plan-sec">
            <div className="col-lg-4 float-lg-left ">
               <div className="content">
                  <h3>Choose the plan
                     <span> that fits your needs</span>
                  </h3>
                  <p>Pricing scales from 100 employees to very large implementations with over 10,000 assets</p>
                  <a>
                     <p >For More Details </p>
                  </a>
               </div>
            </div>
            <div className=" offset-lg-2 col-lg-5 col-sm-6  ">
               <div className="row blue-zone">
                  <div className="col-lg-5 free ">
                     <h5>STARTER</h5>
                     <p>Starter features for your business to grow.</p>
                     <h1>FREE</h1>
                     <button className=" tryfree  btn-rounded" type="button">TRY IT FOR FREE</button>
                  </div>
                  <div className="col-lg-7 points">
                     <div>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> Unlimited receipt storage</p>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> Unlimited auto-scans</p>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> Expense report automation</p>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> Asset Life Cycle Management</p>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> Accounting integration </p>
                        <p><img src='/src/assets/tick.svg' alt="tick" /> IT asset management</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</section>
);
};
export default PlanBanner;