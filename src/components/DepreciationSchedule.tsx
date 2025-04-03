
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

const DepreciationSchedule: React.FC = () => {
  return (
    <section 
      id="depreciation-schedule" 
      className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir"
    >
      <div className="text-center mb-12">
        <AnimatedText
          text="INVESTMENT BENEFITS"
          tag="p"
          className="text-noir-gold text-sm tracking-widest"
          animation="slide-up"
        />
        <AnimatedText
          text="Depreciation Schedule"
          tag="h2"
          className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
          animation="slide-up"
          delay={100}
        />
        <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
        <AnimatedText
          text="Maximize your investment with substantial tax benefits"
          tag="p"
          className="text-gray-300 max-w-2xl mx-auto"
          animation="slide-up"
          delay={200}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tax Deduction Tables Image */}
        <div className="mb-12 reveal reveal-delay-1">
          <div className="bg-noir-light p-6 rounded-sm shadow-lg">
            <ImageReveal
              src="/lovable-uploads/c66e65b4-3bc2-40ac-91b3-da19b666f704.png"
              alt="Estimated Tax Deductions Table"
              className="w-full rounded-sm"
              aspectRatio="aspect-[16/9]"
              animation="slide-up"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-light text-white">Estimated Tax Deductions</h3>
              <p className="text-gray-400 mt-2">Calculate your potential tax benefits across different apartment configurations</p>
            </div>
          </div>
        </div>

        {/* Kitchen Deductions Image */}
        <div className="mb-12 reveal reveal-delay-2">
          <div className="bg-noir-light p-6 rounded-sm shadow-lg">
            <ImageReveal
              src="/lovable-uploads/45506320-4d4e-498d-a2c9-ad2ede320d77.png"
              alt="Example of kitchen fixtures depreciation"
              className="w-full rounded-sm"
              aspectRatio="aspect-auto"
              animation="slide-up"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-light text-white">Item-by-Item Depreciation</h3>
              <p className="text-gray-400 mt-2">Example of first year deductions for kitchen and common fixtures</p>
            </div>
          </div>
        </div>

        {/* Basic Concept Section */}
        <div className="bg-noir-light p-8 rounded-sm shadow-lg reveal reveal-delay-3">
          <h3 className="text-2xl font-light text-white mb-6 text-center">Basic Concept of Depreciation</h3>
          <p className="text-gray-300 mb-4">(CAPITAL WORKS: DIVISION 43)</p>
          
          <h4 className="text-xl font-medium text-noir-gold mt-8 mb-4">EXAMPLE DEPRECIATION</h4>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Property investors are in the business of making money, and as with every business the Australian Taxation Office allows you to claim depreciation as a tax deduction.
            </p>
            
            <p>
              Depreciation is the accounting method used for calculating the loss in value of a building and its fixtures & fittings as the property gets older.
            </p>
            
            <p>
              With a Tax Depreciation Schedule, you can claim that loss on rental properties as a deduction in your tax return.
            </p>
            
            <p>
              By estimating the value of each item, an investor can claim $3,020 in an average kitchen in the first full year alone. But depreciation isn't just limited to the kitchen, it applies to every room of the house plus the outside areas. For new strata tax return every year until the cost of the asset is fully written off.
            </p>
            
            <p>
              For strata properties, your portion of the common areas can also be claimed including pools, gyms and car parks.
            </p>
            
            <p>
              Having a Tax Depreciation Schedule helps increase your tax return and generate additional cash flow that can be used to help finance your next investment!
            </p>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="bg-noir-gold/10 p-6 rounded-sm border border-noir-gold/20 max-w-sm">
              <h4 className="text-white text-center mb-4">Construction Cost Example</h4>
              <div className="flex justify-between text-gray-300">
                <span>Construction Cost:</span>
                <span className="text-noir-gold">$400,000</span>
              </div>
              <div className="flex justify-between text-gray-300 mt-2">
                <span>Depreciation per year:</span>
                <span className="text-noir-gold">$10,000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-noir-gold/10 p-6 rounded-sm border border-noir-gold/20 text-center reveal reveal-delay-4">
          <h4 className="text-xl font-medium text-white mb-4">Ready to Maximize Your Investment?</h4>
          <p className="text-gray-300 mb-6">
            Contact our team to receive a detailed Tax Depreciation Schedule estimate specific to your apartment choice.
          </p>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-noir-gold text-noir-dark hover:bg-noir-gold2 transition-colors rounded-sm inline-block font-medium"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DepreciationSchedule;
