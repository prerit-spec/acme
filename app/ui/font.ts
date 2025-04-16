import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'], // Specify subsets if needed
    weight: ['400', '700'], // Specify weights if needed
});

const lusitana = Lusitana({
    subsets: ['latin'], // Specify subsets if needed
    weight: ['400', '700'], // Specify weights if needed
})
export { inter, lusitana };