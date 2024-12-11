<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-6 shadow-lg">
      <h1 class="text-4xl font-bold text-center">FitZone Gym</h1>
    </header>
    
    <!-- Main content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Gym Information Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold text-blue-800 mb-4">Welcome to FitZone</h2>
        
        <!-- Address section -->
        <div class="flex items-start space-x-4">
          <MapPinIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <p class="font-medium">123 Fitness Street, Healthyville, HV 12345</p>
            <p class="text-gray-600">Open 24/7 for your convenience</p>
          </div>
        </div>
        
        <!-- Phone section -->
        <div class="flex items-start space-x-4 mt-4">
          <PhoneIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <p class="font-medium">(555) 123-4567</p>
            <p class="text-gray-600">Call us for membership information</p>
          </div>
        </div>
        
        <p class="mt-4 text-gray-700">
          FitZone is your ultimate destination for achieving your fitness goals. 
          With state-of-the-art equipment and expert trainers, we're here to help 
          you become the best version of yourself.
        </p>
      </div>
      
      <!-- Trainers Section -->
      <h2 class="text-2xl font-semibold text-blue-800 mb-6">Meet Our Trainers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="trainer in trainers" :key="trainer.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="trainer.image" :alt="trainer.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-blue-800">{{ trainer.name }}</h3>
            <p class="text-gray-600">{{ trainer.specialty }}</p>
            <p class="mt-2 text-gray-700">{{ trainer.bio }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPinIcon, PhoneIcon } from 'lucide-vue-next'

const trainers = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Yoga & Pilates',
    bio: 'Sarah specializes in mindful movement and body awareness techniques.',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    name: 'Mike Thompson',
    specialty: 'Strength Training',
    bio: 'Mike is passionate about helping clients build muscle and increase strength.',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 3,
    name: 'Emily Chen',
    specialty: 'Cardio & HIIT',
    bio: 'Emily\'s high-energy classes will get your heart pumping and calories burning.',
    image: '/placeholder.svg?height=200&width=300'
  }
])
</script>

<style scoped>
/* Header styles */
header {
  background-color: #1E40AF;
}

header h1 {
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
}

/* Gym Information Card */
.bg-white {
  background-color: white;
}

.bg-blue-800 {
  background-color: #1D4ED8;
}

.bg-blue-600 {
  background-color: #2563EB;
}

/* Trainer section */
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.md\:grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.lg\:grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.text-blue-800 {
  color: #1D4ED8;
}

.text-blue-600 {
  color: #2563EB;
}

.text-gray-600 {
  color: #4B5563;
}

.text-gray-700 {
  color: #374151;
}

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-4 {
  padding: 1rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.object-cover {
  object-fit: cover;
}

.w-full {
  width: 100%;
}

.h-48 {
  height: 12rem;
}

/* Responsiveness */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 2rem;
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}
</style>
