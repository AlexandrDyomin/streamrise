import { writable, readable } from 'svelte/store';

const screenWidth = writable(window.innerWidth);
const mediumBreakPoint = readable(1179);

export {screenWidth, mediumBreakPoint};