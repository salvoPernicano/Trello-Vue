<script setup lang="ts">
import type { Task, ID } from '~/types';
const props = defineProps<{
    task: Task;
}>();

const emit = defineEmits<{
    (e: "delete", payload: ID ): void;
}>();

const isTaskFocused = ref(false);
onKeyStroke("Backspace",(e)=> {
    if (isTaskFocused.value) emit("delete", props.task.id)
    })
</script>

<template>
    <div 
    :title="task.createdAt.toLocaleDateString()"
    class="task bg-white p-2 mb-2 rounded shadow-md max-w-[250px] flex text-center"
    @focus="isTaskFocused = true"
    @blur="isTaskFocused = false"
    tabindex="0"
    >
    <DragHandle class="p-2"/>
<span class="w-full inline-block">{{ task.title }}</span>
    </div>
</template>

<style>
.sortable-drag .task{
transform: rotate(5deg)
}
.sortable-ghost .task{
position: relative;
}

.sortable-ghost .task::after{
    content:"";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-400 rounded;
}

.task:focus,
.task:focus-visible{
    @apply outline-gray-400 !important;
    outline: gray auto 1px;
}
</style>