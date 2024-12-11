<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to FitZone
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Choose an option to get started
          </p>
        </div>
        <div class="mt-8 space-y-6">
          <!-- Register Card -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Register</h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>Create a new account to join FitZone and start your fitness journey.</p>
              </div>
              <div class="mt-5">
                <button
                  type="button"
                  @click="navigateTo('register')"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <UserPlusIcon class="mr-2 h-5 w-5" />
                  Create Account
                </button>
              </div>
            </div>
          </div>
  
          <!-- Login Card -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Login</h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>Already have an account? Sign in to access your profile and workouts.</p>
              </div>
              <div class="mt-5">
                <button
                  type="button"
                  @click="navigateTo('login')"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <LogInIcon class="mr-2 h-5 w-5" />
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { UserPlusIcon, LogInIcon } from 'lucide-vue-next'
  
  const navigateTo = (route) => {
    // This function would typically use Vue Router to navigate to the appropriate page
    console.log(`Navigating to ${route} page`)
    // Example with Vue Router (uncomment if you're using Vue Router):
    // router.push({ name: route })
  }
  </script>