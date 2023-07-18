import {createRouter, createWebHashHistory} from "vue-router";

import Piano from "@/page/Piano.vue"
import music_box from "@/page/music_box.vue"
import nylon_guitar from "@/page/nylon.vue"
import electric_piano from "@/page/electric_piano.vue"

const routes = [
    {
        Path: '',
        redirect: '/piano'
    },
    {
        path: '/piano',
        component: Piano
    },
    {
        path: '/music_box',
        component: music_box
    },
    {
        path: '/nylon_guitar',
        component: nylon_guitar
    },
    {
        path: '/electric_piano',
        component: electric_piano
    }
]
 
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;