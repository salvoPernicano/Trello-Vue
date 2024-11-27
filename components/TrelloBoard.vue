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
    <div>
        <div v-for="column in columns" :key="column.id">
            <h1>
                {{ column.title }}
            </h1>
            <ul>
                <li v-for="task in column.tasks" :key="task.id">
                    <h3>
                        {{ task.title }}
                    </h3>
                    <span>
                        {{ task.createdAt }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
