

<template>
    <!-- Todo App -->
    <div class="items-center justify-center flex p-16 min-h-screen ">
        <div class="items-center justify-center p-8 bg-orange-50 rounded-lg shadow-md">
            <div class="text-center mb-8">
                <h1 class="text-orange-900 text-5xl mb-14">Todo App</h1>
                <input type="text" class="px-3 py-2 border border-gray-300 rounded mr-3" placeholder="Search task" v-model="searchQuery" />
            </div>
            <div class="actionsflex items-center mb-4">
                <form @submit.prevent="addTask">
                    <input type="text" class="px-3 py-2 border border-gray-300 rounded mr-3" placeholder="Add Task" v-model="task" required />
                    <button class="bg-green-400 text-black px-3 rounded" type="submit">Add</button>
                </form>
            </div>
            <div class="item-center justify-center  flex flex-col items-center gap-2.5 mb-4 sm:justify-center lg:justify-start">
                <div class="flex flex-row rounded bg-white p-3 " v-for="todo in filteredTodos" :key="todo.id">
                    <p :class="{ 'line-through': todo.done }" class="mr-5 flex-row flex-col text-orange-900">{{ todo.details }}</p>
                    <div class="">
                        <button class="bg-green-300 text-black px-2 gap-2.5 mr-3 rounded" @click="markAsDone(todo.id)">Done</button>
                        <button class="bg-red-300 text-black px-2 gap-2.5 rounded" @click="removeTask(todo.id)">Remove</button>
                    </div>
                </div>
            </div>
            <button class="bg-red-400 text-black px-4 py-2 rounded" @click="clearAllTasks">Clear ALL tasks</button>
        </div>
    </div>
</template>
<script setup>
import database from '../firebase';
import { ref, computed, onMounted } from 'vue';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const db = database;
const task = ref('');
const searchQuery = ref('');
const todos = ref([]);

// Function to fetch tasks from Firestore
const fetchTasks = async () => {
try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    todos.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
} catch (error) {
    console.error('Error fetching tasks:', error);
}
};

// Fetch tasks on component mount
onMounted(fetchTasks);

const addTask = async () => {
try {
    if (task.value.trim() !== '') {
        const newTask = { details: task.value, done: false };
        const docRef = await addDoc(collection(db, 'tasks'), newTask);
        todos.value.push({ ...newTask, id: docRef.id });
        task.value = '';
    }
} catch (error) {
    console.error('Error adding task:', error);
}
};

const removeTask = async (taskId) => {
try {
    await deleteDoc(doc(db, 'tasks', taskId));
    todos.value = todos.value.filter((todo) => todo.id !== taskId);
} catch (error) {
    console.error('Error removing task:', error);
}
};

const markAsDone = async (taskId) => {
try {
    const todo = todos.value.find((t) => t.id === taskId);
    if (todo) {
        await updateDoc(doc(db, 'tasks', taskId), { done: !todo.done });
        todo.done = !todo.done;
    }
} catch (error) {
    console.error('Error updating task:', error);
}
};

const clearAllTasks = async () => {
try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
    });
    todos.value = [];
} catch (error) {
    console.error('Error clearing all tasks:', error);
}
};

const filteredTodos = computed(() => {
return todos.value.filter((todo) =>
    todo.details.toLowerCase().includes(searchQuery.value.toLowerCase())
);
});
</script>