import { writable } from 'svelte/store';

export const libraryData = writable<{ title: string; url: string }[] | null>(null);
