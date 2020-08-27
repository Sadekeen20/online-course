import dataScience from './dataScience';
import AI from './AI';
import programming from './programming';


const fakeData = [...dataScience, ...AI, ...programming];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;