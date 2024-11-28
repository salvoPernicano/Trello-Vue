<script setup lang="ts">
import type { Task } from '~/types';
import { nanoid } from 'nanoid';    

const emit = defineEmits<{
    (e: 'add', payload : Task) : void;
}>();

const focused = ref(false);
const title  = ref("");

function createTask(e: Event){
    if(title.value.trim()){
        e.preventDefault();
        emit('add', {
            id: nanoid(),
            title: title.value.trim(),
            createdAt: new Date(),
        } as Task);
    }

    title.value = "";
}
</script>

<template>
    <div>
        <textarea
        v-model="title"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
        class="bg-transparent focus:bg-white focus:shadow resize-none w-full  hover:cursor-pointer mt-2 placeholder:text-gray-500 placeholder:font-semibold"
        :class="{
            'h-7' : !focused,
            'h-20 p-2' : focused
        }"
        style="outline: none !important;"
        @focus="focused = true"
        @blur="focused = false"
        :placeholder="!focused ? '+ Add a Task' : 'Enter a Title for this Task'"
        >

        </textarea>
    </div>
</template>

<style scoped>

</style>