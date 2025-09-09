import { ref } from 'vue'

export const product = ref([
  {
    productId: 1,
    quantity : 1,
    name: "Laptop",
    description: "High-performance laptop suitable for work and gaming. Features a fast processor, high-resolution display, and long battery life. Ideal for developers and gamers alike.",
    price: 1200,
    rating: 4.1,
    image: "https://imgs.search.brave.com/kOB1kU1ugfE7Yh372ji0fc7erVyCGbWD2f6I9Srg89c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vTGVu/b3ZvLUlkZWFQYWQt/MWktMTQtTGFwdG9w/LUludGVsLUNlbGVy/b24tTjQ1MDAtNEdC/LTEyOEdCLWVNTUMt/ODJMVjAwNzVVUy0x/Mi1tby1NaWNyb3Nv/ZnQtMzY1LWluY2x1/ZGVkXzU5MWViOTI2/LTY3ZTYtNDhjZC05/Y2E3LWRkOWYyMmU2/MWQyZi43NTI4MDZm/MTVjODU0ZDU5MTI3/MWE4NzkwMDUwZmRj/YS5qcGVnP29kbkhl/aWdodD01NzYmb2Ru/V2lkdGg9NTc2Jm9k/bkJnPUZGRkZGRg"
  },
  {
    productId: 2,
    quantity : 1,
    name: "Mobile",
    description: "Latest smartphone with cutting-edge features. Includes an advanced camera, fast charging, and a powerful processor for smooth multitasking and gaming performance.",
    price: 800,
    rating: 4.5,
    image: "https://imgs.search.brave.com/D7Pw2mtSV9ZT3yvWVmhxClkji1ENv4hfbP5sW8OEaiQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dG1vYmlsZS5jb20v/Y29udGVudC9kYW0v/dC1tb2JpbGUvZW4t/cC9jZWxsLXBob25l/cy9ULU1vYmlsZS9U/LU1vYmlsZS1SRVZW/TC03LTVHL0FyY3Rp/Yy1HcmF5L1QtTW9i/aWxlLVJFVlZMLTct/NUctQXJjdGljLUdy/YXktdGh1bWJuYWls/LnBuZw"
  },
  {
    productId: 3,
    quantity : 1,
    name: "Glasses",
    description: "Stylish sunglasses with UV protection. Lightweight and durable with polarized lenses that reduce glare, perfect for driving or outdoor sports and daily wear.",
    price: 150,
    rating: 3.8,
    image: "https://imgs.search.brave.com/mJfqY-0pJeBSpoeDg5FOuB_bctlQ3LplETVK_VQaky8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc0LzE2Lzgx/LzM2MF9GXzI3NDE2/ODE3NF90aUZQOHJT/cG1pZFlhUWNmenRH/UzVIQk5YV3FvVnpi/RS5qcGc"
  },
  {
    productId: 4,
    quantity : 1,
    name: "Pen",
    description: "Smooth-writing ballpoint pen. Designed for effortless writing with quick-drying ink, a comfortable grip, and a sleek, professional appearance for everyday use.",
    price: 2,
    rating: 4.3,
    image: "https://imgs.search.brave.com/4CEtzQttMTJ4phG84FbJ8Iav4rNnaR3CtPnC9reKCp4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW9udGJsYW5jLmNv/bS9jb250ZW50L2lt/YWdlcy9jbXMveWNt/L3Jlc291cmNlL2Js/b2IvNzQ2NjAwLzUy/MzU5M2FkYzQ0YzJk/Zjk4YWFjOWE4MDky/Y2U3N2YyLzI0LWJh/bGxwb2ludC1wZW4t/aW5sYXktMTkyMHgx/MjgwLTEtLWRhdGEu/cG5nL3cyNjk4Lmpw/Zw"
  },
  {
    productId: 5,
    quantity : 1,
    name: "Book",
    description: "Bestselling fiction novel. Engaging storyline with vivid characters and gripping plot twists. A must-read for lovers of drama, suspense, and emotional journeys.",
    price: 15,
    rating: 4.7,
    image: "https://imgs.search.brave.com/evg7ovCkihft6ZEpdhHMg7x4rYHJKl18OWC9Iklkogw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcnRpZmFjdHVw/cmlzaW5nLmNvbS9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvMS9i/LzFiMGE3MTEwLmpw/Zw"
  },
  {
    productId: 6,
    quantity : 1,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones. Comfortable for long use with crystal-clear sound, deep bass, and a foldable design. Great for music and calls.",
    price: 220,
    rating: 4.4,
    image: "https://imgs.search.brave.com/lly_J0CoBhJzEnZ5bkueCDnlhF6skOUrbnSlIFgdBRM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzgwOTk5/NDA5NjctNzNmZTMw/NjgwOTQ5P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE5u/eDhhR1ZoWkhCb2Iy/NWxjM3hsYm53d2ZI/d3dmSHg4TUE9PQ"
  },
  {
    productId: 7,
    quantity : 1,
    name: "Backpack",
    description: "Durable and spacious travel backpack. Features multiple compartments, padded laptop sleeve, and water-resistant material for secure and comfortable all-day travel.",
    price: 65,
    rating: 4.2,
    image: "https://imgs.search.brave.com/_7bkGy_hkoe2VHkPotHkcLDX4-3kniX5jWytaUqK0KQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lZGdl/LmRpc3N0Zy5jb21t/ZXJjZWNsb3VkLnNh/bGVzZm9yY2UuY29t/L2R3L2ltYWdlL3Yy/L0FBREhfUFJEL29u/L2RlbWFuZHdhcmUu/c3RhdGljLy0vU2l0/ZXMtQ0dJLUl0ZW1N/YXN0ZXIvZW5fVVMv/djE3NTcxMzE4MjU3/NTAvc2l0cy9vZ2lv/LWJhY2twYWNrLTIw/MjAteGl4LTIwL29n/aW8tYmFja3BhY2st/MjAyMC14aXgtMjBf/MTgyMzNfX18xLnBu/Zz9zdz0zMDAwJnE9/NzUmYmdjb2xvcj1G/N0Y3Rjcmc2ZybT1w/bmc"
  },
  {
    productId: 8,
    quantity : 1,
    name: "Keyboard",
    description: "Mechanical keyboard with RGB lighting. Provides tactile feedback, anti-ghosting keys, and customizable lighting profiles. Ideal for gaming and productivity tasks.",
    price: 99,
    rating: 4.6,
    image: "https://imgs.search.brave.com/Xph8zHdsM4LzljBHW1rlmnschD1n7HHydxEORiOrLs8/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzc1Lzc3M2Y3NWRi/YTM2YWFkNTY5NzA5/YjVkYmFmNWViNzA2/LmpwZw"
  },
  {
    productId: 9,
    quantity : 1,
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor. Tracks sleep, steps, and workouts. Syncs with your phone for notifications and health insights.",
    price: 180,
    rating: 4.3,
    image: "https://imgs.search.brave.com/3Ad9eiStt9ov-y9AkcjcvYoit8Eq6uIEZef5V_Zgbv4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGl0YW4uY28uaW4v/ZHcvaW1hZ2UvdjIv/QktERF9QUkQvb24v/ZGVtYW5kd2FyZS5z/dGF0aWMvLS9TaXRl/cy10aXRhbi1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3MTJh/MzZhM2QvaW1hZ2Vz/L0Zhc3RyYWNrL0Nh/dGFsb2cvMzgxNDhR/TTAxXzMuanBnP3N3/PTM2MCZzaD0zNjA"
  },
  {
    productId: 10,
    quantity : 1,
    name: "Gaming Mouse",
    description: "High-precision wired gaming mouse with customizable DPI. Ergonomic design, fast response, and programmable buttons for a competitive gaming experience.",
    price: 45,
    rating: 4.4,
    image: "https://imgs.search.brave.com/qJsOQYZmX-wgSG_cGflvB2pyXOlMBQogRaxuOeV3t5w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1V3/U1pIVzdvSDJzUnBK/NVliQlBMeFYuanBn"
  },
  {
    productId: 11,
    quantity : 1,
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with deep bass. Long battery life, rugged design, and crisp audio make it perfect for indoor and outdoor use.",
    price: 70,
    rating: 4.5,
    image: "https://imgs.search.brave.com/I_McrENH-ol4QQQqBPeLzCQsS5hOvhWIlpVZaVMfLkg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzU1LzYyLzMx/LzM2MF9GXzE0NTU2/MjMxMzRfMm9iVEY1/THZhTVo4QVBzVGQ4/eFJLNjcyckV5aTZ4/T3cuanBn"
  },
  {
    productId: 12,
    quantity : 1,
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support. Adjustable height and armrests, breathable mesh back, and smooth-rolling wheels for comfortable long working hours.",
    price: 250,
    rating: 4.6,
    image: "https://imgs.search.brave.com/n7ATKM4uzd6LdZKxtxwcSRcvmEkyciOBcGs9GooA9cU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY4OGJm/NGIzNjUwZDdmNGJl/YTI0YjU1NC80OjMv/d18zMjAsY19saW1p/dC8zLUhlcm1hbiUy/ME1pbGxlciUyMEFl/cm9uJTIwU09VUkNF/JTIwSnVsaWFuJTIw/Q2hva2thdHR1LnBu/Zw"
  },
  {
    productId: 13,
    quantity : 1,
    name: "Monitor",
    description: "27-inch 4K UHD monitor with ultra-thin bezels. Delivers crisp visuals, wide viewing angles, and a sleek design. Perfect for work or entertainment.",
    price: 350,
    rating: 4.7,
    image: "https://imgs.search.brave.com/socMG-QejkYeEW-E1R6e-0FXzukb-vAmbav7iFoImlo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEyb0lQVW9naUwu/anBn"
  }
])
