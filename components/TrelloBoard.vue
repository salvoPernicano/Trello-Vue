<script setup lang="ts">
import type { Column } from '~/types';
import {nanoid} from 'nanoid';
const columns = ref<Column[]>([
    {
        id : nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                title: 'Create marketing landing page',
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: 'Develop Cool New Feature',
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: 'Fix nav component Bug',
                createdAt: new Date(),
            },
        ],
    },
    {
        id: nanoid(),
        title: 'Selected for devs',
        tasks: []
    },
    {
        id: nanoid(),
        title: 'In Progress',
        tasks: []
    },
    {
        id: nanoid(),
        title: 'QAs',
        tasks: []
    },

]);
</script>

<template>
    <div class="flex gap-4 overflow-x-auto items-start">
        <div class="bg-gray-300 column p-5 rounded min-w-[250px] text-center" v-for="column in columns" :key="column.id">
            <h1 class="font-bold mb-4">
                {{ column.title }}
            </h1>
           <TrelloBoardTask v-for="task in column.tasks" 
           :key="task.id" 
           :task="task" />
           <footer>
            <button class="text-gray-500">+ Add a Card</button>
           </footer>
        </div>
    </div>
</template>
