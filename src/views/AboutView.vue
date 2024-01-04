<script setup>
import MainLayout from '../components/MainLayout.vue';



// Page Title of Views
const pageTitle = 'About'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
  <section class="bg-white py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <!-- Your Photo -->
        <img src="../assets/jo.jpg" alt="Your Photo" class="h-60 w-60 justify-center  rounded-full mx-auto transition duration-300 hover:scale-110" />
      </div>
      <div class="md:w-1/2 px-5 text-justify">
        <h2 class="text-3xl font-bold text-orange-700 mb-4">About Me</h2>
        <p class="text-gray-600 leading-relaxed">
          Hi, I'm Joan A. Labao, a BSIT student at Cordova Public College. I am passionate about technology and
          software development. My journey in the world of programming has been exciting, and I'm constantly
          learning and exploring new things.
        </p>
        <p class="text-gray-600 leading-relaxed mt-2">
          I love turning ideas into reality through coding and solving real-world problems. Whether it's web
          development, mobile apps, or anything in between, I enjoy the process of creating and improving
          digital experiences.
        </p>
        <p class="text-gray-600 leading-relaxed mt-2">
          Feel free to explore my portfolio and get in touch if you have any questions or opportunities for
          collaboration. I'm always open to new challenges and eager to contribute my skills to meaningful
          projects.
        </p>
      </div>
    </div>

    <div class="container mx-auto mt-14">
      <h2 class="text-3xl font-bold text-orange-700 mb-8">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Skill Card - HTML -->
        <div class="bg-orange-50 p-6 rounded-lg shadow-md transition duration-300 hover:scale-110">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">HTML</h3>
          <p class="text-gray-600 leading-relaxed">
            Proficient in creating structured and semantic markup, understanding the latest HTML5 features, and
            ensuring cross-browser compatibility.
          </p>
        </div>

        <!-- Skill Card - Bootstrap -->
        <div class="bg-orange-50 p-6 rounded-lg shadow-md transition duration-300 hover:scale-110">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">Bootstrap</h3>
          <p class="text-gray-600 leading-relaxed">
            Skilled in using Bootstrap framework to design responsive and visually appealing user interfaces,
            utilizing its grid system and components.
          </p>
        </div>

        <!-- Skill Card - JavaScript -->
        <div class="bg-orange-50 p-6 rounded-lg shadow-md transition duration-300 hover:scale-110">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">JavaScript</h3>
          <p class="text-gray-600 leading-relaxed">
            Experienced in writing dynamic and interactive scripts, manipulating the Document Object Model (DOM),
            and utilizing various JavaScript libraries and frameworks.
          </p>
        </div>

        <!-- Skill Card - CSS -->
        <div class="bg-orange-50 p-6 rounded-lg shadow-md transition duration-300 hover:scale-110">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">CSS</h3>
          <p class="text-gray-600 leading-relaxed">
            Proficient in styling web pages with CSS, including modern layout techniques, animations, and
            responsive design principles.
          </p>
        </div>

        <!-- Skill Card - PHP -->
        <div class="bg-orange-50 p-6 rounded-lg shadow-md transition duration-300 hover:scale-110">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">PHP</h3>
          <p class="text-gray-600 leading-relaxed">
            Skilled in server-side scripting using PHP, building dynamic and interactive web applications, and
            integrating with databases.
          </p>
        </div>
      </div>
    </div>
  </section>
</MainLayout>
</template>

