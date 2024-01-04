<template>
    <div class="bg-white py-6 sm:py-8 lg:py-48">
        <div class="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-8 mb-8 md:mb-12">
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-bold text-orange-800 lg:text-3xl">Latest Projects</h2>

                <p class="text-orange-700 text-lg">
                    This is a section of some simple filler text, also known as placeholder text.
                </p>
            </div>

            <router-link to="/projects"
                class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-orange-500 outline-none 
                ring-indigo-300 transition duration-100 hover:bg-orange-100 focus-visible:ring active:bg-orange-200 md:px-8 md:py-3 md:text-base">View More Projects
            </router-link>
        </div>
        
        <!-- Project Image Gallery -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <router-link to="/todo" href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-orange-100 shadow-lg md:h-80">
                <img src="../assets/todo.png"
                    loading="lazy" alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Todo App</span>
            </router-link>
            <!-- image - end -->

            <!-- image - start -->
            <router-link to="/Game"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-orange-100 shadow-lg md:col-span-2 md:h-80">
                <img src="../assets/mathGame.png"
                    loading="lazy" alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </router-link>
            <!-- image - end -->        
        </div>
    </div>
</template>