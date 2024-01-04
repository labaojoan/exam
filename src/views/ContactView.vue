<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Contact'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
  <section class="bg-white py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-orange-700 mb-8">Contact Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Contact Form -->
        <div class="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">Send us a Message</h3>
          <!-- Replace the form elements with your actual form implementation -->
          <form>
            <div class="mb-4">
              <label for="name" class="block text-gray-600 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-700"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-600 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-700"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-600 text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-orange-700"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold text-orange-700 mb-4">Contact Information</h3>
          <p class="text-gray-600">
            Feel free to reach out to us for any inquiries or collaboration opportunities. We're here to help!
          </p>
          <ul class="mt-4">
            <li class="flex items-center mb-2">
              <svg class="h-5 w-5 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
              <span class="text-gray-600">Cordova Public College</span>
            </li>
            <li class="flex items-center mb-2">
              <svg class="h-5 w-5 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5c1.5-2.5 6-4 9-2 1.5 1 3 3 3 5a6 6 0 01-6 6h0a6 6 0 01-6-6c0-2 1.5-4 3-5zm9 0c1.5-2.5 6-4 9-2 1.5 1 3 3 3 5a6 6 0 01-6 6h0a6 6 0 01-6-6c0-2 1.5-4 3-5zm9 0c1.5-2.5 6-4 9-2 1.5 1 3 3 3 5a6 6 0 01-6 6h0a6 6 0 01-6-6c0-2 1.5-4 3-5z"
                ></path>
              </svg>
              <span class="text-gray-600">Cordova, Philippines</span>
            </li>
            <li class="flex items-center mb-2">
              <svg class="h-5 w-5 text-orange-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 2c0 1.333 1.667 2 2.667 4 1.333 2.667 2 4 2 6a1 1 0 01-2 0c0-1.333-.667-2-2-4a1 1 0 012 0z"
                ></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16.667 13.333c-.667-1.333-2-2.667-3.333-2.667s-2.666 1.334-3.333 2.667"
                ></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-2-2"></path>
              </svg>
              <span class="text-gray-600">contact@cordovapubliccollege.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  </MainLayout>
</template>