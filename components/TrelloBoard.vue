<script setup lang="ts">
import type { Column, Task } from '~/types';
import draggable from 'vuedraggable';
import { nanoid } from 'nanoid';
const columns = ref<Column[]>([
    {
        id: nanoid(),
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
const alt = useKeyModifier('Alt');
</script>

<template>
    <div>
        <draggable 
        v-model="columns" 
        group="columns" 
        item-key="id" 
        :animation="150" 
        handle=".drag-handle"
        class="flex gap-4 overflow-x-auto items-start p-2">
            
        <template #item="{ element: column }: { element: Column }">
                <div class="bg-gray-300 column p-5 rounded min-w-[250px] text-center">
                    <h1 class="font-bold mb-5 p-2">
                        <DragHandle />
                        {{ column.title }}
                    </h1>

                <draggable 
                v-model="column.tasks" 
                :group="{
                name : 'tasks',
                pull : alt ? 'clone' : true
                }" 
                item-key="id" 
                handle=".drag-handle"
                :animation="150" 
                
                class="overflow-x-auto ">
                        <template #item="{ element: task } : { element: Task }">
                            <div>
                                <TrelloBoardTask :task="task" @delete="column.tasks = column.tasks.filter((e) => e.id !== $event)"/>
                            </div>
                        </template>
                    </draggable>
                    <footer>
              <NewTask @add="column.tasks.push($event)"/>
                    </footer>
                </div>

            </template>
        </draggable>
    </div>
</template>

<style scoped>

::-webkit-scrollbar {
  width: 8px; 
  height: 8px; 
}


::-webkit-scrollbar-track {
  background: #f3f3f3; 
  border-radius: 4px;
}


::-webkit-scrollbar-thumb {
  background: #505050; 
  border-radius: 4px;
}


::-webkit-scrollbar-thumb:hover {
  background: #333232;
}


.column {
  scrollbar-width: thin; 
  scrollbar-color: #888 #f3f3f3; 
}
</style>
