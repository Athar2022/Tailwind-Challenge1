//Dom
const menuBtn = document.getElementById('menue');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full'); // إذا كانت مختفية تظهر، وإذا كانت ظاهرة تختفي
});


// Product data
      const products = [
        { name: "Premium Headphones", price: "$299", image: "src/images/j1.jpg", rating: 4.8 },
        { name: "Smart Watch", price: "$199", image: "src/images/j2.jpg", rating: 4.5 },
        { name: "Wireless Earbuds", price: "$149", image: "src/images/j3.jpg", rating: 4.7 },
        { name: "Digital Camera", price: "$599", image: "src/images/j4.jpg", rating: 4.9 },
        { name: "Bluetooth Speaker", price: "$129", image: "src/images/j5.jpg", rating: 4.6 },
        { name: "Gaming Mouse", price: "$89", image: "src/images/j6.jpg", rating: 4.7 },
      ];

      const carousel = document.getElementById('carousel');
      let index = 0;

      function renderCarousel(){
        carousel.innerHTML = products.map(product =>`
           <div class="product-card flex-none w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div class="relative">
                <img src="${product.image}" alt="" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2 flex gap-2">
                  <button class="icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg transition-transform">
                    <i class="bx bx-heart text-xl"></i>
                  </button>
                  <button class="icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg transition-transform">
                    <i class="bx bx-cart-add text-xl"></i>
                  </button>
                </div>
              </div>
              <div class="p-4">
                <a href="#" class="text-lg font-semibold">${product.name}</a>
                <span class="text-indigo-400 font-bold">${product.price}</span>
                <div class="flex items-center mt-2 text-yellow-400">
                  ${'★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '☆' : '')}
                  <span class="text-gray-400 text-xs ml-2">(${product.rating.toFixed(1)})</span>
                </div>
              </div>
            </div>
        `).join('');
      }
      
      function slide(direction){
        const cardWidth = 288;
        index += direction;
        if(index >= products.length){
          index =0;
        }else if(index < 0){
          index = products.length - 1;
        }
        carousel.scrollTo({left: index * cardWidth, behavior: 'smooth'});
      }

      document.getElementById('prev-btn').addEventListener('click', ()=> slide(-1));
      document.getElementById('next-btn').addEventListener('click', ()=> slide(1));

      setInterval(()=> slide(1), 3000) //Auto scroll every 3 seconds

      renderCarousel();