import React from 'react';

import "./slide.css";

function Card(){
    return (
        <>
        <div class="flex-1 p-3">
            <div class="xl:col-span-5 2xl:col-span-7  border border-gray-300 rounded-lg pt-6 md:pt-7 lg:pt-9 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-5 lg:pb-7">

   <div class="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
      <h3 class="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">Top Products</h3>
      <a class="text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1" href="/search">See All Product</a>
   </div>
   
   <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 xl:gap-7 xl:-mt-1.5 2xl:mt-0">
       
       
      <div class="group box-border overflow-hidden flex cursor-pointer hover:shadow-2xl flex-row items-center transition-transform ease-linear bg-white rounded-lg shadow-lg pe-2 lg:pe-3 2xl:pe-4" role="button" title="generic">
         <div class="flex flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
            <div class="cardimg">
               <div class="boxsizing">
                   <img alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9IjI2NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
               </div>
               <img alt="generic" src="https://s3.ap-south-1.amazonaws.com/images.saveo.in/IMG_1610006417774_5e4d35e22516b4391d8551c8_SAVEOMED.jpg" class="boxinner bg-gray-300 object-cover rounded-s-md rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105" />
            </div>
         </div>
         <div class=" px-6 py-4">
            <h2 class="text-sm font-semibold truncate text-gray-800">Vasograin Tabs 14's</h2>
            <p class="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">Cadila Pharma 14's - 6384 Units</p>
            <div class="mt-4">
            <div class="text-heading text-indigo-500 font-semibold sm:text-base mt-1.5 space-s-2 text-xs md:text-base  md:mt-2.5 2xl:mt-3"><span class="text-xs inline-block">PTR ₹ 80.50</span><br /><span class="sm:text-base text-xs font-normal text-gray-800">MRP ₹ 112.70</span></div>
            </div>
         </div>
      </div>

      <div class="group box-border overflow-hidden flex cursor-pointer hover:shadow-2xl flex-row items-center transition-transform ease-linear bg-white rounded-lg shadow-lg pe-2 lg:pe-3 2xl:pe-4" role="button" title="generic">
         <div class="flex flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
            <div class="cardimg">
               <div class="boxsizing">
                   <img alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9IjI2NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
               </div>
               <img alt="generic" src="https://s3.ap-south-1.amazonaws.com/images.saveo.in/IMG_1626350698802_11032229_SAVEOMED.jpeg" class="boxinner bg-gray-300 object-cover rounded-s-md rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105" />
            </div>
         </div>
         <div class=" px-6 py-4">
            <h2 class="text-sm font-semibold truncate text-gray-800">Burnheal Cream 15G</h2>
            <p class="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">Generic - 1 Units</p>
            <div class="mt-4">
            <div class="text-heading text-indigo-500 font-semibold sm:text-base mt-1.5 space-s-2 text-xs md:text-base  md:mt-2.5 2xl:mt-3"><span class="text-xs inline-block">PTR ₹ 26.46</span><br /><span class="sm:text-base text-xs font-normal text-gray-800">MRP ₹ 74.50</span></div>
            </div>
         </div>
      </div>

      <div class="group box-border overflow-hidden flex cursor-pointer hover:shadow-2xl flex-row items-center transition-transform ease-linear bg-white rounded-lg shadow-lg pe-2 lg:pe-3 2xl:pe-4" role="button" title="generic">
         <div class="flex flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
            <div class="cardimg">
               <div class="boxsizing">
                   <img alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9IjI2NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
               </div>
               <img alt="generic" src="https://s3.ap-south-1.amazonaws.com/images.saveo.in/CS00050_Coronasafety_11011007.png"class="boxinner bg-gray-300 object-cover rounded-s-md rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105" />
            </div>
         </div>
         <div class=" px-6 py-4">
            <h2 class="text-sm font-semibold truncate text-gray-800">Zincovit Syrup</h2>
            <p class="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">Apex Zincovit(200ML) - 2435 Units</p>
            <div class="mt-4">
            <div class="text-heading text-indigo-500 font-semibold sm:text-base mt-1.5 space-s-2 text-xs md:text-base  md:mt-2.5 2xl:mt-3"><span class="text-xs inline-block">PTR ₹ 91.53</span><br /><span class="sm:text-base text-xs font-normal text-gray-800">MRP ₹ 135.00</span></div>
            </div>
         </div>
      </div>


      <div class="group box-border overflow-hidden flex cursor-pointer hover:shadow-2xl flex-row items-center transition-transform ease-linear bg-white rounded-lg shadow-lg pe-2 lg:pe-3 2xl:pe-4" role="button" title="generic">
         <div class="flex flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
            <div class="cardimg">
               <div class="boxsizing">
                   <img alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY1IiBoZWlnaHQ9IjI2NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
               </div>
               <img alt="generic" src="https://s3.ap-south-1.amazonaws.com/images.saveo.in/IMG_1626344387994_11012423_SAVEOMED.png" class="boxinner bg-gray-300 object-cover rounded-s-md rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105" />
            </div>
         </div>
         <div class=" px-6 py-4">
            <h2 class="text-sm font-semibold truncate text-gray-800">Pantosec 40MG</h2>
            <p class="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">Generic - 188 Units</p>
            <div class="mt-4">
            <div class="text-heading text-indigo-500 font-semibold sm:text-base mt-1.5 space-s-2 text-xs md:text-base  md:mt-2.5 2xl:mt-3"><span class="text-xs inline-block">PTR ₹ 15.50</span><br /><span class="sm:text-base text-xs font-normal text-gray-800">MRP ₹ 118.65</span></div>
            </div>
         </div>
      </div>


      

      
</div>
</div></div>
        </>
    );
}

export default Card;