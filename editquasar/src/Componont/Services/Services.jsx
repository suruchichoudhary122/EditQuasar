import React from "react";
 {/*  src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/photo-editing-1.jpg" */}
        {/*     src="https://editpro5.files.wordpress.com/2024/02/logo-designing.jpg" */}
     {/* https://editpro5.wordpress.com/wp-content/uploads/2024/02/website-designing.webp */}
     {/* https://editpro5.wordpress.com/wp-content/uploads/2024/02/blog-writing.webp */}


// export default function Services() {
  
//   return (
//     <div className="bg-richblack-800  h-full w-[100vw] ">
//       <p className="text-6xl bg-slate-700  py-4 text-center text-richblack-50  ">
//         Our Services
//       </p>
//       <div className=" max-w-maxContent w-11/12 px-5  mx-auto">
//         <p className="text-xl text-center text-yellow-5 md:text-3xl">
//           "“Unleash Creative Excellence with EditQuasar Your Partner for
//           Crafting Captivating Masterpieces”"
//         </p>
//       </div>
     
       
//         <div class="parallax-container">
//   <div class="grid grid-cols-2 gap-4">
//     <div class="relative overflow-hidden group">
//       <img  src="https://editpro5.files.wordpress.com/2024/02/logo-designing.jpg" class="w-full h-auto transition-transform duration-300 transform hover:scale-105" alt="Image 1"/>
//       <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <p class="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div class="mt-4">
//           <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">Learn More</button>
//           <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">Login</button>
//         </div>
//       </div>
//     </div>


//     <div class="relative overflow-hidden group ">
//      <div className="relative overflow-hidden group hover:opacity-5"> <img  src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/photo-editing-1.jpg" alt="Image 1"  /></div>
//       <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <p class="text-black text-xl  text-center">Transform images with EditPro’s professional photo editing. Meticulous attention ensures stunning results.</p>
//         <div class="mt-4">
//           <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">Learn More</button>
//           <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">Login</button>
//         </div>
//       </div>
//     </div>


//     <div class="relative overflow-hidden group">
//       <img src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/blog-writing.webp" alt="Image 1"/>
//       <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <p class="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div class="mt-4">
//           <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">Learn More</button>
//           <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">Login</button>
//         </div>
//       </div>
//     </div>


//     <div class="relative overflow-hidden group">
//       <img  src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/website-designing.webp " alt="Image 1"/>
//       <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <p class="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div class="mt-4">
//           <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">Learn More</button>
//           <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">Login</button>
//         </div>
//       </div>
//     </div>
    
//   </div>
// </div>






//     </div>
//   );
// }


export default function Services() {
  return (
    <div className="bg-richblack-800 h-full w-full">
      <p className="text-6xl bg-slate-700 py-4 text-center text-richblack-50">
        Our Services
      </p>
      <div className="max-w-maxContent w-11/12 px-5 mx-auto">
        <p className="text-xl text-center text-yellow-500 md:text-3xl">
          "Unleash Creative Excellence with EditQuasar Your Partner for Crafting Captivating Masterpieces"
        </p>
      </div>


        {/* image 1  */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-maxContent mx-auto mt-8">
        <div className="relative overflow-hidden group">
          <img
            src="https://editpro5.files.wordpress.com/2024/02/logo-designing.jpg"
            className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            alt="Image 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">
              Transform images with EditPro’s professional photo editing.
              Meticulous attention ensures stunning results.
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">
                Explore Our Work
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">
                View Pricing
              </button>
            </div>
          </div>


      
      </div>


      {/* image 2  */}
    
        <div className="relative overflow-hidden group">
          <img
          src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/photo-editing-1.jpg" 
            className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            alt="Image 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">
              Transform images with EditPro’s professional photo editing.
              Meticulous attention ensures stunning results.
            </p>
            <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">
                Explore Our Work
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">
                View Pricing
              </button>
            </div>
          </div>
       

        
      </div>
      {/* image 3  */}
      
        <div className="relative overflow-hidden group">
          <img
            src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/website-designing.webp"
            className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            alt="Image 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">
              Transform images with EditPro’s professional photo editing.
              Meticulous attention ensures stunning results.
            </p>
            <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">
                Explore Our Work
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">
                View Pricing
              </button>
            </div>
          </div>
        

        
      </div>
      {/* image 4  */}
     
        <div className="relative overflow-hidden group">
          <img
            src="https://editpro5.wordpress.com/wp-content/uploads/2024/02/blog-writing.webp"
            className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            alt="Image 1"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center">
              Transform images with EditPro’s professional photo editing.
              Meticulous attention ensures stunning results.
            </p>
            <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:-translate-y-1">
                Explore Our Work
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:-translate-y-1">
                View Pricing
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

